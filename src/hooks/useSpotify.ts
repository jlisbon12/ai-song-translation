"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { deviceIdAtom } from "@/components/atoms/deviceAtom";
import { UserSession } from "@/lib/models";
import { useSetRecoilState } from "recoil";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.NEXTAUTH_URL + "/api/auth/callback/spotify",
});

export default function useSpotify(): SpotifyWebApi {
  const { data: session } = useSession() as { data: UserSession | null };
  const [playerReady, setPlayerReady] = useState(false);
  const spotifyPlayerInitialized = useRef(false);
  const setDeviceId = useSetRecoilState(deviceIdAtom);

  useEffect(() => {
    if (
      session?.user?.token?.accessToken &&
      !spotifyPlayerInitialized.current
    ) {
      if (!document.getElementById("spotify-player-script")) {
        const script = document.createElement("script");
        script.id = "spotify-player-script";
        script.src = "https://sdk.scdn.co/spotify-player.js";
        document.body.appendChild(script);
      }

      spotifyPlayerInitialized.current = true;

      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      spotifyApi.setAccessToken(session.user.token.accessToken);

      if (typeof window !== "undefined") {
        window.onSpotifyWebPlaybackSDKReady = () => {
          const player = new window.Spotify.Player({
            name: "Your Web Player",
            getOAuthToken: (cb: (token: string) => void) => {
              // Use optional chaining to safely access accessToken
              const accessToken = session?.user?.token?.accessToken;
              if (accessToken) {
                cb(accessToken);
              }
            },
          });

          // Event listeners
          player.addListener(
            "ready",
            ({ device_id }: { device_id: string }) => {
              console.log("Ready with Device ID", device_id);
              setDeviceId(device_id);
              setPlayerReady(true);
              spotifyApi.transferMyPlayback([device_id]);
            }
          );

          player.addListener(
            "not_ready",
            ({ device_id }: { device_id: string }) => {
              console.log("Device ID has gone offline", device_id);
              setPlayerReady(false);
            }
          );

          // Connect to the player
          player.connect().then((success: Boolean) => {
            if (success) {
              console.log(
                "The Web Playback SDK successfully connected to Spotify!"
              );
            } else {
              console.log("Failed to connect the Web Playback SDK to Spotify.");
            }
          });
        };
      }
    }
  }, [session, setDeviceId]);

  return spotifyApi;
}
