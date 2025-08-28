export interface LanguageConfig {
  id: string;
  name: string;
  extension: string;
  defaultCode: string;
  monacoId: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    extension: 'js',
    monacoId: 'javascript',
    defaultCode: `// Welcome to JavaScript!
// A dynamic programming language for web development

function greeting(name) {
  return \`Hello, \${name}! Welcome to CodeTribe.\`;
}

const message = greeting("Developer");
console.log(message);

// Try editing this code and see the live preview!`
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    extension: 'ts',
    monacoId: 'typescript',
    defaultCode: `// Welcome to TypeScript!
// JavaScript with static types

interface User {
  name: string;
  age: number;
  isActive: boolean;
}

function createUser(name: string, age: number): User {
  return {
    name,
    age,
    isActive: true
  };
}

const user = createUser("Alice", 25);
console.log(user);`
  },
  {
    id: 'python',
    name: 'Python',
    extension: 'py',
    monacoId: 'python',
    defaultCode: `# Welcome to Python!
# A powerful, readable programming language

def fibonacci(n):
    """Generate fibonacci sequence up to n terms"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    
    return sequence

# Generate and print fibonacci sequence
fib_numbers = fibonacci(10)
print("Fibonacci sequence:", fib_numbers)`
  },
  {
    id: 'html',
    name: 'HTML',
    extension: 'html',
    monacoId: 'html',
    defaultCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeTribe HTML Preview</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        .card {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to CodeTribe! 🚀</h1>
        <div class="card">
            <h2>Real-time Collaborative Coding</h2>
            <p>Edit this HTML and see changes instantly in the preview panel!</p>
            <p>Try adding more elements, changing styles, or creating interactive content.</p>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: 'css',
    name: 'CSS',
    extension: 'css',
    monacoId: 'css',
    defaultCode: `/* Welcome to CSS!
   Style your web pages with beautiful designs */

body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.preview-container {
  max-width: 600px;
  margin: 0 auto;
  color: white;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.sample-elements {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

button {
  padding: 12px 24px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

button:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

input {
  padding: 12px 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 10px;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 1rem;
}

input::placeholder {
  color: rgba(255,255,255,0.7);
}

.box {
  width: 120px;
  height: 80px;
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  transition: all 0.3s ease;
}

.box:hover {
  transform: scale(1.05);
  background: rgba(255,255,255,0.3);
}`
  },
  {
    id: 'json',
    name: 'JSON',
    extension: 'json',
    monacoId: 'json',
    defaultCode: `{
  "project": {
    "name": "CodeTribe",
    "version": "1.0.0",
    "description": "Real-time collaborative code editor",
    "features": [
      "Multi-language support",
      "Real-time collaboration",
      "Live preview",
      "Integrated chat",
      "Code execution"
    ],
    "supported_languages": {
      "web": ["HTML", "CSS", "JavaScript", "TypeScript"],
      "backend": ["Python", "Java", "C++", "Go", "Rust"],
      "data": ["JSON", "SQL"],
      "markup": ["Markdown"]
    },
    "team": [
      {
        "name": "Alice Johnson",
        "role": "Frontend Developer",
        "skills": ["React", "TypeScript", "CSS"],
        "active": true
      },
      {
        "name": "Bob Smith",
        "role": "Backend Developer", 
        "skills": ["Node.js", "Python", "MongoDB"],
        "active": true
      }
    ],
    "settings": {
      "max_users": 10,
      "auto_save": true,
      "theme": "dark",
      "font_size": 14
    }
  }
}`
  },
  {
    id: 'markdown',
    name: 'Markdown',
    extension: 'md',
    monacoId: 'markdown',
    defaultCode: `# Welcome to CodeTribe! 🚀

## About CodeTribe
CodeTribe is a **real-time collaborative code editor** that enables seamless team collaboration across multiple programming languages.

### Features ✨
- 🔄 **Real-time collaboration** with synchronized editing
- 🌐 **16 programming languages** supported
- 👁️ **Live preview** for web technologies
- 💬 **Integrated team chat**
- ⚡ **Code execution** with instant results
- 🎨 **Beautiful Monaco Editor** with syntax highlighting

### Supported Languages
| Category | Languages |
|----------|-----------|
| Web | HTML, CSS, JavaScript, TypeScript |
| Backend | Python, Java, C++, C, C#, Go, Rust |
| Mobile | Java, C# |
| Scripting | Python, JavaScript |
| Data | JSON, SQL |
| Documentation | Markdown |

### Getting Started
1. **Create a session** or **join an existing one**
2. **Select your programming language** from the dropdown
3. **Start coding** with real-time collaboration
4. **Chat with your team** using the integrated messaging
5. **Execute your code** and see instant results

### Code Example
\`\`\`javascript
function welcomeToCodeTribe(username) {
  return \`Welcome \${username}! Ready to code together? 🎉\`;
}

console.log(welcomeToCodeTribe("Developer"));
\`\`\`

### Tips for Collaboration 💡
- Use **descriptive variable names** for better code readability
- **Communicate** with your team through the chat panel  
- **Test your code** frequently using the execution feature
- **Save your work** regularly (auto-save enabled)

---

Happy coding with CodeTribe! 🎯`
  },
  {
    id: 'sql',
    name: 'SQL',
    extension: 'sql',
    monacoId: 'sql',
    defaultCode: `-- Welcome to SQL!
-- Structured Query Language for database operations

-- Create a sample users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME,
    is_active BOOLEAN DEFAULT TRUE
);

-- Insert sample data
INSERT INTO users (username, email) VALUES 
    ('alice_dev', 'alice@codetribe.com'),
    ('bob_coder', 'bob@codetribe.com'),
    ('charlie_admin', 'charlie@codetribe.com');

-- Query examples
SELECT * FROM users;

SELECT username, email, created_at 
FROM users 
WHERE is_active = TRUE 
ORDER BY created_at DESC;

-- Update user data
UPDATE users 
SET last_login = CURRENT_TIMESTAMP 
WHERE username = 'alice_dev';

-- Advanced query with aggregation
SELECT 
    DATE(created_at) as signup_date,
    COUNT(*) as new_users
FROM users 
GROUP BY DATE(created_at)
ORDER BY signup_date;`
  },
  {
    id: 'java',
    name: 'Java',
    extension: 'java',
    monacoId: 'java',
    defaultCode: `// Welcome to Java!
// Object-oriented programming language

public class CodeTribeDemo {
    public static void main(String[] args) {
        // Create a collaborative session
        CollaborativeSession session = new CollaborativeSession("DEMO123");
        
        // Add team members
        session.addMember("Alice", "Frontend Developer");
        session.addMember("Bob", "Backend Developer");
        
        // Display session information
        session.displayInfo();
        
        // Demonstrate some Java features
        demonstrateFeatures();
    }
    
    public static void demonstrateFeatures() {
        System.out.println("\\n=== Java Features Demo ===");
        
        // String manipulation
        String greeting = "Hello, CodeTribe!";
        System.out.println("Message: " + greeting.toUpperCase());
        
        // Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum of numbers: " + sum);
    }
}

class CollaborativeSession {
    private String sessionId;
    private java.util.List<String> members;
    
    public CollaborativeSession(String sessionId) {
        this.sessionId = sessionId;
        this.members = new java.util.ArrayList<>();
    }
    
    public void addMember(String name, String role) {
        String member = name + " (" + role + ")";
        members.add(member);
        System.out.println("Added member: " + member);
    }
    
    public void displayInfo() {
        System.out.println("\\n=== Session: " + sessionId + " ===");
        System.out.println("Active members: " + members.size());
        for (String member : members) {
            System.out.println("- " + member);
        }
    }
}`
  },
  {
    id: 'cpp',
    name: 'C++',
    extension: 'cpp',
    monacoId: 'cpp',
    defaultCode: `// Welcome to C++!
// Powerful system programming language

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

class CodeTribeSession {
private:
    std::string sessionId;
    std::vector<std::string> participants;
    
public:
    CodeTribeSession(const std::string& id) : sessionId(id) {
        std::cout << "Created session: " << sessionId << std::endl;
    }
    
    void addParticipant(const std::string& name) {
        participants.push_back(name);
        std::cout << "Added participant: " << name << std::endl;
    }
    
    void displayParticipants() {
        std::cout << "\\nSession participants (" << participants.size() << "):" << std::endl;
        for (const auto& participant : participants) {
            std::cout << "- " << participant << std::endl;
        }
    }
    
    void sortParticipants() {
        std::sort(participants.begin(), participants.end());
        std::cout << "\\nParticipants sorted alphabetically!" << std::endl;
    }
};

// Template function example
template<typename T>
T findMax(const std::vector<T>& vec) {
    if (vec.empty()) {
        throw std::invalid_argument("Vector is empty");
    }
    
    T maxVal = vec[0];
    for (const auto& item : vec) {
        if (item > maxVal) {
            maxVal = item;
        }
    }
    return maxVal;
}

int main() {
    std::cout << "=== Welcome to CodeTribe C++ Demo ===" << std::endl;
    
    // Create collaborative session
    CodeTribeSession session("CPP_DEMO_2024");
    
    // Add participants
    session.addParticipant("Alice Johnson");
    session.addParticipant("Bob Smith"); 
    session.addParticipant("Charlie Brown");
    
    // Display and sort participants
    session.displayParticipants();
    session.sortParticipants();
    session.displayParticipants();
    
    // Demonstrate template usage
    std::vector<int> numbers = {23, 45, 12, 89, 34, 67};
    std::cout << "\\nNumbers: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << "\\nMaximum value: " << findMax(numbers) << std::endl;
    
    return 0;
}`
  },
  {
    id: 'c',
    name: 'C',
    extension: 'c',
    monacoId: 'c',
    defaultCode: `// Welcome to C!
// The foundation of modern programming

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_USERS 10
#define MAX_NAME_LEN 50

typedef struct {
    char name[MAX_NAME_LEN];
    int user_id;
    int is_active;
} User;

typedef struct {
    char session_id[20];
    User users[MAX_USERS];
    int user_count;
} CodeTribeSession;

// Function prototypes
CodeTribeSession* create_session(const char* session_id);
void add_user(CodeTribeSession* session, const char* name, int user_id);
void display_session_info(const CodeTribeSession* session);
void demonstrate_arrays();
int fibonacci(int n);

int main() {
    printf("=== CodeTribe C Programming Demo ===\\n\\n");
    
    // Create a new session
    CodeTribeSession* session = create_session("C_SESSION_2024");
    
    // Add users to the session
    add_user(session, "Alice Developer", 1);
    add_user(session, "Bob Programmer", 2);
    add_user(session, "Charlie Coder", 3);
    
    // Display session information
    display_session_info(session);
    
    // Demonstrate C features
    demonstrate_arrays();
    
    // Calculate fibonacci numbers
    printf("\\n=== Fibonacci Sequence ===\\n");
    for (int i = 0; i < 10; i++) {
        printf("fib(%d) = %d\\n", i, fibonacci(i));
    }
    
    // Cleanup
    free(session);
    
    return 0;
}

CodeTribeSession* create_session(const char* session_id) {
    CodeTribeSession* session = malloc(sizeof(CodeTribeSession));
    if (session == NULL) {
        printf("Error: Memory allocation failed!\\n");
        exit(1);
    }
    
    strcpy(session->session_id, session_id);
    session->user_count = 0;
    
    printf("Created session: %s\\n", session->session_id);
    return session;
}

void add_user(CodeTribeSession* session, const char* name, int user_id) {
    if (session->user_count >= MAX_USERS) {
        printf("Error: Maximum users reached!\\n");
        return;
    }
    
    User* user = &session->users[session->user_count];
    strcpy(user->name, name);
    user->user_id = user_id;
    user->is_active = 1;
    
    session->user_count++;
    printf("Added user: %s (ID: %d)\\n", name, user_id);
}

void display_session_info(const CodeTribeSession* session) {
    printf("\\n=== Session Information ===\\n");
    printf("Session ID: %s\\n", session->session_id);
    printf("Active Users: %d\\n", session->user_count);
    
    for (int i = 0; i < session->user_count; i++) {
        printf("- %s (ID: %d, Status: %s)\\n", 
               session->users[i].name,
               session->users[i].user_id,
               session->users[i].is_active ? "Active" : "Inactive");
    }
}

void demonstrate_arrays() {
    printf("\\n=== Array Operations Demo ===\\n");
    
    int numbers[] = {15, 7, 23, 9, 42, 8, 16};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printf("Original array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    
    // Find maximum and minimum
    int max = numbers[0], min = numbers[0];
    int sum = 0;
    
    for (int i = 0; i < size; i++) {
        if (numbers[i] > max) max = numbers[i];
        if (numbers[i] < min) min = numbers[i];
        sum += numbers[i];
    }
    
    printf("Maximum: %d\\n", max);
    printf("Minimum: %d\\n", min);
    printf("Sum: %d\\n", sum);
    printf("Average: %.2f\\n", (double)sum / size);
}

int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}`
  },
  {
    id: 'csharp',
    name: 'C#',
    extension: 'cs',
    monacoId: 'csharp',
    defaultCode: `// Welcome to C#!
// Modern, object-oriented programming language

using System;
using System.Collections.Generic;
using System.Linq;

namespace CodeTribeDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("=== CodeTribe C# Demo ===\\n");
            
            // Create a collaborative session
            var session = new CollaborativeSession("CSHARP_2024");
            
            // Add team members
            session.AddMember("Alice", "Frontend Developer", new[] { "React", "TypeScript" });
            session.AddMember("Bob", "Backend Developer", new[] { "C#", ".NET", "SQL" });
            session.AddMember("Charlie", "Full Stack", new[] { "C#", "React", "Azure" });
            
            // Display session information
            session.DisplayInfo();
            
            // Demonstrate LINQ
            DemonstrateLinq();
            
            // Show async programming
            Console.WriteLine("\\n=== Async Demo ===");
            var asyncDemo = new AsyncDemo();
            asyncDemo.RunDemo().Wait();
        }
        
        private static void DemonstrateLinq()
        {
            Console.WriteLine("\\n=== LINQ Demo ===");
            
            var numbers = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            
            var evenNumbers = numbers.Where(n => n % 2 == 0);
            var squaredNumbers = numbers.Select(n => n * n);
            var sum = numbers.Sum();
            
            Console.WriteLine($"Original: [{string.Join(", ", numbers)}]");
            Console.WriteLine($"Even numbers: [{string.Join(", ", evenNumbers)}]");
            Console.WriteLine($"Squared: [{string.Join(", ", squaredNumbers)}]");
            Console.WriteLine($"Sum: {sum}");
        }
    }
    
    public class CollaborativeSession
    {
        public string SessionId { get; private set; }
        private List<TeamMember> members = new List<TeamMember>();
        
        public CollaborativeSession(string sessionId)
        {
            SessionId = sessionId;
            Console.WriteLine($"Created session: {SessionId}");
        }
        
        public void AddMember(string name, string role, string[] skills)
        {
            var member = new TeamMember
            {
                Name = name,
                Role = role,
                Skills = skills.ToList(),
                JoinedAt = DateTime.Now
            };
            
            members.Add(member);
            Console.WriteLine($"Added member: {name} ({role})");
        }
        
        public void DisplayInfo()
        {
            Console.WriteLine($"\\n=== Session: {SessionId} ===");
            Console.WriteLine($"Active members: {members.Count}");
            
            foreach (var member in members)
            {
                Console.WriteLine($"- {member.Name} ({member.Role})");
                Console.WriteLine($"  Skills: {string.Join(", ", member.Skills)}");
                Console.WriteLine($"  Joined: {member.JoinedAt:yyyy-MM-dd HH:mm}");
            }
        }
    }
    
    public class TeamMember
    {
        public string Name { get; set; }
        public string Role { get; set; }
        public List<string> Skills { get; set; }
        public DateTime JoinedAt { get; set; }
    }
    
    public class AsyncDemo
    {
        public async System.Threading.Tasks.Task RunDemo()
        {
            Console.WriteLine("Starting async operation...");
            
            var task1 = SimulateWork("Task 1", 1000);
            var task2 = SimulateWork("Task 2", 1500);
            var task3 = SimulateWork("Task 3", 800);
            
            await System.Threading.Tasks.Task.WhenAll(task1, task2, task3);
            
            Console.WriteLine("All async tasks completed!");
        }
        
        private async System.Threading.Tasks.Task SimulateWork(string taskName, int delayMs)
        {
            Console.WriteLine($"{taskName} started...");
            await System.Threading.Tasks.Task.Delay(delayMs);
            Console.WriteLine($"{taskName} completed!");
        }
    }
}`
  },
  {
    id: 'go',
    name: 'Go',
    extension: 'go',
    monacoId: 'go',
    defaultCode: `// Welcome to Go!
// Simple, fast, and reliable programming language

package main

import (
    "fmt"
    "sort"
    "strings"
    "time"
)

// Struct for representing a team member
type TeamMember struct {
    Name     string
    Role     string
    Skills   []string
    JoinedAt time.Time
}

// Interface for session management
type SessionManager interface {
    AddMember(member TeamMember)
    GetMemberCount() int
    DisplayInfo()
}

// CodeTribe session implementation
type CodeTribeSession struct {
    SessionID string
    Members   []TeamMember
}

// Implement SessionManager interface
func (s *CodeTribeSession) AddMember(member TeamMember) {
    s.Members = append(s.Members, member)
    fmt.Printf("Added member: %s (%s)\\n", member.Name, member.Role)
}

func (s *CodeTribeSession) GetMemberCount() int {
    return len(s.Members)
}

func (s *CodeTribeSession) DisplayInfo() {
    fmt.Printf("\\n=== Session: %s ===\\n", s.SessionID)
    fmt.Printf("Active members: %d\\n", s.GetMemberCount())
    
    for _, member := range s.Members {
        fmt.Printf("- %s (%s)\\n", member.Name, member.Role)
        fmt.Printf("  Skills: %s\\n", strings.Join(member.Skills, ", "))
        fmt.Printf("  Joined: %s\\n", member.JoinedAt.Format("2006-01-02 15:04:05"))
    }
}

// Goroutine example
func processData(data []int, result chan<- int) {
    sum := 0
    for _, value := range data {
        sum += value
    }
    result <- sum
}

func main() {
    fmt.Println("=== CodeTribe Go Demo ===\\n")
    
    // Create a new session
    session := &CodeTribeSession{
        SessionID: "GO_SESSION_2024",
        Members:   make([]TeamMember, 0),
    }
    
    // Add team members
    session.AddMember(TeamMember{
        Name:     "Alice Johnson",
        Role:     "Backend Developer",
        Skills:   []string{"Go", "Docker", "Kubernetes"},
        JoinedAt: time.Now(),
    })
    
    session.AddMember(TeamMember{
        Name:     "Bob Smith",
        Role:     "DevOps Engineer", 
        Skills:   []string{"Go", "AWS", "Terraform"},
        JoinedAt: time.Now(),
    })
    
    // Display session info
    session.DisplayInfo()
    
    // Demonstrate slices and sorting
    fmt.Println("\\n=== Go Features Demo ===")
    numbers := []int{64, 25, 12, 22, 11, 90, 5, 77, 30}
    fmt.Printf("Original slice: %v\\n", numbers)
    
    sort.Ints(numbers)
    fmt.Printf("Sorted slice: %v\\n", numbers)
    
    // Demonstrate goroutines and channels
    fmt.Println("\\n=== Goroutines Demo ===")
    data1 := []int{1, 2, 3, 4, 5}
    data2 := []int{6, 7, 8, 9, 10}
    
    result := make(chan int, 2)
    
    go processData(data1, result)
    go processData(data2, result)
    
    sum1, sum2 := <-result, <-result
    fmt.Printf("Sum of data1: %d\\n", sum1)
    fmt.Printf("Sum of data2: %d\\n", sum2)
    fmt.Printf("Total sum: %d\\n", sum1+sum2)
    
    // Demonstrate maps
    fmt.Println("\\n=== Maps Demo ===")
    languages := map[string]string{
        "go":         "Backend/Systems",
        "javascript": "Frontend/Backend",
        "python":     "Data Science/Backend", 
        "rust":       "Systems Programming",
    }
    
    for lang, usage := range languages {
        fmt.Printf("%s: %s\\n", strings.Title(lang), usage)
    }
}`
  },
  {
    id: 'rust',
    name: 'Rust',
    extension: 'rs',
    monacoId: 'rust',
    defaultCode: `// Welcome to Rust!
// Systems programming language focused on safety and performance

use std::collections::HashMap;
use std::fmt;

// Define a struct for team members
#[derive(Debug, Clone)]
struct TeamMember {
    name: String,
    role: String,
    skills: Vec<String>,
    is_active: bool,
}

impl TeamMember {
    fn new(name: &str, role: &str, skills: Vec<&str>) -> Self {
        TeamMember {
            name: name.to_string(),
            role: role.to_string(),
            skills: skills.into_iter().map(|s| s.to_string()).collect(),
            is_active: true,
        }
    }
}

impl fmt::Display for TeamMember {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "{} ({}): {} - Status: {}",
            self.name,
            self.role,
            self.skills.join(", "),
            if self.is_active { "Active" } else { "Inactive" }
        )
    }
}

// Define a trait for session management
trait SessionManagement {
    fn add_member(&mut self, member: TeamMember);
    fn remove_member(&mut self, name: &str) -> Option<TeamMember>;
    fn get_active_count(&self) -> usize;
}

// CodeTribe session struct
struct CodeTribeSession {
    session_id: String,
    members: HashMap<String, TeamMember>,
}

impl CodeTribeSession {
    fn new(session_id: &str) -> Self {
        println!("Created new session: {}", session_id);
        CodeTribeSession {
            session_id: session_id.to_string(),
            members: HashMap::new(),
        }
    }
    
    fn display_info(&self) {
        println!("\\n=== Session: {} ===", self.session_id);
        println!("Total members: {}", self.members.len());
        println!("Active members: {}", self.get_active_count());
        
        for member in self.members.values() {
            println!("- {}", member);
        }
    }
}

impl SessionManagement for CodeTribeSession {
    fn add_member(&mut self, member: TeamMember) {
        println!("Adding member: {} ({})", member.name, member.role);
        self.members.insert(member.name.clone(), member);
    }
    
    fn remove_member(&mut self, name: &str) -> Option<TeamMember> {
        self.members.remove(name)
    }
    
    fn get_active_count(&self) -> usize {
        self.members.values().filter(|m| m.is_active).count()
    }
}

// Generic function example
fn find_maximum<T: PartialOrd + Copy>(slice: &[T]) -> Option<T> {
    if slice.is_empty() {
        return None;
    }
    
    let mut max = slice[0];
    for &item in slice.iter().skip(1) {
        if item > max {
            max = item;
        }
    }
    Some(max)
}

// Demonstrate error handling with Result
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Cannot divide by zero!".to_string())
    } else {
        Ok(a / b)
    }
}

fn main() {
    println!("=== CodeTribe Rust Demo ===\\n");
    
    // Create a new collaborative session
    let mut session = CodeTribeSession::new("RUST_SESSION_2024");
    
    // Add team members
    let alice = TeamMember::new("Alice Johnson", "Systems Developer", vec!["Rust", "C++", "Linux"]);
    let bob = TeamMember::new("Bob Smith", "Backend Engineer", vec!["Rust", "PostgreSQL", "Docker"]);
    let charlie = TeamMember::new("Charlie Brown", "Performance Engineer", vec!["Rust", "WebAssembly", "Optimization"]);
    
    session.add_member(alice);
    session.add_member(bob);
    session.add_member(charlie);
    
    // Display session information
    session.display_info();
    
    // Demonstrate generic function
    println!("\\n=== Generic Function Demo ===");
    let numbers = vec![23, 45, 12, 89, 34, 67, 91];
    match find_maximum(&numbers) {
        Some(max) => println!("Maximum number: {}", max),
        None => println!("No numbers provided"),
    }
    
    let words = vec!["rust", "is", "awesome", "and", "safe"];
    match find_maximum(&words) {
        Some(max) => println!("Maximum word (lexicographically): {}", max),
        None => println!("No words provided"),
    }
    
    // Demonstrate error handling
    println!("\\n=== Error Handling Demo ===");
    match divide(10.0, 2.0) {
        Ok(result) => println!("10.0 / 2.0 = {}", result),
        Err(error) => println!("Error: {}", error),
    }
    
    match divide(10.0, 0.0) {
        Ok(result) => println!("10.0 / 0.0 = {}", result),
        Err(error) => println!("Error: {}", error),
    }
    
    // Demonstrate ownership and borrowing
    println!("\\n=== Ownership Demo ===");
    let original_vec = vec![1, 2, 3, 4, 5];
    println!("Original vector: {:?}", original_vec);
    
    // Borrowing (no ownership transfer)
    let length = original_vec.len();
    println!("Vector length: {}", length);
    
    // We can still use original_vec because we only borrowed it
    let sum: i32 = original_vec.iter().sum();
    println!("Sum of elements: {}", sum);
    
    println!("\\n🦀 Rust: Fast, Reliable, Productive — Pick Three! 🦀");
}`
  },
  {
    id: 'php',
    name: 'PHP',
    extension: 'php',
    monacoId: 'php',
    defaultCode: `<?php
// Welcome to PHP!
// Server-side scripting language for web development

declare(strict_types=1);

class TeamMember {
    public string $name;
    public string $role;
    public array $skills;
    public bool $isActive;
    public DateTime $joinedAt;
    
    public function __construct(string $name, string $role, array $skills) {
        $this->name = $name;
        $this->role = $role;
        $this->skills = $skills;
        $this->isActive = true;
        $this->joinedAt = new DateTime();
    }
    
    public function getInfo(): string {
        return sprintf(
            "%s (%s) - Skills: %s - Joined: %s",
            $this->name,
            $this->role,
            implode(", ", $this->skills),
            $this->joinedAt->format('Y-m-d H:i:s')
        );
    }
    
    public function addSkill(string $skill): void {
        if (!in_array($skill, $this->skills)) {
            $this->skills[] = $skill;
        }
    }
}

class CodeTribeSession {
    private string $sessionId;
    private array $members = [];
    
    public function __construct(string $sessionId) {
        $this->sessionId = $sessionId;
        echo "Created session: {$sessionId}\\n";
    }
    
    public function addMember(TeamMember $member): void {
        $this->members[$member->name] = $member;
        echo "Added member: {$member->name} ({$member->role})\\n";
    }
    
    public function removeMember(string $name): ?TeamMember {
        if (isset($this->members[$name])) {
            $member = $this->members[$name];
            unset($this->members[$name]);
            return $member;
        }
        return null;
    }
    
    public function getMemberCount(): int {
        return count($this->members);
    }
    
    public function getActiveCount(): int {
        return count(array_filter($this->members, fn($member) => $member->isActive));
    }
    
    public function displayInfo(): void {
        echo "\\n=== Session: {$this->sessionId} ===\\n";
        echo "Total members: " . $this->getMemberCount() . "\\n";
        echo "Active members: " . $this->getActiveCount() . "\\n\\n";
        
        foreach ($this->members as $member) {
            echo "- " . $member->getInfo() . "\\n";
        }
    }
    
    public function getSkillsStatistics(): array {
        $skillsCount = [];
        foreach ($this->members as $member) {
            foreach ($member->skills as $skill) {
                $skillsCount[$skill] = ($skillsCount[$skill] ?? 0) + 1;
            }
        }
        
        arsort($skillsCount);
        return $skillsCount;
    }
}

// Utility functions
function demonstrateArrays(): void {
    echo "\\n=== PHP Array Features Demo ===\\n";
    
    // Indexed array
    $numbers = [23, 45, 12, 89, 34, 67, 91];
    echo "Original array: " . implode(", ", $numbers) . "\\n";
    
    // Array functions
    echo "Maximum: " . max($numbers) . "\\n";
    echo "Minimum: " . min($numbers) . "\\n";
    echo "Sum: " . array_sum($numbers) . "\\n";
    echo "Average: " . round(array_sum($numbers) / count($numbers), 2) . "\\n";
    
    // Filter and map
    $evenNumbers = array_filter($numbers, fn($n) => $n % 2 === 0);
    $squared = array_map(fn($n) => $n * $n, $numbers);
    
    echo "Even numbers: " . implode(", ", $evenNumbers) . "\\n";
    echo "Squared: " . implode(", ", $squared) . "\\n";
    
    // Associative array
    $languages = [
        'php' => 'Web Development',
        'python' => 'Data Science',
        'javascript' => 'Full Stack',
        'rust' => 'Systems Programming'
    ];
    
    echo "\\nProgramming Languages:\\n";
    foreach ($languages as $lang => $purpose) {
        echo "- " . ucfirst($lang) . ": {$purpose}\\n";
    }
}

function fibonacci(int $n): int {
    if ($n <= 1) {
        return $n;
    }
    return fibonacci($n - 1) + fibonacci($n - 2);
}

// Main execution
try {
    echo "=== CodeTribe PHP Demo ===\\n\\n";
    
    // Create a collaborative session
    $session = new CodeTribeSession("PHP_SESSION_2024");
    
    // Add team members
    $alice = new TeamMember("Alice Johnson", "Full Stack Developer", ["PHP", "Laravel", "Vue.js"]);
    $bob = new TeamMember("Bob Smith", "Backend Developer", ["PHP", "MySQL", "Redis"]);
    $charlie = new TeamMember("Charlie Brown", "DevOps Engineer", ["PHP", "Docker", "AWS"]);
    
    $session->addMember($alice);
    $session->addMember($bob);
    $session->addMember($charlie);
    
    // Add additional skills
    $alice->addSkill("React");
    $bob->addSkill("PostgreSQL");
    
    // Display session information
    $session->displayInfo();
    
    // Show skills statistics
    echo "\\n=== Skills Statistics ===\\n";
    $skillsStats = $session->getSkillsStatistics();
    foreach ($skillsStats as $skill => $count) {
        echo "- {$skill}: {$count} developer(s)\\n";
    }
    
    // Demonstrate array features
    demonstrateArrays();
    
    // Fibonacci sequence
    echo "\\n=== Fibonacci Sequence ===\\n";
    for ($i = 0; $i < 10; $i++) {
        echo "fib({$i}) = " . fibonacci($i) . "\\n";
    }
    
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}

echo "\\n🐘 PHP: The web development powerhouse! 🚀\\n";
?>`
  },
  {
    id: 'ruby',
    name: 'Ruby',
    extension: 'rb',
    monacoId: 'ruby',
    defaultCode: `# Welcome to Ruby!
# Elegant, expressive programming language

require 'date'

class TeamMember
  attr_accessor :name, :role, :skills, :is_active, :joined_at
  
  def initialize(name, role, skills = [])
    @name = name
    @role = role
    @skills = skills
    @is_active = true
    @joined_at = Time.now
  end
  
  def add_skill(skill)
    @skills << skill unless @skills.include?(skill)
  end
  
  def to_s
    "#{@name} (#{@role}) - Skills: #{@skills.join(', ')} - Joined: #{@joined_at.strftime('%Y-%m-%d %H:%M:%S')}"
  end
  
  def active?
    @is_active
  end
end

class CodeTribeSession
  attr_reader :session_id, :members
  
  def initialize(session_id)
    @session_id = session_id
    @members = {}
    puts "Created session: #{session_id}"
  end
  
  def add_member(member)
    @members[member.name] = member
    puts "Added member: #{member.name} (#{member.role})"
  end
  
  def remove_member(name)
    @members.delete(name)
  end
  
  def member_count
    @members.size
  end
  
  def active_count
    @members.values.count(&:active?)
  end
  
  def display_info
    puts "\\n=== Session: #{@session_id} ==="
    puts "Total members: #{member_count}"
    puts "Active members: #{active_count}"
    puts
    
    @members.each_value do |member|
      puts "- #{member}"
    end
  end
  
  def skills_statistics
    skills_count = Hash.new(0)
    @members.each_value do |member|
      member.skills.each { |skill| skills_count[skill] += 1 }
    end
    skills_count.sort_by { |_, count| -count }
  end
  
  def find_by_skill(skill)
    @members.values.select { |member| member.skills.include?(skill) }
  end
end

# Utility methods
def demonstrate_arrays
  puts "\\n=== Ruby Array Features Demo ==="
  
  numbers = [23, 45, 12, 89, 34, 67, 91]
  puts "Original array: #{numbers.join(', ')}"
  
  puts "Maximum: #{numbers.max}"
  puts "Minimum: #{numbers.min}"
  puts "Sum: #{numbers.sum}"
  puts "Average: #{numbers.sum.to_f / numbers.size}"
  
  even_numbers = numbers.select(&:even?)
  squared = numbers.map { |n| n * n }
  
  puts "Even numbers: #{even_numbers.join(', ')}"
  puts "Squared: #{squared.join(', ')}"
  
  # Hash example
  languages = {
    ruby: 'Web Development',
    python: 'Data Science',
    javascript: 'Full Stack',
    rust: 'Systems Programming'
  }
  
  puts "\\nProgramming Languages:"
  languages.each { |lang, purpose| puts "- #{lang.capitalize}: #{purpose}" }
end

def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

# Block and iterator examples
def demonstrate_blocks
  puts "\\n=== Ruby Blocks and Iterators ==="
  
  # Using blocks with arrays
  (1..5).each { |i| print "#{i} " }
  puts
  
  # More complex block usage
  words = %w[ruby python javascript go rust]
  capitalized = words.map(&:capitalize)
  puts "Capitalized: #{capitalized.join(', ')}"
  
  # Using select and reject
  long_words = words.select { |word| word.length > 4 }
  short_words = words.reject { |word| word.length > 4 }
  
  puts "Long words: #{long_words.join(', ')}"
  puts "Short words: #{short_words.join(', ')}"
  
  # Custom iterator
  def countdown(from)
    from.downto(1) { |i| yield(i) }
  end
  
  print "Countdown: "
  countdown(5) { |n| print "#{n}.. " }
  puts "Blast off! 🚀"
end

# Main execution
begin
  puts "=== CodeTribe Ruby Demo ===\\n"
  
  # Create a collaborative session
  session = CodeTribeSession.new("RUBY_SESSION_2024")
  
  # Add team members
  alice = TeamMember.new("Alice Johnson", "Full Stack Developer", ["Ruby", "Rails", "JavaScript"])
  bob = TeamMember.new("Bob Smith", "Backend Developer", ["Ruby", "PostgreSQL", "Redis"])
  charlie = TeamMember.new("Charlie Brown", "DevOps Engineer", ["Ruby", "Docker", "AWS"])
  
  session.add_member(alice)
  session.add_member(bob)
  session.add_member(charlie)
  
  # Add additional skills
  alice.add_skill("React")
  bob.add_skill("MongoDB")
  
  # Display session information
  session.display_info
  
  # Show skills statistics
  puts "\\n=== Skills Statistics ==="
  session.skills_statistics.each do |skill, count|
    puts "- #{skill}: #{count} developer#{'s' if count > 1}"
  end
  
  # Find developers by skill
  ruby_devs = session.find_by_skill("Ruby")
  puts "\\nRuby developers: #{ruby_devs.map(&:name).join(', ')}"
  
  # Demonstrate array features
  demonstrate_arrays
  
  # Demonstrate blocks
  demonstrate_blocks
  
  # Fibonacci sequence
  puts "\\n=== Fibonacci Sequence ==="
  (0..9).each { |i| puts "fib(#{i}) = #{fibonacci(i)}" }
  
rescue StandardError => e
  puts "Error: #{e.message}"
end

puts "\\n💎 Ruby: Programmer happiness and productivity! ✨"`
  }
];

export function getLanguageConfig(languageId: string): LanguageConfig | undefined {
  return SUPPORTED_LANGUAGES.find(lang => lang.id === languageId);
}