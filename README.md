# Real-Time Song Translation App

This project is a real-time song translation application that uses AI/ML to automatically translate song lyrics from one language to another while synchronizing with the song's audio playback. The application leverages the Spotify API for song retrieval and playback, and integrates natural language processing (NLP) techniques for translation.

## Features

- Search for songs by title and artist
- Real-time translation of song lyrics
- Synchronize translated lyrics with audio playback
- User-friendly interface with interactive components
- Play, pause, and control song playback
- Choose target language for translation


## Tech Stack
- **Frontend**: Next.js
- **AI/ML**: Hugging Face Transformers for translation
- **API Integration**: Spotify API for song retrieval and playback
  

## Setup Instructions

### Prerequisites

- Node.js and npm (Node Package Manager)
- Spotify Developer Account (for API credentials)
- Genius Developer Account (for API credentials)
- Hugging Face Account (for API credentials)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/real-time-translation.git
   cd real-time-translation
   ```

2. Install dependencies:
   
  ```bash
  npm install
  ```

3. Set up environment variables:
  - Create a .env file in the backend folder.
  - Add your Spotify API, Genius, Hugging Face credentials:

  ```bash
  SPOTIFY_CLIENT_ID=your-client-id
  SPOTIFY_CLIENT_SECRET=your-client-secret
	GENIUS_ACCESS_TOKEN=your-genius-access-token
	HUGGING_FACE_API_TOKEN=your-hf-api-token
  ```

5. Start the development server:

  ```bash
  # Start the frontend server
  cd ../client
  npm run dev

6. Access the application in your browser:
   Open `http://localhost:3000` to use the application.


## Usage

1. Search for a song by title and artist.
2. Choose the target language for translation.
3. Play the song to see real-time synchronized translation of lyrics.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests for new features, enhancements, or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was inspired by the desire to combine music and technology in an innovative way.
- Thanks to the Spotify API for providing access to song data and audio playback.
- Special thanks to Hugging Face Transformers for their powerful NLP models.

## Contact

For any questions or inquiries, feel free to reach out to jlisbon12@outlook.com.

---

Created by Je'dae Lisbon.