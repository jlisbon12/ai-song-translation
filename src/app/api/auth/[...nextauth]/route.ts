/* eslint-disable */

import { Token, UserSession } from "@/lib/models";
import { LOGIN_URL, spotifyApi } from "@/lib/spotify";
import NextAuth from "next-auth/next";
import Spotify from "next-auth/providers/spotify";

async function refreshAccessToken(token: any): Promise<any> {
  try {
    console.log("Refreshing access token...");
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const { body: data } = await spotifyApi.refreshAccessToken();
    console.log("Refreshed access token!");
    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: data.expires_in,
      refreshToken: data.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(`Error refreshing token: ${JSON.stringify(error)}`);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  providers: [
    Spotify({
      clientId: String(process.env.SPOTIFY_CLIENT_ID),
      clientSecret: String(process.env.SPOTIFY_CLIENT_SECRET),
      authorization: LOGIN_URL,
    }),
  ],
  secret: String(process.env.JWT_SECRET),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // @ts-expect-error
    async jwt({ token, user, account }): Promise<any> {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: (account?.expires_at ?? 0) * 1000,
        };
      }
      if (Date.now() < Number(token?.accessTokenExpires)) {
        console.log("Token is valid");
        return token;
      }
      return await refreshAccessToken(token);
    },
    async session({
      session,
      token,
    }: {
      session: UserSession;
      token: Token;
    }): Promise<UserSession> {
      // @ts-expect-error
      session.user.token = token;
      return session;
    },
  },
};

// @ts-expect-error
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
