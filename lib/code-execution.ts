export interface ExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime: number;
}

export async function executeCode(code: string, language: string): Promise<ExecutionResult> {
  // Simulate execution delay
  const startTime = Date.now();
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
  const executionTime = Date.now() - startTime;

  try {
    // Mock code execution based on language
    let output = '';
    let success = true;
    let error = undefined;

    switch (language) {
      case 'javascript':
      case 'typescript':
        // Simple JavaScript/TypeScript execution simulation
        if (code.includes('console.log')) {
          output = simulateJavaScriptExecution(code);
        } else {
          output = 'Code executed successfully (no output)';
        }
        break;

      case 'python':
        if (code.includes('print')) {
          output = simulatePythonExecution(code);
        } else {
          output = 'Code executed successfully (no output)';
        }
        break;

      case 'java':
        if (code.includes('System.out.println')) {
          output = simulateJavaExecution(code);
        } else {
          output = 'Code compiled and executed successfully (no output)';
        }
        break;

      case 'cpp':
      case 'c':
        if (code.includes('cout') || code.includes('printf')) {
          output = simulateCExecution(code);
        } else {
          output = 'Code compiled and executed successfully (no output)';
        }
        break;

      case 'go':
        if (code.includes('fmt.Print')) {
          output = simulateGoExecution(code);
        } else {
          output = 'Code built and executed successfully (no output)';
        }
        break;

      case 'rust':
        if (code.includes('println!')) {
          output = simulateRustExecution(code);
        } else {
          output = 'Code compiled and executed successfully (no output)';
        }
        break;

      case 'csharp':
        if (code.includes('Console.Write')) {
          output = simulateCSharpExecution(code);
        } else {
          output = 'Code compiled and executed successfully (no output)';
        }
        break;

      case 'php':
        if (code.includes('echo')) {
          output = simulatePHPExecution(code);
        } else {
          output = 'PHP script executed successfully (no output)';
        }
        break;

      case 'ruby':
        if (code.includes('puts')) {
          output = simulateRubyExecution(code);
        } else {
          output = 'Ruby script executed successfully (no output)';
        }
        break;

      case 'sql':
        output = simulateSQLExecution(code);
        break;

      case 'html':
        output = 'HTML rendered successfully (see preview panel)';
        break;

      case 'css':
        output = 'CSS compiled successfully (see preview panel)';
        break;

      case 'json':
        try {
          JSON.parse(code);
          output = 'JSON is valid ✓';
        } catch (e) {
          success = false;
          error = 'Invalid JSON syntax';
          output = `JSON Parse Error: ${(e as Error).message}`;
        }
        break;

      case 'markdown':
        output = 'Markdown processed successfully';
        break;

      default:
        output = `Code execution simulated for ${language}`;
    }

    // Simulate occasional errors for demonstration
    if (Math.random() < 0.1 && success) {
      success = false;
      error = 'Simulated runtime error for demonstration';
      output = `Runtime Error: ${error}`;
    }

    return {
      success,
      output,
      error,
      executionTime
    };

  } catch (error) {
    return {
      success: false,
      output: `Execution failed: ${(error as Error).message}`,
      error: (error as Error).message,
      executionTime
    };
  }
}

