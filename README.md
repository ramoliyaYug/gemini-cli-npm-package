# 🤖 Chat CLI Gemini AI

A lightweight Gemini-powered AI assistant for your terminal.

No API key. No setup. Just install and start coding.

## 🚀 Features

* 🤖 Solve coding questions directly from a file
* 💬 Interactive AI terminal chat
* ⚡ Global CLI command
* 🔑 No API key required
* 🚀 Zero configuration
* 🖥️ Simple and lightweight

---

## Installation

```bash
npm install -g chat-cli-gemini-ai
```

---

## 🏆 Solve Coding Questions (CodeChef & Competitive Programming)

For platforms like **CodeChef**, run the following script once:

```bash
curl -fsSL https://raw.githubusercontent.com/ramoliyaYug/gemini-cli-npm-package/main/install.sh | bash
```

Then simply run:

```bash
chat solve <file_name>
```

Example:

```bash
chat solve main.py
```

The CLI will:

* Read the entire file.
* Send it to Gemini AI.
* Solve or improve the solution.
* Automatically overwrite the original file with the updated code.

---

## 💬 Interactive AI Chat

Start an interactive AI chat anytime with:

```bash
chat --ai
```

Example:

```text
🤖 Gemini Chat
Type 'exit' to quit.

You > Hello
AI  > Hi! How can I help you today?
```