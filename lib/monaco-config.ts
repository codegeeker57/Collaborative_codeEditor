import * as monaco from 'monaco-editor';

// Monaco Editor configuration and themes
export const monacoConfig = {
  theme: 'vs-dark',
  fontSize: 14,
  fontFamily: 'JetBrains Mono, Fira Code, Consolas, Monaco, monospace',
  minimap: { enabled: true },
  scrollBeyondLastLine: false,
  automaticLayout: true,
  tabSize: 2,
  insertSpaces: true,
  wordWrap: 'on' as const,
  lineNumbers: 'on' as const,
  renderWhitespace: 'selection' as const,
  contextmenu: true,
  mouseWheelZoom: true,
  smoothScrolling: true,
  cursorBlinking: 'blink' as const,
  cursorSmoothCaretAnimation: 'on' as const,
  renderLineHighlight: 'gutter' as const,
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  acceptSuggestionOnEnter: 'on' as const,
  quickSuggestions: true,
  suggestOnTriggerCharacters: true,
  parameterHints: { enabled: true },
  formatOnPaste: true,
  formatOnType: true,
  folding: true,
  foldingStrategy: 'indentation' as const,
  showFoldingControls: 'mouseover' as const,
  matchBrackets: 'always' as const,
  autoIndent: 'full' as const,
  bracketPairColorization: { enabled: true }
};

// Custom theme for CodeTribe
export const codeTribeTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
    { token: 'keyword', foreground: '569CD6' },
    { token: 'string', foreground: 'CE9178' },
    { token: 'number', foreground: 'B5CEA8' },
    { token: 'function', foreground: 'DCDCAA' },
    { token: 'variable', foreground: '9CDCFE' },
    { token: 'type', foreground: '4EC9B0' },
    { token: 'class', foreground: '4EC9B0' },
    { token: 'interface', foreground: '4EC9B0' },
    { token: 'operator', foreground: 'D4D4D4' },
    { token: 'delimiter', foreground: 'D4D4D4' },
    { token: 'tag', foreground: '569CD6' },
    { token: 'attribute.name', foreground: '92C5F8' },
    { token: 'attribute.value', foreground: 'CE9178' }
  ],
  colors: {
    'editor.background': '#0F172A',
    'editor.foreground': '#E2E8F0',
    'editor.lineHighlightBackground': '#1E293B',
    'editor.selectionBackground': '#334155',
    'editor.selectionHighlightBackground': '#475569',
    'editorCursor.foreground': '#60A5FA',
    'editorWhitespace.foreground': '#475569',
    'editorIndentGuide.background': '#334155',
    'editorIndentGuide.activeBackground': '#475569',
    'editor.findMatchBackground': '#3B82F6',
    'editor.findMatchHighlightBackground': '#1D4ED8',
    'editorBracketMatch.background': '#334155',
    'editorBracketMatch.border': '#60A5FA',
    'editorLineNumber.foreground': '#64748B',
    'editorLineNumber.activeForeground': '#94A3B8',
    'scrollbarSlider.background': '#334155',
    'scrollbarSlider.hoverBackground': '#475569',
    'scrollbarSlider.activeBackground': '#64748B',
    'minimap.background': '#0F172A',
    'minimapSlider.background': '#334155',
    'minimapSlider.hoverBackground': '#475569',
    'minimapSlider.activeBackground': '#64748B'
  }
};

// Language-specific configurations
export const languageConfigurations = {
  javascript: {
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' }
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' }
    ],
    brackets: [
      ['{', '}'] as const,
      ['[', ']'] as const,
      ['(', ')'] as const
    ]
  },
  typescript: {
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: '`', close: '`' },
      { open: '<', close: '>' }
    ]
  },
  html: {
    autoClosingPairs: [
      { open: '<', close: '>' },
      { open: '"', close: '"' },
      { open: "'", close: "'" }
    ]
  },
  css: {
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '(', close: ')' },
      { open: '"', close: '"' },
      { open: "'", close: "'" }
    ]
  }
};

// Initialize Monaco Editor themes and configurations
export function configureMonaco() {
  // Define custom theme
  monaco.editor.defineTheme('codetribe-dark', codeTribeTheme);

  // Set language configurations
  Object.entries(languageConfigurations).forEach(([language, config]) => {
    monaco.languages.setLanguageConfiguration(language, config);
  });

  // Configure completion providers and other language features
  configureLanguageFeatures();
}

function configureLanguageFeatures() {
  // JavaScript/TypeScript snippets
  const jsSnippets = [
    {
      label: 'log',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'console.log(${1});',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Log to console'
    },
    {
      label: 'function',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'function ${1:name}(${2:params}) {\n\t${3}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Function declaration'
    },
    {
      label: 'arrow',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '(${1:params}) => {\n\t${2}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Arrow function'
    },
    {
      label: 'async',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'async function ${1:name}(${2:params}) {\n\t${3}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Async function'
    },
    {
      label: 'try-catch',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'try {\n\t${1}\n} catch (error) {\n\t${2:console.error(error);}\n}',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Try-catch block'
    }
  ];

  // Register completion providers for JavaScript and TypeScript
  ['javascript', 'typescript'].forEach(language => {
    monaco.languages.registerCompletionItemProvider(language, {
      provideCompletionItems: () => {
        return { suggestions: jsSnippets };
      }
    });
  });

  // HTML snippets
  const htmlSnippets = [
    {
      label: 'html5',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<title>${1:Document}</title>\n</head>\n<body>\n\t${2}\n</body>\n</html>',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'HTML5 boilerplate'
    },
    {
      label: 'div',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: '<div class="${1}">\n\t${2}\n</div>',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Div element with class'
    }
  ];

  monaco.languages.registerCompletionItemProvider('html', {
    provideCompletionItems: () => {
      return { suggestions: htmlSnippets };
    }
  });

  // CSS snippets
  const cssSnippets = [
    {
      label: 'flexbox',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'display: flex;\njustify-content: ${1:center};\nalign-items: ${2:center};',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'Flexbox layout'
    },
    {
      label: 'grid',
      kind: monaco.languages.CompletionItemKind.Snippet,
      insertText: 'display: grid;\ngrid-template-columns: ${1:repeat(auto-fit, minmax(250px, 1fr))};\ngap: ${2:1rem};',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      documentation: 'CSS Grid layout'
    }
  ];

  monaco.languages.registerCompletionItemProvider('css', {
    provideCompletionItems: () => {
      return { suggestions: cssSnippets };
    }
  });
}

// Key bindings configuration
export const keyBindings = [
  {
    keybinding: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
    command: 'editor.action.formatDocument'
  },
  {
    keybinding: monaco.KeyMod.CtrlCmd | monaco.KeyCode.Slash,
    command: 'editor.action.commentLine'
  },
  {
    keybinding: monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP,
    command: 'editor.action.quickCommand'
  },
  {
    keybinding: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyD,
    command: 'editor.action.addSelectionToNextFindMatch'
  }
];

// Export default configuration
export default {
  monacoConfig,
  codeTribeTheme,
  languageConfigurations,
  configureMonaco,
  keyBindings
};