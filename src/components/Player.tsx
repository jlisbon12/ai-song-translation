"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { UserSession } from "@/lib/models";
import { TrackIDAtomState } from "./atoms/playlistAtom";
import useSpotify from "@/hooks/useSpotify";
import { useRecoilValue } from "recoil";
import { deviceIdAtom } from "@/components/atoms/deviceAtom";
import { progressIntervalState } from "@/components/atoms/progressAtom";

import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { ListMusic, RepeatIcon, ShuffleIcon } from "lucide-react";
import Slider from "./Slider";

function millisecondsToMinutesAndSeconds(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);

  return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
}

export default function Player(): React.JSX.Element {
  const { data: session } = useSession() as { data: UserSession };
  const [volume, setVolume] = React.useState(0);
  const [progressInterval, setProgressInterval] = useRecoilState(
    progressIntervalState
  );
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isRepeat, setIsRepeat] = React.useState(false);
  const [isShuffle, setIsShuffle] = React.useState(false);
  const [Track, setTrack] = React.useState<SpotifyApi.TrackObjectFull>();
  const [trackID, setTrackID] = useRecoilState(TrackIDAtomState);
  const deviceId = useRecoilValue(deviceIdAtom);
  const spotifyApi = useSpotify();
  const PlayIcon = isPlaying ? AiOutlinePauseCircle : AiOutlinePlayCircle;
  const VolumeIcon = volume > 0 ? FaVolumeHigh : FaVolumeXmark;

  const fetchCurrentData = async () => {
    try {
      const data = await spotifyApi.getMyCurrentPlaybackState();
      if (data.body) {
        setTrack(data.body.item as SpotifyApi.TrackObjectFull);
        setTrackID(data.body.item?.id ?? "");
        setVolume(data.body.device.volume_percent ?? 0);
        setIsPlaying(Boolean(data.body.is_playing));
        setIsRepeat(data.body.repeat_state === "track");
        setProgressInterval(data.body.progress_ms ?? 0);
      }
    } catch (error) {
      console.error("Error fetching playback state:", error);
    }
  };

  const handlePlayPause = async () => {
    if (!trackID || !deviceId) {
      console.error("No track ID or device ID found");
      return;
    }

    try {
      const response = await spotifyApi.transferMyPlayback([deviceId], {
        play: !isPlaying,
      });
      if (response.statusCode === 204) {
        setIsPlaying(!isPlaying);
      } else {
        console.error("Error transferring playback:", response);
      }
    } catch (error) {
      console.error("Playback transfer error:", error);
    }
  };

  const playTrack = async (trackURI: string) => {
    if (!deviceId) return;

    try {
      await spotifyApi.play({
        uris: [trackURI],
        device_id: deviceId,
      });
      setIsPlaying(true);
    } catch (error) {
      console.error("Error playing track:", error);
    }
  };

  // Effect to handle playing a track when trackID changes
  React.useEffect(() => {
    if (trackID) {
      const trackURI = `spotify:track:${trackID}`;
      playTrack(trackURI);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackID, spotifyApi, deviceId]);

  React.useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      if (trackID) {
        void spotifyApi.getTrack(trackID).then((data) => {
          setTrack(data.body);
        });
      } else {
        console.log("No Track ID");
        fetchCurrentData();
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotifyApi, trackID, session]);
  // @ts-expect-error
  React.useEffect((): (() => void) => {
    if (spotifyApi.getAccessToken()) {
      const interval = setInterval(() => {
        fetchCurrentData();
      }, 1000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotifyApi, trackID, session]);
  React.useEffect(() => {
    const progressUpdateInterval = setInterval(() => {
      if (isPlaying) {
        setProgressInterval((prev) => prev + 1000);
      }
    }, 1000);

    return () => clearInterval(progressUpdateInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  return (
    <div className=" glass fixed bottom-0 z-10 flex h-20 w-full flex-row items-center justify-between px-2 sm:px-5">
      <div className="flex flex-row items-center space-x-3">
        {Track?.album.images[0]?.url ? (
          <Image
            src={Track.album.images[0].url}
            className="h-12 w-12 rounded-md object-contain"
            width={50}
            height={50}
            alt={"Album Image"}
          />
        ) : (
          <div className="h012 w-12 rounded-md glass" />
        )}
        <div className="flex flex-col">
          <p className="w-[9rem] truncate text-sm font-semibold">
            {Track?.name ?? "No Track"}
          </p>
          <p className="w-[9rem] truncate text-xs text-gray-500">
            {Track?.artists.map((artist) => artist.name).join(", ") ??
              "No Artist"}
          </p>
        </div>
      </div>
      <div className="hidden flex-col items-center sm:flex">
        <div className="flex flex-row items-center space-x-3">
          <ShuffleIcon
            onClick={(): void => {
              if (!trackID) return;
              void spotifyApi.setShuffle(!isShuffle);
              setIsShuffle(!isShuffle);
            }}
            className={`h-4 w-4 cursor-pointer  transition duration-300 hover:text-inherit
            ${isShuffle && "text-blue-300"}`}
          />
          <FaStepBackward
            className="h-5 w-5 cursor-pointer  transition duration-300 hover:text-inherit"
            onClick={(): void => {
              if (!trackID) return;
              void spotifyApi.skipToPrevious();
            }}
          />
          <PlayIcon
            className="h-8 w-8 cursor-pointer  transition duration-300 hover:text-inherit"
            onClick={handlePlayPause}
          />
          <FaStepForward
            className="h-5 w-5 cursor-pointer  transition duration-300 hover:text-inherit"
            onClick={(): void => {
              if (!trackID) return;
              void spotifyApi.skipToNext();
            }}
          />
          <RepeatIcon
            onClick={(): void => {
              if (!trackID) return;
              void spotifyApi.setRepeat(!isRepeat ? "track" : "off");
              setIsRepeat(!isRepeat);
            }}
            className={`h-4 w-4 cursor-pointer transition duration-300 hover:text-inherit
            ${isRepeat && "text-blue-300"}`}
          />
        </div>
        <div className="mt-1 flex flex-row items-center space-x-3 sm:w-[18rem] md:w-[25rem] lg:w-[32rem]">
          <p className="text-xs">
            {millisecondsToMinutesAndSeconds(progressInterval)}
          </p>
          <Slider
            value={Number((progressInterval / (Track?.duration_ms ?? 0)) * 100)}
            onChange={(value): void => {
              if (!trackID) return;
              void spotifyApi.seek((Track?.duration_ms ?? 0) * (value / 100));
              setProgressInterval((Track?.duration_ms ?? 0) * (value / 100));
            }}
          />
          <p className="text-xs">
            {millisecondsToMinutesAndSeconds(Track?.duration_ms ?? 0)}
          </p>
        </div>
      </div>
      <div className="hidden flex-row items-center space-x-3 sm:flex sm:w-[6rem] md:w-[8rem]">
        <ListMusic
          size={34}
          className="cursor-pointer transition duration-300 hover:text-inherit"
        />
        <VolumeIcon
          size={34}
          onClick={(): void => {
            void spotifyApi.setVolume(volume === 0 ? 100 : 0);
            setVolume(volume === 0 ? 100 : 0);
          }}
          className="cursor-pointer transition duration-300 hover:text-inherit"
        />
        <Slider
          value={volume}
          onChange={(value): void => {
            void spotifyApi.setVolume(value);
            setVolume(value);
          }}
        />
      </div>
      <div className="flex flex-row items-center space-x-3 sm:hidden">
        <PlayIcon
          className="h-8 w-8 cursor-pointer transition duration-300 hover:text-inherit"
          onClick={handlePlayPause}
        />
      </div>
    </div>
  );
}