// Mock execution simulators for different languages
function simulateJavaScriptExecution(code: string): string {
  const outputs = [
    'Hello, CodeTribe!',
    'Welcome Developer!',
    'JavaScript is running!',
    '42',
    'true',
    '[1, 2, 3, 4, 5]',
    '{ name: "CodeTribe", version: "1.0" }',
    'Function executed successfully'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulatePythonExecution(code: string): string {
  const outputs = [
    'Hello from Python!',
    'Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
    'Python is awesome!',
    '42',
    'True',
    '[1, 4, 9, 16, 25]',
    'List comprehension result: [2, 4, 6, 8, 10]',
    'Dictionary: {\'key\': \'value\'}'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulateJavaExecution(code: string): string {
  const outputs = [
    '=== Session: DEMO123 ===\nAdded member: Alice (Frontend Developer)\nAdded member: Bob (Backend Developer)',
    'Hello, CodeTribe!\nMessage: HELLO, CODETRIBE!\nSum of numbers: 15',
    'Java application started\nProcessing complete',
    '42',
    'true',
    'Array processed: [1, 2, 3, 4, 5]'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulateCExecution(code: string): string {
  const outputs = [
    '=== CodeTribe C Programming Demo ===\nCreated session: C_SESSION_2024\nAdded user: Alice Developer (ID: 1)',
    'Maximum: 89\nMinimum: 7\nSum: 120\nAverage: 17.14',
    'fib(5) = 5\nfib(6) = 8\nfib(7) = 13',
    'Array Operations Demo\nOriginal array: 15 7 23 9 42 8 16',
    'Memory allocation successful\nProcessing complete'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulateGoExecution(code: string): string {
  const outputs = [
    '=== CodeTribe Go Demo ===\nAdded member: Alice Johnson (Backend Developer)\nSum of data1: 15\nSum of data2: 40',
    'Original slice: [64 25 12 22 11 90 5 77 30]\nSorted slice: [5 11 12 22 25 30 64 77 90]',
    'Go: Backend/Systems\nJavascript: Frontend/Backend\nPython: Data Science/Backend',
    'Goroutines completed successfully',
    'Channel communication working'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulateRustExecution(code: string): string {
  const outputs = [
    '=== CodeTribe Rust Demo ===\nCreated new session: RUST_SESSION_2024\nAdding member: Alice Johnson (Systems Developer)',
    'Maximum number: 91\nMaximum word (lexicographically): safe',
    '10.0 / 2.0 = 5\nError: Cannot divide by zero!',
    'Original vector: [1, 2, 3, 4, 5]\nVector length: 5\nSum of elements: 15',
    '🦀 Rust: Fast, Reliable, Productive — Pick Three! 🦀'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulateCSharpExecution(code: string): string {
  const outputs = [
    '=== CodeTribe C# Demo ===\nCreated session: CSHARP_2024\nAdded member: Alice (Frontend Developer)',
    'Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nEven numbers: [2, 4, 6, 8, 10]\nSum: 55',
    'Starting async operation...\nTask 1 completed!\nAll async tasks completed!',
    'Active members: 3\n- Alice Johnson (Frontend Developer)',
    '.NET application running successfully'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulatePHPExecution(code: string): string {
  const outputs = [
    '=== CodeTribe PHP Demo ===\nCreated session: PHP_SESSION_2024\nAdded member: Alice Johnson (Full Stack Developer)',
    'Maximum: 91\nMinimum: 12\nSum: 361\nAverage: 51.57',
    'Even numbers: 12, 34\nSquared: 529, 2025, 144, 7921, 1156, 4489, 8281',
    '- PHP: 3 developer(s)\n- Laravel: 1 developer(s)\n- MySQL: 1 developer(s)',
    '🐘 PHP: The web development powerhouse! 🚀'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulateRubyExecution(code: string): string {
  const outputs = [
    '=== CodeTribe Ruby Demo ===\nCreated session: RUBY_SESSION_2024\nAdded member: Alice Johnson (Full Stack Developer)',
    'Maximum: 91\nMinimum: 12\nSum: 361\nAverage: 51.57142857142857',
    'Long words: javascript, python\nShort words: ruby, rust\nCountdown: 5.. 4.. 3.. 2.. 1.. Blast off! 🚀',
    'Ruby developers: Alice Johnson, Bob Smith, Charlie Brown',
    '💎 Ruby: Programmer happiness and productivity! ✨'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}

function simulateSQLExecution(code: string): string {
  const outputs = [
    'Table created successfully: users\n3 rows inserted\nQuery executed: SELECT * FROM users',
    'id | username     | email                | created_at\n1  | alice_dev    | alice@codetribe.com  | 2024-01-15 10:30:00\n2  | bob_coder    | bob@codetribe.com    | 2024-01-15 10:31:00',
    'UPDATE successful: 1 row affected\nSELECT executed: 2 rows returned',
    'signup_date  | new_users\n2024-01-15   | 3\n2024-01-16   | 1',
    'Query optimization complete\nExecution plan generated'
  ];
  
  return outputs[Math.floor(Math.random() * outputs.length)];
}