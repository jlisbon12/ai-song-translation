import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-recently-played",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
  "streaming",
].join(",");

const params = new URLSearchParams({ scope: scopes });
const LOGIN_URL = `https://accounts.spotify.com/authorize?${params.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: String(process.env.SPOTIFY_CLIENT_ID),
  clientSecret: String(process.env.SPOTIFY_CLIENT_SECRET),
  redirectUri: String(process.env.NEXTAUTH_URL) + "/api/auth/spotify/callback",
});

export { LOGIN_URL, spotifyApi };
