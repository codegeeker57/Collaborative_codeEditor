'use client';

import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import { useCollaborationStore } from '@/lib/collaboration-store';
import { getLanguageConfig } from '@/lib/languages';

export function CodeEditor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const editorInstance = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const { code, language, setCode, users, currentUser } = useCollaborationStore();

  useEffect(() => {
    // Configure Monaco Environment for web workers
    if (typeof window !== 'undefined') {
      (self as any).MonacoEnvironment = {
        getWorkerUrl: function (moduleId: string, label: string) {
          if (label === 'json') {
            return '/_next/static/json.worker.js';
          }
          if (label === 'css' || label === 'scss' || label === 'less') {
            return '/_next/static/css.worker.js';
          }
          if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return '/_next/static/html.worker.js';
          }
          if (label === 'typescript' || label === 'javascript') {
            return '/_next/static/ts.worker.js';
          }
          return '/_next/static/editor.worker.js';
        }
      };
    }

    if (editorRef.current && !editorInstance.current) {
      // Initialize Monaco Editor
      editorInstance.current = monaco.editor.create(editorRef.current, {
        value: code,
        language: language,
        theme: 'vs-dark',
        fontSize: 14,
        minimap: { enabled: true },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        insertSpaces: true,
        wordWrap: 'on',
        lineNumbers: 'on',
        renderWhitespace: 'selection',
        contextmenu: true,
        mouseWheelZoom: true,
        smoothScrolling: true,
        cursorBlinking: 'blink',
        cursorSmoothCaretAnimation: 'on',
        renderLineHighlight: 'gutter',
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        acceptSuggestionOnEnter: 'on',
        quickSuggestions: true,
        suggestOnTriggerCharacters: true,
        parameterHints: { enabled: true },
        formatOnPaste: true,
        formatOnType: true,
      });

      // Listen for content changes
      editorInstance.current.onDidChangeModelContent((e) => {
        const newValue = editorInstance.current?.getValue() || '';
        setCode(newValue);
      });

      // Add cursor position tracking (mock for now)
      editorInstance.current.onDidChangeCursorPosition((e) => {
        // In a real implementation, this would emit cursor position to other users
        console.log('Cursor position changed:', e.position);
      });
    }

    return () => {
      if (editorInstance.current) {
        editorInstance.current.dispose();
        editorInstance.current = null;
      }
    };
  }, []);

  // Update editor language when changed
  useEffect(() => {
    if (editorInstance.current) {
      const model = editorInstance.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  }, [language]);

  // Update editor content when code changes from external source
  useEffect(() => {
    if (editorInstance.current && editorInstance.current.getValue() !== code) {
      editorInstance.current.setValue(code);
    }
  }, [code]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 relative">
        <div ref={editorRef} className="absolute inset-0" />
        
        {/* User cursors overlay (mock implementation) */}
        <div className="absolute top-2 right-2 flex gap-2">
          {users
            .filter(user => user.id !== currentUser?.id)
            .slice(0, 3)
            .map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm px-2 py-1 rounded text-xs"
                style={{ color: user.color }}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: user.color }}
                />
                {user.username}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}