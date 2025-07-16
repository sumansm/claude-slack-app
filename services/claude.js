const Anthropic = require('@anthropic-ai/sdk');

class ClaudeService {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.CLAUDE_API_KEY,
    });
  }

  async generateResponse(message) {
    try {
      const response = await this.anthropic.messages.create({
        model: process.env.CLAUDE_MODEL || 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      });

      return response.content[0].text;
    } catch (error) {
      console.error('Error generating Claude response:', error);
      throw new Error('Failed to generate response from Claude');
    }
  }
}

module.exports = ClaudeService;