// genius.ts
import Genius from "genius-lyrics";
const Client = new Genius.Client(process.env.NEXT_PUBLIC_GENIUS_ACCESS_TOKEN);

const getLyricsForTrack = async (
  artist: string,
  title: string
): Promise<string> => {
  try {
    // Search for the song
    const searches = await Client.songs.search(`${title} ${artist}`);
    const firstSong = searches[0];

    if (!firstSong) {
      throw new Error("Song not found");
    }

    // Fetch the lyrics
    const lyrics = await firstSong.lyrics();
    return lyrics;
  } catch (error) {
    console.error("Error fetching lyrics:", error);
    throw error;
  }
};

export { getLyricsForTrack };
