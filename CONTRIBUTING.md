# Contributing to Claude Slack Bot

Thank you for your interest in contributing to the Claude Slack Bot project! This document provides guidelines for contributing to the project.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use the issue template** when available
3. **Provide detailed information**:
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Environment details (Node.js version, OS, etc.)
   - Error messages and logs

### Submitting Changes

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Submit a pull request**

### Pull Request Guidelines

- **Clear description** of what the PR does
- **Reference related issues** using `#issue-number`
- **Include tests** for new features
- **Update documentation** if needed
- **Follow the existing code style**

## 🔧 Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/claude-slack-app.git
cd claude-slack-app

# Add upstream remote
git remote add upstream https://github.com/sumansm/claude-slack-app.git

# Install dependencies
npm install

# Copy environment template
cp .env.example .env
# Edit .env with your test tokens

# Run in development mode
npm run dev
```

## 📝 Code Style

- **Use ES6+ features** where appropriate
- **Follow existing naming conventions**
- **Add JSDoc comments** for functions
- **Keep functions small and focused**
- **Use meaningful variable names**

### Example Code Style

```javascript
/**
 * Processes user message and generates AI response
 * @param {string} message - The user's message
 * @returns {Promise<string>} - The AI response
 */
async function processMessage(message) {
  try {
    // Implementation here
    return response;
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
}
```

## 🧪 Testing

- **Test your changes** thoroughly before submitting
- **Include edge cases** in your testing
- **Test both Docker and local environments**
- **Verify Slack integration** works correctly

## 🚀 Feature Requests

When suggesting new features:

1. **Check if it already exists** in issues
2. **Explain the use case** and benefits
3. **Provide implementation ideas** if possible
4. **Consider backwards compatibility**

## 📚 Documentation

- **Update README.md** for new features
- **Add code comments** for complex logic
- **Update API documentation** if applicable
- **Include usage examples**

## 🐛 Bug Reports

Include the following information:

- **Environment**: OS, Node.js version, Docker version
- **Steps to reproduce**: Detailed steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Error messages**: Full error logs
- **Screenshots**: If applicable

## 🔒 Security

- **Never commit** API keys or tokens
- **Use environment variables** for sensitive data
- **Report security issues** privately to the maintainer
- **Follow security best practices**

## 📋 Checklist

Before submitting a PR:

- [ ] Code follows the project's style guidelines
- [ ] Changes have been tested locally
- [ ] Docker build works correctly
- [ ] Documentation has been updated
- [ ] Commit messages are clear and descriptive
- [ ] No sensitive information is included

## 🎯 Good First Issues

Look for issues labeled with:
- `good first issue`
- `help wanted`
- `documentation`
- `enhancement`

## 💬 Questions?

If you have questions about contributing:

1. **Check the README** and documentation first
2. **Search existing issues** for similar questions
3. **Create a new issue** with the `question` label
4. **Be patient** - maintainers respond as time allows

---

Thank you for contributing to make this project better! 🙏