# Contributing to CodeTribe

First off, thank you for considering contributing to CodeTribe! It's people like you that make CodeTribe such a great tool for collaborative coding.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- **Be respectful** and inclusive to all participants
- **Be constructive** in your feedback and discussions
- **Focus on the issue** rather than personal attacks
- **Help create a positive environment** for everyone

## How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report:

**Use a clear and descriptive title** for the issue

**Provide detailed information:**
- Steps to reproduce the behavior
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information
- Console errors (if any)

**Example Bug Report:**
```markdown
**Bug:** Monaco Editor crashes when switching to Rust language

**Steps to Reproduce:**
1. Create a new session
2. Select JavaScript from language dropdown
3. Type some code
4. Switch to Rust language
5. Editor becomes unresponsive

**Expected:** Smooth language switching with Rust syntax highlighting

**Actual:** Editor freezes and requires page refresh

**Environment:**
- Browser: Chrome 120.0.0
- OS: macOS 14.0
- Console Error: "Cannot read property 'rust' of undefined"
```

### Suggesting Enhancements 💡

Enhancement suggestions are welcome! Please provide:

- **Clear use case** - Why would this feature be useful?
- **Detailed description** - What exactly should it do?
- **Mockups or examples** - Visual aids help a lot
- **Implementation ideas** - If you have technical suggestions

### Code Contributions 👨‍💻

#### Development Setup

1. **Fork the repository**
```bash
git clone https://github.com/YOUR-USERNAME/codetribe.git
cd codetribe
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a branch**
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

4. **Start development**
```bash
npm run dev
```

#### Development Guidelines

**Code Style:**
- Use TypeScript with strict mode enabled
- Follow existing naming conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

**Component Guidelines:**
- Use React functional components with hooks
- Implement proper TypeScript interfaces
- Use Zustand for state management
- Follow the existing component structure
- Add proper error boundaries

**File Organization:**
- Keep files under 300 lines when possible
- Use clear, descriptive file names
- Group related functionality together
- Maintain the existing folder structure

#### Testing Your Changes

Before submitting:

1. **Test locally** - Ensure the app runs without errors
```bash
npm run dev
```

2. **Check TypeScript** - Fix any type errors
```bash
npm run type-check
```

3. **Lint your code** - Follow coding standards
```bash
npm run lint
```

4. **Test the build** - Ensure it builds for production
```bash
npm run build
```

#### Commit Guidelines

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "feat: add Rust language support to Monaco Editor"
git commit -m "fix: resolve session ID generation collision"
git commit -m "docs: update installation instructions"
git commit -m "refactor: simplify collaboration store state management"

# Format
# <type>: <description>
# 
# Types: feat, fix, docs, style, refactor, test, chore
```

#### Pull Request Process

1. **Ensure your branch is up to date**
```bash
git checkout main
git pull origin main
git checkout your-feature-branch
git rebase main
```

2. **Create a pull request** with:
   - **Clear title** describing the change
   - **Detailed description** of what was changed and why
   - **Screenshots** for UI changes
   - **Testing steps** for reviewers
   - **Link to related issues** (if applicable)

3. **Respond to feedback** promptly and make requested changes

4. **Ensure CI passes** - All checks must be green

#### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that causes existing functionality to change)
- [ ] Documentation update

## Testing
- [ ] Tested locally with `npm run dev`
- [ ] TypeScript compilation passes
- [ ] No console errors
- [ ] UI changes tested on mobile/desktop

## Screenshots (if applicable)
Add screenshots of UI changes.

## Related Issues
Fixes #(issue number)
```

## Areas for Contribution

### High Priority 🚨
- **Real Socket.io server** implementation
- **Actual code execution** with sandboxed environment
- **Performance optimizations** for large files
- **Mobile responsiveness** improvements

### Medium Priority 📋
- **Additional language support** (Swift, Kotlin, etc.)
- **File upload/download** functionality
- **Syntax error highlighting** in editor
- **User authentication** system
- **Session analytics** dashboard

### Good First Issues 🌟
- **UI/UX improvements** in existing components
- **Documentation** updates and improvements
- **Bug fixes** in language configurations
- **Accessibility** enhancements
- **Test coverage** improvements

## Project Architecture

Understanding the codebase:

```
codetribe/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Home page (session creation)
│   └── editor/[sessionId]/  # Editor page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── code-editor.tsx      # Monaco Editor wrapper
│   ├── chat-panel.tsx       # Real-time chat
│   └── ...                  # Other feature components
├── lib/
│   ├── collaboration-store.ts # Zustand state management
│   ├── socket.ts            # Socket.io client
│   └── ...                  # Utilities and configurations
└── public/                  # Static assets
```

**Key Technologies:**
- **Next.js 14** with App Router
- **TypeScript** with strict mode
- **Monaco Editor** for code editing
- **Zustand** for state management
- **Socket.io** for real-time features (currently mocked)
- **Tailwind CSS** for styling
- **Radix UI** for accessible components

## Getting Help

- **GitHub Discussions** - For questions and general discussion
- **GitHub Issues** - For bug reports and feature requests
- **Code Review** - Don't hesitate to ask for feedback on your PRs

## Recognition

Contributors will be:
- **Listed in README.md** contributors section
- **Mentioned in release notes** for significant contributions
- **Invited to join** the core contributors team (for regular contributors)

Thank you for contributing to CodeTribe! 🎉

---

**Happy coding!** 🚀