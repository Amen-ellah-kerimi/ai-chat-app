# 🤖 AI Chat Assistant

A production-ready AI chat assistant built with Next.js 15 and the Vercel AI SDK. Features real-time streaming responses, comprehensive error handling, and a clean, responsive interface.

> 🇫🇷 **Version française disponible** : [README.fr.md](README.fr.md)

## ✨ Features

- **🚀 Real-time Streaming**: Instant AI responses with streaming
- **🎨 Modern UI**: Clean, responsive design with Tailwind CSS
- **⚡ Fast Performance**: Built with Next.js 15 and React 19
- **🛡️ Error Handling**: Comprehensive error handling with user-friendly messages
- **🔧 Production Ready**: Optimized for deployment with proper configuration
- **📱 Mobile Friendly**: Responsive design that works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-your-actual-openai-api-key-here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | - | ✅ Yes |
| `OPENAI_MODEL` | AI model to use | `gpt-3.5-turbo` | ❌ No |
| `MAX_TOKENS` | Max tokens per response | `500` | ❌ No |
| `TEMPERATURE` | Response creativity (0-1) | `0.7` | ❌ No |

### OpenAI Setup

1. **Create OpenAI Account**: Visit [OpenAI Platform](https://platform.openai.com)
2. **Generate API Key**: Go to [API Keys](https://platform.openai.com/api-keys)
3. **Add Billing**: Add a payment method in [Billing Settings](https://platform.openai.com/settings/organization/billing)
4. **Set Usage Limits**: Configure appropriate usage limits

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `OPENAI_API_KEY`: Your OpenAI API key
   - Deploy!

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect your GitHub repo and add environment variables
- **DigitalOcean**: Use App Platform with automatic GitHub integration

## 🛠️ Development

### Project Structure

```
src/
├── app/
│   ├── api/chat/          # API route for chat functionality
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main chat interface
├── components/
│   └── Message.tsx        # Message component
└── lib/                   # Utility functions (if any)
```

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🐛 Troubleshooting

### Common Issues

#### "OpenAI API key is not configured"
- **Solution**: Add your API key to `.env.local` or Vercel environment variables
- **Check**: Ensure the key starts with `sk-`

#### "You exceeded your current quota"
- **Solution**: Add billing information to your OpenAI account
- **Check**: Visit [OpenAI Billing](https://platform.openai.com/settings/organization/billing)

#### "Too many requests"
- **Solution**: Wait a moment and try again
- **Check**: Review your usage limits in OpenAI dashboard

#### Messages not streaming
- **Solution**: Check browser console for errors
- **Check**: Verify API key is valid and has sufficient quota

## 🔒 Security & Performance

- **API Key Protection**: Never commit API keys to version control
- **Environment Variables**: Use `.env.local` for development, Vercel dashboard for production
- **Streaming**: Real-time response streaming for better UX
- **Mobile Optimized**: Responsive design with touch-friendly interface

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

**Built with ❤️ using Next.js 15, React 19, and the Vercel AI SDK**

## Project Structure

```
ai-chat-app/
├── src/
│   ├── app/
│   │   ├── api/chat/          # AI chat API route
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main chat page
│   └── components/
│       ├── ChatInput.tsx      # Chat input component
│       └── Message.tsx        # Message display component
├── .env.example              # Environment variables template
└── README.md                # This file
```

## Key Components

### API Route (`/api/chat`)
- Uses Vercel AI SDK with OpenAI
- Streams responses in real-time
- Handles chat message history

### Chat Interface
- **Message Component**: Renders user/AI messages with markdown support
- **ChatInput Component**: Handles user input with keyboard shortcuts
- **Main Page**: Manages chat state and real-time streaming

## Usage

1. **Start a conversation** - Type any message to begin
2. **Keyboard shortcuts**:
   - `Enter` - Send message
   - `Shift + Enter` - New line
3. **Markdown support** - AI responses support:
   - **Bold** and *italic* text
   - `Code snippets`
   - Lists and headers
   - Code blocks

## Customization

### Change AI Model
Edit `src/app/api/chat/route.ts`:
```typescript
const result = await streamText({
  model: openai('gpt-4'), // Change model here
  messages,
});
```

### Modify System Prompt
Edit the system message in `src/app/api/chat/route.ts`:
```typescript
system: 'Your custom system prompt here',
```

### Styling
- Modify `src/app/globals.css` for global styles
- Update component styles in individual files
- Customize colors in `tailwind.config.ts`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add `OPENAI_API_KEY` environment variable
4. Deploy

### Other Platforms
- Ensure Node.js 18+ support
- Set `OPENAI_API_KEY` environment variable
- Run `npm run build && npm start`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License
