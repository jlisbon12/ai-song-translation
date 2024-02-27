"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Image from "next/image";
import {
  HeaderAtomState,
  TrackIDAtomState,
  playlistAtomState,
  playlistContentAtomState,
  playlistHistoryAtomState,
  searchAtomState,
} from "./atoms/playlistAtom";
import Header from "@/components/Header";
import { UserSession } from "@/lib/models";
import useSpotify from "@/hooks/useSpotify";
import { SearchIcon } from "lucide-react";
import SearchCard from "./SearchCard";
import Song from "./Song";
import LyricsCard from "./LyricsCard";

interface Color {
  color: string;
  headerColor: string;
}

const colors: Color[] = [
  {
    color: "bg-gradient-to-b from-green-400 via-blue-500",
    headerColor: "bg-green-400",
  },
  {
    color: "bg-gradient-to-b from-yellow-400 via-red-500",
    headerColor: "bg-yellow-400",
  },
  {
    color: "bg-gradient-to-b from-purple-400 via-pink-500",
    headerColor: "bg-purple-400",
  },
  {
    color: "bg-gradient-to-b from-blue-400 via-indigo-500",
    headerColor: "bg-blue-400",
  },
  {
    color: "bg-gradient-to-b from-pink-400 via-red-500 via-yellow-500",
    headerColor: "bg-pink-400",
  },
  {
    color: "bg-gradient-to-b from-yellow-400 via-green-500 via-blue-500",
    headerColor: "bg-yellow-400",
  },
  {
    color: "bg-gradient-to-b from-red-400 via-pink-500 via-purple-500",
    headerColor: "bg-red-400",
  },
  {
    color: "bg-gradient-to-b from-green-400 via-blue-500 via-indigo-500",
    headerColor: "bg-green-400",
  },
  {
    color: "bg-gradient-to-b from-yellow-400 via-red-500 via-pink-500",
    headerColor: "bg-yellow-400",
  },
  {
    color: "bg-gradient-to-b from-purple-400 via-pink-500 via-red-500",
    headerColor: "bg-purple-400",
  },
  {
    color: "bg-gradient-to-b from-blue-400 via-indigo-500 via-purple-500",
    headerColor: "bg-blue-400",
  },
  {
    color: "bg-gradient-to-b from-pink-400 via-red-500 via-yellow-500",
    headerColor: "bg-pink-400",
  },
  {
    color: "bg-gradient-to-b from-yellow-400 via-green-500 via-blue-500",
    headerColor: "bg-yellow-400",
  },
  {
    color: "bg-gradient-to-b from-red-400 via-pink-500 via-purple-500",
    headerColor: "bg-red-400",
  },
  {
    color: "bg-gradient-to-b from-green-400 via-blue-500 via-indigo-500",
    headerColor: "bg-green-400",
  },
  {
    color: "bg-gradient-to-b from-yellow-400 via-red-500 via-pink-500",
    headerColor: "bg-yellow-400",
  },
  {
    color: "bg-gradient-to-b from-purple-400 via-pink-500 via-red-500",
    headerColor: "bg-purple-400",
  },
  {
    color: "bg-gradient-to-b from-blue-400 via-indigo-500 via-purple-500",
    headerColor: "bg-blue-400",
  },
];

function instanceofSinglePlaylistResponse(
  playlistContent:
    | SpotifyApi.SinglePlaylistResponse
    | SpotifyApi.SavedTrackObject[]
    | SpotifyApi.TrackObjectSimplified[]
): playlistContent is SpotifyApi.SinglePlaylistResponse {
  return (
    (playlistContent as SpotifyApi.SinglePlaylistResponse).tracks !== undefined
  );
}

function instanceofSingleArtistResponse(
  userProfile:
    | SpotifyApi.UserProfileResponse
    | SpotifyApi.SingleArtistResponse
    | undefined
): userProfile is SpotifyApi.SingleArtistResponse {
  return (userProfile as SpotifyApi.SingleArtistResponse)?.name !== undefined;
}

function parseAnchorTags(text: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  const aTags = doc.getElementsByTagName("a");
  if (aTags.length === 0) return text;
  const textNodes = Array.from(aTags).map(
    (aTag) => aTag.childNodes[0].nodeValue
  );
  return textNodes.join(", ") + " and more...";
}

