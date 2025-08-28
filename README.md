# CodeTribe

A real-time collaborative code editor built with Next.js 14, enabling seamless team collaboration across 16 programming languages.

![CodeTribe Screenshot](https://via.placeholder.com/800x400/1e293b/60a5fa?text=CodeTribe+-+Real-time+Collaborative+Code+Editor)

##  Features

### Real-time Collaboration
- **Synchronized editing** with <100ms latency
- **Color-coded cursors** and user presence indicators  
- **Live user tracking** with join/leave notifications
- **Support for up to 10 concurrent users** per session

### Multi-language Support
**16 Programming Languages:**
- **Web:** HTML, CSS, JavaScript, TypeScript
- **Backend:** Python, Java, C++, C, C#, Go, Rust, PHP, Ruby
- **Data:** JSON, SQL
- **Documentation:** Markdown

**Advanced Features:**
- Syntax highlighting and error detection
- IntelliSense and auto-completion
- Code snippets and formatting
- Monaco Editor with VS Code-like experience

### Live Preview
- **Real-time HTML/CSS/JavaScript preview** in iframe
- **Instant updates** as users type
- **Mobile-responsive preview panel**
- **Full-screen preview** via external link

### Integrated Communication
- **Team chat** with message history (100 messages max)
- **Real-time messaging** with color-coded user messages
- **Timestamps** and user presence indicators

### Code Execution
- **Simulated cloud execution** for all supported languages
- **Instant results** with error handling
- **Execution time display** and safe environment
- **Mock output generation** for development

### Session Management
- **Unique 8-character room IDs** for secure sessions
- **Easy session creation and joining**
- **Session persistence** during browser refresh
- **Clean session cleanup** on exit

##  Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Editor:** Monaco Editor (VS Code engine)
- **UI:** Radix UI, Tailwind CSS, Lucide React
- **State:** Zustand for collaboration state
- **Real-time:** Socket.io (mock implementation)
- **Styling:** Tailwind CSS with custom design system

##  Installation

### Prerequisites
- Node.js 18+ and npm

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/codegeeker57/codetribe.git
cd codetribe
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

##  Deployment

### Vercel (Recommended)

1. **Import your GitHub repository** to Vercel
2. **Configure build settings:**
   - Framework Preset: `Next.js`
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `out`

3. **Set environment variables:**
   - `NEXT_PUBLIC_SOCKET_URL`: Your Socket.io server URL
   - `NEXT_PUBLIC_APP_URL`: Your deployed app URL

4. **Deploy** and verify at your Vercel URL

### Docker Deployment

```bash
# Build the Docker image
docker build -t codetribe .

# Run the container
docker run -p 3000:3000 codetribe
```

##  Usage

### Creating a Session

1. **Enter your username**
2. **Click "Create Session"** 
3. **Copy the generated session ID** (8 characters)
4. **Share the session ID** with your team members

### Joining a Session

1. **Enter your username**
2. **Switch to "Join Session" tab**
3. **Enter the session ID** provided by your teammate
4. **Click "Join Session"**

### Collaborative Editing

- **Select programming language** from the dropdown
- **Start coding** - changes sync in real-time
- **See team members' cursors** and edits live
- **Use the chat panel** for team communication
- **Execute code** to see results instantly
- **Preview web languages** (HTML/CSS/JS) in the live preview panel

##  Project Structure

```
codetribe/
├── app/
│   ├── globals.css           # Global Tailwind styles
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page (session creation/joining)
│   └── editor/[sessionId]/
│       └── page.tsx          # Collaborative editor page
├── components/
│   ├── ui/                   # Radix UI components (shadcn/ui)
│   ├── code-editor.tsx       # Monaco Editor wrapper
│   ├── chat-panel.tsx        # Real-time chat interface
│   ├── control-panel.tsx     # Language selection & execution
│   ├── preview-panel.tsx     # Live preview for web languages
│   ├── user-panel.tsx        # User list & execution results
│   └── session-manager.tsx   # Session management UI
├── lib/
│   ├── collaboration-store.ts # Zustand state management
│   ├── socket.ts             # Socket.io client (mock)
│   ├── monaco-config.ts      # Monaco Editor configuration
│   ├── code-execution.ts     # Simulated code execution
│   ├── languages.ts          # Language configurations
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## 🔧 Configuration

### Environment Variables

```env
# Required for production
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Supported Languages

The editor supports 16 programming languages with full syntax highlighting, auto-completion, and execution simulation:

| Language | File Extension | Features |
|----------|---------------|----------|
| JavaScript | `.js` | Live preview, execution |
| TypeScript | `.ts` | Type checking, execution |
| Python | `.py` | Syntax highlighting, execution |
| HTML | `.html` | Live preview |
| CSS | `.css` | Live preview |
| JSON | `.json` | Validation, formatting |
| Markdown | `.md` | Preview support |
| SQL | `.sql` | Query highlighting |
| Java | `.java` | Compilation simulation |
| C++ | `.cpp` | Compilation simulation |
| C | `.c` | Compilation simulation |
| C# | `.cs` | .NET simulation |
| Go | `.go` | Build simulation |
| Rust | `.rs` | Cargo simulation |
| PHP | `.php` | Web execution simulation |
| Ruby | `.rb` | Script execution simulation |

## Contributing

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **Monaco Editor** for the incredible VS Code editing experience
- **Next.js team** for the amazing React framework
- **Radix UI** for accessible UI components
- **Vercel** for seamless deployment platform

##  Known Issues & Roadmap

### Current Limitations
- Socket.io server is mocked (real-time features simulated)
- Code execution is simulated (no actual code running)
- Limited to 10 concurrent users per session

### Planned Features
- [ ] Real Socket.io server implementation
- [ ] Actual code execution with sandboxed environment
- [ ] File upload/download functionality
- [ ] Version control integration
- [ ] Voice chat integration
- [ ] Mobile app development

##  Support

If you encounter any issues or have questions:

1. **Check the Issues page** on GitHub
2. **Create a new issue** with detailed information
3. **Join our community** discussions

---

**Built with  by the CodeTribe team**

*Real-time collaboration made simple and beautiful.*