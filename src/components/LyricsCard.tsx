import React, { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TrackIDAtomState } from "./atoms/playlistAtom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RxSymbol } from "react-icons/rx";
import * as Select from "@radix-ui/react-select";
import { progressIntervalState } from "./atoms/progressAtom";
import { languageState } from "./atoms/languageAtom";

type LyricsResponse = {
  lines: { words: string; time: string }[];
  language: string;
};

export default function LyricsCard(): React.JSX.Element {
  const trackID = useRecoilValue(TrackIDAtomState);
  const progressMs = useRecoilValue(progressIntervalState);
  const [languages, setLanguages] = useRecoilState(languageState);
  const [manualScroll, setManualScroll] = React.useState(false);
  const [translatedLyrics, setTranslatedLyrics] = React.useState<string[]>([]);
  const USER_ACCESS_TOKEN = process.env.HUGGING_FACE_API_TOKEN;

  const fetchLyrics = async (trackID: string) => {
    if (!trackID) return;
    const { data } = await axios.get<LyricsResponse>(
      `http://localhost:3000/api/${trackID}`
    );
    setLanguages({ ...languages, sourceLanguage: data.language });

    return data;
  };

  const { isFetching, data, refetch } = useQuery({
    queryKey: ["lyrics"],
    queryFn: async () => await fetchLyrics(trackID),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: !!trackID,
  });

  useEffect(() => {
    if (trackID) {
      refetch();
    }
  }, [trackID, refetch]);

  const translateLyrics = async (
    lyrics: string,
    targetLang: string,
    sourceLang: string
  ) => {
    // Check if lyrics are empty
    if (!lyrics.trim()) {
      console.log("Empty lyrics, skipping translation.");
      return lyrics;
    }

    let retryCount = 3; // Number of retry attempts
    const apiUrl = `https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-${sourceLang}-${targetLang}`;

    while (retryCount > 0) {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${USER_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ inputs: lyrics }),
        });

        if (!response.ok) {
          // Log the error response for debugging
          if (response.status !== 503) {
            const errorResponse = await response.json();
            console.error("Error response:", errorResponse);
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // If server error, retry after a delay
          throw new Error("Service temporarily unavailable, retrying...");
        }

        const data = await response.json();
        return data[0]["translation_text"]; // Assuming the response format is correct
      } catch (error) {
        console.error("Translation error:", error);
        retryCount--;
        if (retryCount > 0) {
          console.log(`Retrying... Attempts left: ${retryCount}`);
          await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds before retrying
        } else {
          return lyrics; // Return the original text in case of error
        }
      }
    }
  };

  useEffect(() => {
    const translateAllLines = async () => {
      // Ensure data and data.lines are defined
      if (data && data.lines) {
        const translationPromises = data.lines.map((line) =>
          translateLyrics(
            line.words,
            languages.targetLanguage,
            languages.sourceLanguage
          )
        );
        const translations = await Promise.all(translationPromises);
        console.log("Translations:", translations);
        setTranslatedLyrics(translations);
      }
    };

    // Trigger translation if data is available
    if (data && data.lines) {
      console.log("Translating lyrics:", data.lines);
      translateAllLines();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, languages.sourceLanguage, languages.targetLanguage]);

  const findNearestSmallestNumber = useMemo(() => {
    // Memoized logic to find nearest smallest number
    return (num: number, arr: string | any[]) => {
      // Function body
      let smallest = -Infinity;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num && arr[i] > smallest) {
          smallest = arr[i];
        }
      }
      return smallest;
    };
  }, []);

  useEffect(() => {
    const element = document.querySelector('[data-id="lyrics-container"]');
    if (element) {
      const handleManualScroll = () => {
        setManualScroll(true);
        setTimeout(() => setManualScroll(false), 10000); // 5 seconds delay
      };
      element.addEventListener("scroll", handleManualScroll);
      return () => element.removeEventListener("scroll", handleManualScroll);
    }
  }, []);

  useEffect(() => {
    const updateScrollPosition = () => {
      if (!manualScroll && data && data.lines) {
        const element = document.querySelector('[data-id="lyrics-container"]');
        if (element) {
          if (progressMs < 499) {
            element.scrollTop = 0;
          } else {
            // Auto-scroll logic here
            const nearestTime = findNearestSmallestNumber(
              progressMs,
              data.lines.map((d) => Number(d.time))
            );
            const child = element.querySelector(
              `[data-position="${nearestTime}"]`
            );
            if (child) {
              child.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }
        }
      }
    };
    updateScrollPosition();
  }, [progressMs, data, findNearestSmallestNumber, manualScroll]);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center">
        <RxSymbol size="40" className="animate-spin" />
        <span>Loading lyrics...</span>
      </div>
    );
  }

  if (!data || !data.lines) {
    return (
      <div className="flex justify-center items-center">No lyrics found.</div>
    );
  }

  return (
    <>
      <div
        className={`lg:h-full max-lg:max-h-[82vh] max-lg:fixed max-lg:right-5 max-lg:left-5 max-lg:bottom-5 max-lg:z-50 duration-200 ease-linear relative`}
      >
        <div
          className="flex flex-col overflow-hidden px-2 py-4 transition-opacity text-4xl md:text-2xl lg:text-3xl lg:gap-4 font-semibold gap-5 break-all items-center"
          data-id="lyrics-container"
        >
          {data &&
            data.lines?.map((line, index) => {
              const lineTime = Number(line.time);
              const isHighlighted = progressMs >= lineTime;

              return (
                <>
                  <p
                    key={index}
                    data-position={line.time}
                    className={`cursor-pointer whitespace-normal text-wrap text-center transition-opacity duration-300`}
                    style={{
                      opacity: isHighlighted ? "100%" : "10%",
                    }}
                    onMouseEnter={(ev) =>
                      (ev.currentTarget.style.opacity = "100%")
                    }
                    onMouseLeave={(ev) =>
                      (ev.currentTarget.style.opacity = isHighlighted
                        ? "100%"
                        : "10%")
                    }
                  >
                    {translatedLyrics[index]}
                  </p>
                  <span className="text-base text-gray-400">{line.words}</span>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
