"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import { useRecoilState } from "recoil";
import { Button } from "./ui/button";
import { HeartIcon, HomeIcon, Music3Icon, SearchIcon } from "lucide-react";
import { UserSession } from "@/lib/models";
import useSpotify from "@/hooks/useSpotify";
import {
  HeaderAtomState,
  TrackIDAtomState,
  playlistAtomState,
  playlistHistoryAtomState,
  searchAtomState,
} from "./atoms/playlistAtom";

export default function SideBar(): React.JSX.Element {
  const { data: session } = useSession() as { data: UserSession };
  const pathname = usePathname();
  const spotifyApi = useSpotify();
  const [search, setSearch] = useRecoilState(searchAtomState);
  const [playlists, setPlaylists] = React.useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [playlistID, setPlaylistID] = useRecoilState(playlistAtomState);
  const setPlaylistHistory = useRecoilState(playlistHistoryAtomState)[1];
  const [recentlyPlayed, setRecentlyPlayed] =
    React.useState<SpotifyApi.PlayHistoryObject[]>();
  const setTrackID = useRecoilState(TrackIDAtomState)[1];
  const setHeaderOpacity = useRecoilState(HeaderAtomState)[1];

  React.useEffect((): void => {
    if (spotifyApi.getAccessToken()) {
      const options = { limit: 50, offset: 0 };
      void spotifyApi.getUserPlaylists(options).then((data) => {
        setPlaylists(data.body.items);
        const next = data.body.next;
        if (next) {
          for (
            let i = options.offset + options.limit;
            i < data.body.total;
            i += options.limit
          ) {
            options.offset = i;
            void spotifyApi.getUserPlaylists(options).then((data) => {
              setPlaylists((playlists) => [...playlists, ...data.body.items]);
            });
          }
        }
      });
    }
  }, [session, spotifyApi]);
  React.useEffect((): void => {
    if (spotifyApi.getAccessToken()) {
      void spotifyApi
        .getMyRecentlyPlayedTracks()
        .then((data) => setRecentlyPlayed(data.body.items));
    }
  }, [session, spotifyApi]);
  return (
    <div className="hidden flex-col text-sm sm:flex">
      <div className="space-y-3 rounded-sm glass p-3">
        <Button
          onClick={(): void => {
            setSearch(false);
            setPlaylistID("");
          }}
          variant="ghost"
          className={`flex items-center space-x-3 hover:text-inherit ${
            pathname === "/" && playlistID === "" && !search
              ? "font-semibold"
              : "text-gray-500"
          }`}
        >
          <HomeIcon className="h-6 w-6 mr-2" />
          Home
        </Button>
        <Button
          onClick={(): void => {
            setSearch(false);
            setPlaylistID("liked-songs");
            setPlaylistHistory((prev) => [...prev, "liked-songs"]);
            setHeaderOpacity("bg-opacity-100");
          }}
          variant="ghost"
          className={`flex items-center space-x-3 hover:text-inherit ${
            playlistID === "liked-songs" ? "font-semibold" : "text-gray-500"
          }`}
        >
          <HeartIcon className="h-6 w-6 mr-2" />
          Liked Songs
        </Button>
        <Button
          onClick={(): void => {
            setSearch(true);
            setPlaylistID("");
            setHeaderOpacity("bg-opacity-100");
          }}
          variant="ghost"
          className={`flex items-center space-x-3  hover:text-inherit ${
            search ? "font-semibold" : "text-gray-500"
          }`}
        >
          <SearchIcon className="h-6 w-6 mr-2" />
          Search
        </Button>
      </div>
      <div className="mt-5 rounded-t glass overflow-y-auto rounded-b  ">
        <div className=" px-5 py-4 mb-3 sticky top-0 backdrop-blur-md backdrop-filter w-full z-50">
          <div className="flex flex-row items-center space-x-3 text-gray-600">
            <Music3Icon className="h-6 w-6" />
            <p>Recently Played</p>
          </div>
        </div>

        <div className="flex-grow space-y-3 px-4 overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 sm:w-[30vw] lg:w-[25vw]">
          {recentlyPlayed?.length ? (
            recentlyPlayed.map((item) => (
              <div
                key={item.played_at}
                className="flex cursor-pointer items-center space-x-3 hover:font-semibold"
                onClick={(): void => {
                  setTrackID(item.track.id);
                  setSearch(false);
                  setPlaylistID("");
                }}
              >
                <Image
                  src={item.track.album.images[0].url}
                  alt={"Playlist Image"}
                  width={40}
                  height={40}
                  className={"h-10 w-10 rounded-md"}
                />
                <div className="flex flex-col">
                  <h1>{item.track.name}</h1>
                  <p className="text-gray-500">
                    {item.track.artists.map((artist) => artist.name).join(", ")}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