export default function MainScreen(): React.JSX.Element {
  const { data: session } = useSession() as { data: UserSession };
  const spotifyApi = useSpotify();
  const [search, setSearch] = useRecoilState(searchAtomState);
  const trackID = useRecoilValue(TrackIDAtomState);
  const setTrackID = useRecoilState(TrackIDAtomState)[1];
  const [searchResults, setSearchResults] =
    React.useState<SpotifyApi.SearchResponse>();
  const [color, setColor] = React.useState<Color>({
    color: "",
    headerColor: "",
  });
  const setHeaderOpacity = useRecoilState(HeaderAtomState)[1];
  const [user, setUser] = React.useState<
    SpotifyApi.UserProfileResponse | SpotifyApi.SingleArtistResponse
  >();
  const [playlistID, setPlaylistID] = useRecoilState(playlistAtomState);
  const [playlistContent, setPlaylistContent] = useRecoilState<
    | SpotifyApi.SinglePlaylistResponse
    | SpotifyApi.SavedTrackObject[]
    | undefined
    | SpotifyApi.TrackObjectSimplified[]
    // @ts-expect-error
  >(playlistContentAtomState);
  const setPlaylistHistory = useRecoilState(playlistHistoryAtomState)[1];

  React.useEffect((): void => {
    if (spotifyApi.getAccessToken() && playlistID) {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
      if (playlistID === "liked-songs") {
        const options = { limit: 50, offset: 0 };
        void spotifyApi.getMySavedTracks(options).then((data) => {
          setPlaylistContent(data.body.items);
          const next = data.body.next;
          if (next) {
            for (
              let i = options.offset + options.limit;
              i < data.body.total;
              i += options.limit
            ) {
              options.offset = i;
              void spotifyApi.getMySavedTracks(options).then((data): void => {
                setPlaylistContent((prev) => [
                  ...(prev as SpotifyApi.SavedTrackObject[]),
                  ...data.body.items,
                ]);
              });
            }
          }
        });
      } else if (playlistID.includes("artist")) {
        const options = { limit: 15, offset: 0 };
        void spotifyApi
          .getArtistAlbums(playlistID.split(" ")[1], options)
          .then((data) => {
            const albums = data.body.items;
            const albumIDs = albums.map((album) => album.id);
            void spotifyApi.getAlbums(albumIDs).then((data) => {
              const dataItems = data.body.albums;
              const tracks = dataItems.map((album) =>
                album.tracks.items.map((track) => {
                  return { ...track, album: album };
                })
              );
              const tracksFlat = tracks.flat();
              setPlaylistContent(tracksFlat);
            });
            for (
              let i = options.offset + options.limit;
              i < data.body.total;
              i += options.limit
            ) {
              options.offset = i;
              void spotifyApi
                .getArtistAlbums(playlistID.split(" ")[1], options)
                .then((data) => {
                  const albums = data.body.items;
                  const albumIDs = albums.map((album) => album.id);
                  void spotifyApi.getAlbums(albumIDs).then((data) => {
                    const dataItems = data.body.albums;
                    const tracks = dataItems.map((album) =>
                      album.tracks.items.map((track) => {
                        return { ...track, album: album };
                      })
                    );
                    const tracksFlat = tracks.flat();
                    setPlaylistContent((prev) =>
                      [
                        ...(prev as SpotifyApi.TrackObjectFull[]),
                        ...tracksFlat,
                      ].slice(0, 300)
                    );
                  });
                });
            }
          });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, spotifyApi, playlistID]);
  React.useEffect((): void => {
    if (spotifyApi.getAccessToken() && playlistContent) {
      if ("owner" in playlistContent) {
        void spotifyApi
          .getUser(playlistContent.owner.id)
          .then((data) => setUser(data.body));
      } else if (playlistID.includes("artist")) {
        void spotifyApi
          .getArtist(playlistID.split(" ")[1])
          .then((data) => setUser(data.body));
      } else {
        void spotifyApi.getMe().then((data) => setUser(data.body));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, spotifyApi, playlistContent]);

  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.trim() === "") return;
    const options = { limit: 10, offset: 0 };
    void spotifyApi
      .search(e.target.value, ["artist", "playlist", "track"], options)
      .then((data) => {
        setSearchResults(data.body);
      });
  };
  const scrollHeader = (e: React.UIEvent<HTMLDivElement>): void => {
    if (e.currentTarget.scrollTop > 60) {
      setHeaderOpacity("bg-opacity-0");
    }
    if (e.currentTarget.scrollTop < 60) {
      setHeaderOpacity("bg-opacity-100");
    }
  };

  return (
    <div
      onScroll={scrollHeader}
      className="flex flex-grow flex-col overflow-y-auto rounded-md glass scrollbar-hide sm:ml-3"
    >
      <Header color={playlistID ? color : { headerColor: "" }} />
      {search && (
        <>
          <div className="mt-5 flex flex-grow flex-col items-center ">
            <div className="relative w-4/5 sm:w-2/3">
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-neutral-100" />
              <input
                onChange={HandleSearch}
                className="w-full truncate rounded-full bg bg-neutral-500 bg-opacity-10 p-2 px-5 pl-10 text-neutral-100"
                type="text"
                placeholder="Search for a song, artist, or album"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-grow flex-col items-center overflow-y-auto scrollbar-y-auto scrollbar-hide">
            {searchResults?.tracks &&
              searchResults.tracks.items.map((item) => (
                <SearchCard
                  item={item}
                  callback={(): void => setTrackID(item.id)}
                  key={item.id}
                />
              ))}
            {searchResults?.artists &&
              searchResults.artists.items.map((item) => (
                <SearchCard
                  // @ts-expect-error
                  item={{ ...item, album: item }}
                  callback={(): void => {
                    setSearch(false);
                    setPlaylistID(`artist ${item.id}`);
                    setPlaylistHistory((prev) => [
                      ...prev,
                      `artist ${item.id}`,
                    ]);
                    setPlaylistContent(undefined);
                    setHeaderOpacity("bg-opacity-100");
                  }}
                  key={item.id}
                />
              ))}
          </div>
        </>
      )}
      {!search && playlistContent && (
        <div
          className={`flex flex-col ${
            playlistContent && color.color
          } h-2/3 to-transparent p-5`}
        >
          <div className="mt-10 flex flex-row space-x-5">
            <Image
              src={
                instanceofSingleArtistResponse(user)
                  ? user.images[0].url
                  : playlistContent instanceof Array
                    ? "/liked.png"
                    : playlistContent.images[0].url
              }
              className="h-48 w-48 rounded-md object-contain md:h-48 md:w-48 lg:h-56 lg:w-56"
              width={300}
              height={300}
              alt={"Playlist Image"}
            />
            <div className="flex flex-col items-start justify-end">
              <h6 className="text-sm font-bold text-gray-200">Playlist</h6>
              <h1 className="mt-5 text-3xl font-bold text-gray-200 sm:text-lg md:text-2xl lg:text-4xl">
                {instanceofSingleArtistResponse(user)
                  ? user?.name ?? ""
                  : playlistContent instanceof Array
                    ? "Liked Songs"
                    : playlistContent.name}
              </h1>
              {instanceofSinglePlaylistResponse(playlistContent) &&
                playlistContent.description && (
                  <p className="mt-2 hidden text-sm font-semibold text-gray-300 lg:block">
                    {parseAnchorTags(playlistContent.description)}
                  </p>
                )}
              <div className="mt-4 hidden flex-row items-center space-x-2 sm:flex">
                {user?.images && user.images[0]?.url && (
                  <Image
                    src={user.images[0].url}
                    className="rounded-full object-contain"
                    width={30}
                    height={30}
                    alt={"User Image"}
                  />
                )}
                {instanceofSinglePlaylistResponse(playlistContent) ? (
                  <p className="text-sm font-bold text-gray-200">
                    {playlistContent.owner.display_name} •{" "}
                    {playlistContent.tracks.total} Songs •{" "}
                    {playlistContent.followers.total
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Followers
                  </p>
                ) : (
                  <p className="text-sm font-bold text-gray-200">
                    {/* @ts-expect-error */}
                    {user?.display_name ?? user?.name} •{" "}
                    {playlistContent.length
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    Songs
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-5 py-5">
            {instanceofSinglePlaylistResponse(playlistContent)
              ? playlistContent.tracks.items.map((track, index) => (
                  <Song track={track} index={index} key={track.track?.id} />
                ))
              : playlistContent.map((track, index) => (
                  <Song
                    // @ts-expect-error
                    track={"track" in track ? track : { track: track }}
                    index={index}
                    key={"track" in track ? track.track.id : track.id}
                  />
                ))}
          </div>
        </div>
      )}
      {!search && !playlistContent && trackID && <LyricsCard />}
    </div>
  );
}
