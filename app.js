require('dotenv').config();
const { App } = require('@slack/bolt');
const ClaudeService = require('./services/claude');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

const claudeService = new ClaudeService();

app.event('app_mention', async ({ event, say }) => {
  try {
    const messageText = event.text.replace(/<@[^>]+>/g, '').trim();
    
    if (!messageText) {
      await say('Hello! How can I help you today?');
      return;
    }

    const thinking = await say('🤔 Thinking...');
    
    const response = await claudeService.generateResponse(messageText);
    
    await app.client.chat.delete({
      token: process.env.SLACK_BOT_TOKEN,
      channel: event.channel,
      ts: thinking.ts
    });
    
    await say(response);
  } catch (error) {
    console.error('Error handling mention:', error);
    await say('Sorry, I encountered an error while processing your request. Please try again.');
  }
});

app.message('hello', async ({ message, say }) => {
  await say(`Hello <@${message.user}>! Mention me with @bot_name to ask me questions.`);
});

(async () => {
  try {
    await app.start();
    console.log('⚡️ Slack bot is running!');
  } catch (error) {
    console.error('Error starting app:', error);
  }
})();