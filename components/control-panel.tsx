'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Download, Upload, RotateCcw } from 'lucide-react';
import { useCollaborationStore } from '@/lib/collaboration-store';
import { SUPPORTED_LANGUAGES } from '@/lib/languages';
import { executeCode } from '@/lib/code-execution';
import { toast } from 'sonner';

export function ControlPanel() {
  const { language, setLanguage, code, setCode, setExecutionResult } = useCollaborationStore();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    
    // Set default code for the selected language
    const languageConfig = SUPPORTED_LANGUAGES.find(lang => lang.id === newLanguage);
    if (languageConfig?.defaultCode) {
      setCode(languageConfig.defaultCode);
    }
  };

  const handleRunCode = async () => {
    if (!code.trim()) {
      toast.error('No code to execute');
      return;
    }

    toast.info('Executing code...');
    
    try {
      const result = await executeCode(code, language);
      setExecutionResult(result);
      
      if (result.success) {
        toast.success(`Code executed in ${result.executionTime}ms`);
      } else {
        toast.error('Code execution failed');
      }
    } catch (error) {
      toast.error('Failed to execute code');
      setExecutionResult({
        success: false,
        output: 'Execution failed: ' + (error as Error).message,
        error: (error as Error).message,
        executionTime: 0
      });
    }
  };

  const handleReset = () => {
    const languageConfig = SUPPORTED_LANGUAGES.find(lang => lang.id === language);
    setCode(languageConfig?.defaultCode || '');
    setExecutionResult(null);
    toast.info('Code reset to default');
  };

  const handleDownload = () => {
    const languageConfig = SUPPORTED_LANGUAGES.find(lang => lang.id === language);
    const extension = languageConfig?.extension || 'txt';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `codetribe-file.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('File downloaded');
  };

  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.js,.ts,.py,.html,.css,.json,.md,.sql,.java,.cpp,.c,.cs,.go,.rs,.php,.rb';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setCode(content);
          toast.success('File uploaded');
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="bg-slate-900/50 border-b border-slate-800 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <SelectItem 
                  key={lang.id} 
                  value={lang.id}
                  className="text-white hover:bg-slate-700"
                >
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={handleRunCode}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Play className="h-4 w-4 mr-2" />
            Run
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleUpload}
            className="border-slate-700 text-gray-300 hover:bg-slate-800"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="border-slate-700 text-gray-300 hover:bg-slate-800"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="border-slate-700 text-gray-300 hover:bg-slate-800"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}