#!/usr/bin/env bash

set -e

echo "Creating npm global directory..."
mkdir -p "$HOME/.npm-global"

npm config set prefix "$HOME/.npm-global"

PROFILE="$HOME/.bashrc"

if [ -f "$HOME/.zshrc" ]; then
    PROFILE="$HOME/.zshrc"
fi

LINE='export PATH="$HOME/.npm-global/bin:$PATH"'

grep -qxF "$LINE" "$PROFILE" || echo "$LINE" >> "$PROFILE"

export PATH="$HOME/.npm-global/bin:$PATH"

npm install -g chat-cli-gemini-ai

echo "Installation complete!"
echo "Run: source $PROFILE"