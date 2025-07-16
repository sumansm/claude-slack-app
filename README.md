# Claude Slack Bot

A powerful Slack bot that integrates with Anthropic's Claude AI to provide intelligent responses to channel mentions. Built with Node.js and designed for easy deployment with Docker.

## 🚀 Features

- **AI-Powered Responses**: Leverages Claude AI for intelligent, context-aware responses
- **Slack Integration**: Responds to mentions in any Slack channel
- **Real-time Processing**: Shows thinking indicator while processing requests
- **Error Handling**: Robust error handling for failed requests
- **Docker Support**: Easy deployment with Docker and Docker Compose
- **Socket Mode**: Uses Slack's Socket Mode for real-time communication

## 📋 Prerequisites

- Node.js 18+ (if running locally)
- Docker and Docker Compose (if using containerized deployment)
- Slack workspace with admin permissions
- Anthropic API key

## 🔧 Installation & Setup

### 1. Create a Slack App

1. Go to [Slack API](https://api.slack.com/apps)
2. Click "Create New App" → "From scratch"
3. Enter your app name and select your workspace
4. Navigate to "Socket Mode" and enable it
5. Generate an App-Level Token with `connections:write` scope
6. Go to "OAuth & Permissions" and add the following Bot Token Scopes:
   - `app_mentions:read`
   - `channels:read`
   - `chat:write`
   - `im:read`
   - `mpim:read`
7. Install the app to your workspace
8. Go to "Event Subscriptions" and subscribe to `app_mention` events

### 2. Get Your API Keys

You'll need the following tokens:
- **Slack Bot Token**: Found in "OAuth & Permissions" (starts with `xoxb-`)
- **Slack Signing Secret**: Found in "Basic Information" 
- **Slack App Token**: Found in "Basic Information" (starts with `xapp-`)
- **Claude API Key**: Get from [Anthropic Console](https://console.anthropic.com/)

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your actual tokens:

```env
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
SLACK_SIGNING_SECRET=your-slack-signing-secret
SLACK_APP_TOKEN=xapp-your-slack-app-token
CLAUDE_API_KEY=your-anthropic-api-key
CLAUDE_MODEL=claude-3-5-sonnet-20241022
```

## 🐳 Docker Deployment (Recommended)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/sumansm/claude-slack-app.git
cd claude-slack-app

# Configure environment variables
cp .env.example .env
# Edit .env with your tokens

# Start the bot
docker-compose up -d
```

### Docker Commands

```bash
# View logs
docker-compose logs -f slack-bot

# Stop the bot
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# View container status
docker-compose ps
```

## 💻 Local Development

### Installation

```bash
# Clone the repository
git clone https://github.com/sumansm/claude-slack-app.git
cd claude-slack-app

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your tokens

# Start the bot
npm start

# For development with auto-reload
npm run dev
```

### Available Scripts

- `npm start` - Run the bot in production mode
- `npm run dev` - Run with nodemon for development
- `npm test` - Run tests (currently not implemented)

## 🎯 Usage

Once the bot is running and added to your Slack workspace:

1. **Invite the bot to a channel**: `/invite @your-bot-name`
2. **Mention the bot**: `@your-bot-name How's the weather today?`
3. **The bot will respond**: Using Claude AI to provide intelligent responses

### Example Interactions

```
@claude-bot What's the capital of France?
```

```
@claude-bot Can you explain quantum computing in simple terms?
```

```
@claude-bot Write a Python function to calculate fibonacci numbers
```

## 🏗️ Project Structure

```
claude-slack-app/
├── app.js              # Main application entry point
├── services/
│   └── claude.js       # Claude AI service integration
├── logs/               # Application logs (created at runtime)
├── package.json        # Node.js dependencies and scripts
├── Dockerfile         # Docker container configuration
├── docker-compose.yml # Docker Compose configuration
├── .env.example       # Environment variables template
└── README.md          # This file
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SLACK_BOT_TOKEN` | Slack bot token (xoxb-...) | Yes |
| `SLACK_SIGNING_SECRET` | Slack signing secret | Yes |
| `SLACK_APP_TOKEN` | Slack app token (xapp-...) | Yes |
| `CLAUDE_API_KEY` | Anthropic API key | Yes |
| `CLAUDE_MODEL` | Claude model to use | No (defaults to claude-3-sonnet-20240229) |

### Claude Models

Supported Claude models:
- `claude-3-5-sonnet-20241022` (recommended)
- `claude-3-sonnet-20240229`
- `claude-3-opus-20240229`
- `claude-3-haiku-20240307`

## 🚨 Troubleshooting

### Common Issues

1. **Bot not responding**:
   - Check if Socket Mode is enabled in Slack app settings
   - Verify all environment variables are set correctly
   - Check container logs: `docker-compose logs -f slack-bot`

2. **Authentication errors**:
   - Ensure tokens are correct and haven't expired
   - Verify the bot is installed in your workspace
   - Check API key permissions

3. **Docker issues**:
   - Ensure Docker and Docker Compose are installed
   - Check if port 3000 is available
   - Verify `.env` file exists and has correct values

### Debug Mode

To run in debug mode:

```bash
# Local development
DEBUG=* npm start

# Docker
docker-compose logs -f slack-bot
```

## 📝 API Documentation

### ClaudeService Class

#### `generateResponse(message)`

Generates a response using Claude AI.

**Parameters:**
- `message` (string): The user's message

**Returns:**
- Promise<string>: Claude's response

**Example:**
```javascript
const claudeService = new ClaudeService();
const response = await claudeService.generateResponse("Hello, Claude!");
```

## 🚀 Deployment

### Production Deployment

1. **Set up a server** (DigitalOcean, AWS, etc.)
2. **Clone the repository**
3. **Configure environment variables**
4. **Use Docker Compose for deployment**:

```bash
# On your server
git clone https://github.com/sumansm/claude-slack-app.git
cd claude-slack-app
cp .env.example .env
# Edit .env with production values
docker-compose up -d
```

### Health Monitoring

The application logs are available in the `logs/` directory and can be monitored:

```bash
# View real-time logs
docker-compose logs -f slack-bot

# Check container health
docker-compose ps
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Suman Mondal**
- GitHub: [@sumansm](https://github.com/sumansm)
- Repository: [claude-slack-app](https://github.com/sumansm/claude-slack-app)

## 🙏 Acknowledgments

- [Anthropic](https://www.anthropic.com/) for Claude AI
- [Slack](https://slack.com/) for the Bolt framework
- [Node.js](https://nodejs.org/) community

## 📚 Additional Resources

- [Slack Bolt Framework Documentation](https://slack.dev/bolt-js/concepts)
- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

⚡ **Ready to get started?** Follow the installation guide above and have your Claude-powered Slack bot running in minutes!