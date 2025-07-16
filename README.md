# Slack Bot with Claude Integration

A Slack bot that integrates with Claude AI to respond to mentions in channels.

## Setup

### Option 1: Docker (Recommended)

1. **Create a Slack App:**
   - Go to https://api.slack.com/apps
   - Create a new app
   - Enable Socket Mode
   - Add the following OAuth scopes:
     - `app_mentions:read`
     - `channels:read`
     - `chat:write`
     - `im:read`
     - `mpim:read`
   - Install the app to your workspace

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your actual tokens and keys.

3. **Run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

4. **View logs:**
   ```bash
   docker-compose logs -f slack-bot
   ```

5. **Stop the bot:**
   ```bash
   docker-compose down
   ```

### Option 2: Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Follow steps 1-2 from Docker setup**

3. **Run the bot:**
   ```bash
   npm start
   ```

### Docker Commands

- **Build image:** `docker build -t slack-claude-bot .`
- **Run container:** `docker run -d --env-file .env --name slack-bot slack-claude-bot`
- **View container logs:** `docker logs -f slack-bot`
- **Stop container:** `docker stop slack-bot`

## Usage

In any Slack channel where the bot is present, mention it with your question:

```
@bot_name how's the weather?
```

The bot will respond using Claude AI.

## Features

- Responds to mentions in channels
- Uses Claude AI for intelligent responses
- Shows thinking indicator while processing
- Error handling for failed requests