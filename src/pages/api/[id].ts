import LyricsClient from "sync-lyrics";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Destructure the 'id' and ensure it's a string
  const { id } = req.query;

  // If 'id' is an array (which it shouldn't be), take the first element
  const trackId = Array.isArray(id) ? id[0] : id;
  // Instantiate the lyrics client with your Spotify cookie
  const client = new LyricsClient(
    process.env.SPOTIFY_COOKIE ||
      "AQBER_lZnb81kQZDaKoJPUq77wlsxIBqA36xDc_q8G-q0MfTjjBSu2z5r1U76pygjn79SWYWgO2sf8rPLOjS7isX3L5e9PyKd31hlCgb8XgrY91aChbAc6kpAIXi4C0U3boDsD429a8Mk0o6y0eKtzQQIMrLnQTL"
  );

  if (!trackId) {
    res.status(400).json({ error: "Parameter ID was missing or invalid!" });
    return;
  }

  try {
    const lyrics = await client.getLyrics(trackId);
    // res.status(200).json({ lyrics });
    res.send(lyrics);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Lyrics not found" });
  }
}
