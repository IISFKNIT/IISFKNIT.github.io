#!/bin/bash

# GitHub Pages Setup Script for IISF KNIT Website
# Run this script to set up GitHub Pages deployment

echo "🚀 Setting up GitHub Pages for IISF KNIT Website..."
echo "=================================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository. Please run 'git init' first."
    exit 1
fi

# Add all files to git
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Add GitHub Pages deployment workflow and fix absolute paths"

# Push to main branch
echo "⬆️ Pushing to main branch..."
git push origin main

echo ""
echo "✅ Files pushed to GitHub!"
echo ""
echo "🔧 Next steps to enable GitHub Pages:"
echo "1. Go to your GitHub repository: https://github.com/Priyanshu-sde/IISF-KNIT-23"
echo "2. Click on 'Settings' tab"
echo "3. Scroll down to 'Pages' section"
echo "4. Under 'Source', select 'GitHub Actions'"
echo "5. The workflow will automatically deploy your site"
echo ""
echo "🌐 Your website will be available at:"
echo "https://priyanshu-sde.github.io/IISF-KNIT-23"
echo ""
echo "⏱️ Deployment usually takes 2-5 minutes after pushing changes."

# Check if GitHub CLI is available
if command -v gh &> /dev/null; then
    echo ""
    echo "🔧 GitHub CLI detected! You can also enable Pages using:"
    echo "gh api repos/Priyanshu-sde/IISF-KNIT-23/pages -X POST -f source='{\"branch\":\"main\",\"path\":\"/\"}'"
fi
