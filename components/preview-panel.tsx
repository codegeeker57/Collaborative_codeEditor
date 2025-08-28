'use client';

import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, ExternalLink, RefreshCw } from 'lucide-react';
import { useCollaborationStore } from '@/lib/collaboration-store';

export function PreviewPanel() {
  const { code, language } = useCollaborationStore();
  const [isVisible, setIsVisible] = useState(true);
  const [previewContent, setPreviewContent] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Check if current language supports live preview
  const isWebLanguage = ['html', 'css', 'javascript', 'typescript'].includes(language);

  useEffect(() => {
    if (!isWebLanguage) {
      setPreviewContent('');
      return;
    }

    let htmlContent = '';
    
    if (language === 'html') {
      htmlContent = code;
    } else if (language === 'css') {
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${code}</style>
        </head>
        <body>
          <div class="preview-container">
            <h1>CSS Preview</h1>
            <p>Add HTML elements to see your styles in action.</p>
            <div class="sample-elements">
              <button>Button</button>
              <input type="text" placeholder="Input field" />
              <div class="box">Box Element</div>
            </div>
          </div>
        </body>
        </html>
      `;
    } else if (language === 'javascript' || language === 'typescript') {
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: sans-serif; padding: 20px; background: #1a1a1a; color: white; }
            .console { background: #2a2a2a; padding: 15px; border-radius: 5px; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <h2>JavaScript Output</h2>
          <div id="console" class="console">Ready to execute...</div>
          <script>
            const originalConsoleLog = console.log;
            const consoleElement = document.getElementById('console');
            console.log = function(...args) {
              consoleElement.textContent += args.join(' ') + '\\n';
              originalConsoleLog.apply(console, args);
            };
            
            try {
              ${code}
            } catch (error) {
              console.log('Error: ' + error.message);
            }
          </script>
        </body>
        </html>
      `;
    }

    setPreviewContent(htmlContent);
  }, [code, language, isWebLanguage]);

  useEffect(() => {
    if (iframeRef.current && previewContent) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(previewContent);
        doc.close();
      }
    }
  }, [previewContent]);

  const refreshPreview = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const openInNewTab = () => {
    if (previewContent) {
      const blob = new Blob([previewContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }
  };

  if (!isWebLanguage) {
    return null;
  }

  return (
    <div className={`border-l border-slate-800 bg-slate-950 flex flex-col transition-all duration-300 ${isVisible ? 'w-96' : 'w-12'}`}>
      <div className="flex items-center justify-between p-3 border-b border-slate-800">
        {isVisible && (
          <>
            <h3 className="text-white font-medium">Live Preview</h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={refreshPreview}
                className="text-gray-400 hover:text-white h-8 w-8 p-0"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={openInNewTab}
                className="text-gray-400 hover:text-white h-8 w-8 p-0"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(!isVisible)}
          className={`text-gray-400 hover:text-white h-8 w-8 p-0 ${!isVisible ? 'mx-auto' : ''}`}
        >
          {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>

      {isVisible && (
        <div className="flex-1 p-3">
          <iframe
            ref={iframeRef}
            className="w-full h-full border border-slate-700 rounded bg-white"
            title="Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      )}
    </div>
  );
}