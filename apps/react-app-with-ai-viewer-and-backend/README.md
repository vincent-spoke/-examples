# Transcript Seeker

![Header](./../../GithubPreview.png)

## Overview

Open-source transcript viewer running in-browser using IndexedDB. Upload recordings, create meeting bots, chat with transcripts using OpenAI, and add notes.

## Key Features

- Upload video/audio recordings, transcribe them using the transcription API of your choice
- Generate recordings with meta-data on Zoom, Google Meet, Teams, using Meeting Baas' API (https://meetingbaas.com)
- Chat with transcripts via OpenAI
- Add notes to recordings, or automatically add AI summaries of transcripts as a note 
- Standalone mode with browser Local Storage

## Tech Stack

- Frontend: React, TypeScript, TailwindCSS
- Media Playback: Vidstack
- Backend: Node.js, Express (optional)

## Quick Start

1. Clone the repo:
   ```
   git clone https://github.com/Meeting-Baas/meeting-bot-as-a-service/
   cd meeting-bot-as-a-service/apps/react-app-with-ai-viewer-and-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build and run dev mode:
   ```
   npm run dev
   ```

## Contributing

Open a PR.

## License

MIT License

## Support

Open an issue or join our [Discord](https://discord.com/invite/dsvFgDTr6c).

## Acknowledgements

- [Meeting Baas API](https://meetingbaas.com/)
- [Vidstack](https://www.vidstack.io/)
