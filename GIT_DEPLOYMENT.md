# Git Deployment Guide: Save Work & Deploy to Vercel

Follow these exact steps to save your work in Git and deploy to Vercel.

## Step 1: Initialize Git Repository

Open Terminal and run these commands:

```bash
cd /Users/j/Dev/TimMasonProTools122125
git init
```

## Step 2: Create .gitignore File (Optional but Recommended)

Create a `.gitignore` file to exclude unnecessary files:

```bash
cat > .gitignore << EOF
.DS_Store
node_modules/
*.log
.env
EOF
```

## Step 3: Add All Files to Git

```bash
git add .
```

This adds all your files (index.html, styles.css, script.js, etc.) to Git.

## Step 4: Make Your First Commit

```bash
git commit -m "Initial commit: Tim Mason Pro Tools website"
```

## Step 5: Create GitHub Repository

1. **Go to GitHub**
   - Visit [github.com](https://github.com)
   - Sign in (or create account if needed)

2. **Create New Repository**
   - Click the "+" icon in top right → "New repository"
   - Repository name: `timmasonprotools` (or any name you want)
   - Description: "Tim Mason Matco Tools website"
   - Choose: **Public** or **Private** (your choice)
   - **DO NOT** check "Initialize with README" (we already have files)
   - Click "Create repository"

3. **Copy the Repository URL**
   - GitHub will show you commands, but you'll see a URL like:
   - `https://github.com/yourusername/timmasonprotools.git`
   - Copy this URL

## Step 6: Connect Local Repository to GitHub

Back in Terminal, run:

```bash
git remote add origin https://github.com/yourusername/timmasonprotools.git
```

**Replace `yourusername/timmasonprotools` with your actual GitHub username and repo name!**

## Step 7: Push Code to GitHub

```bash
git branch -M main
git push -u origin main
```

You may be prompted to:
- Enter your GitHub username
- Enter your GitHub password (or use a Personal Access Token)

**If you need a Personal Access Token:**
- GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token → Select "repo" scope → Copy token
- Use token as password when pushing

## Step 8: Deploy to Vercel via GitHub

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in (use GitHub to sign in for easiest connection)

2. **Import Project**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories listed
   - Find `timmasonprotools` (or whatever you named it)
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Other** (or leave as auto-detected)
   - Root Directory: `./` (default)
   - Build Command: Leave empty
   - Output Directory: Leave empty
   - Install Command: Leave empty
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel will deploy your site
   - Takes about 30-60 seconds
   - You'll get a URL like: `timmasonprotools.vercel.app`

## Step 9: Connect Your Domain

1. **In Vercel Dashboard**
   - Go to your project → Settings → Domains
   - Add: `timmasonprotools.com`
   - Add: `www.timmasonprotools.com` (optional)
   - Copy the DNS records Vercel shows you

2. **In GoDaddy**
   - Log into GoDaddy
   - Go to My Products → Find `timmasonprotools.com` → DNS
   - Add/update:
     - **A Record**: `@` → IP address Vercel provides (usually `76.76.21.21`)
     - **CNAME**: `www` → `cname.vercel-dns.com` (or what Vercel shows)
   - Save and wait 5-60 minutes for DNS to propagate

## Step 10: Automatic Deployments (Future Updates)

Now that everything is connected:

1. **Make Changes Locally**
   - Edit files in `/Users/j/Dev/TimMasonProTools122125`
   - Save your changes

2. **Commit Changes**
   ```bash
   cd /Users/j/Dev/TimMasonProTools122125
   git add .
   git commit -m "Description of your changes"
   ```

3. **Push to GitHub**
   ```bash
   git push
   ```

4. **Vercel Auto-Deploys**
   - Vercel automatically detects the push
   - Creates a new deployment automatically
   - Your site updates within 1-2 minutes
   - No manual deployment needed!

## Quick Reference Commands

**Initial Setup (one time):**
```bash
cd /Users/j/Dev/TimMasonProTools122125
git init
git add .
git commit -m "Initial commit: Tim Mason Pro Tools website"
git remote add origin https://github.com/yourusername/timmasonprotools.git
git branch -M main
git push -u origin main
```

**Future Updates:**
```bash
cd /Users/j/Dev/TimMasonProTools122125
git add .
git commit -m "Your change description"
git push
```

## Troubleshooting

### "Repository not found" error
- Check that you used the correct GitHub repository URL
- Verify you have access to the repository

### "Authentication failed" error
- Use a Personal Access Token instead of password
- GitHub → Settings → Developer settings → Personal access tokens

### Vercel not detecting changes
- Make sure Vercel is connected to the correct GitHub repository
- Check Vercel project settings → Git Repository

### DNS not working
- Wait 24-48 hours for full DNS propagation
- Verify DNS records match exactly what Vercel provided
- Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation

## Benefits of This Setup

✅ **Version Control**: All your code is saved and versioned  
✅ **Backup**: Code is safely stored on GitHub  
✅ **Auto-Deploy**: Every push automatically updates your live site  
✅ **Easy Updates**: Just commit and push to update the website  
✅ **Collaboration**: Others can contribute if needed  

Your website will now automatically deploy every time you push changes to GitHub!

