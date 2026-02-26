# Git Push Instructions

## Issue: Permission Denied

The repository `https://github.com/nvnsit/nvns.git` exists, but you need authentication to push.

## Solutions:

### Option 1: Use Personal Access Token (Recommended)

1. **Create a Personal Access Token:**
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name: "NVNS Project"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again)

2. **Push using the token:**
   ```bash
   git push -u origin main
   ```
   - When prompted for username: Enter `nvnsit` (or your GitHub username)
   - When prompted for password: **Paste the token** (not your password)

### Option 2: Use SSH (If you have SSH keys set up)

1. **Change remote URL to SSH:**
   ```bash
   git remote set-url origin git@github.com:nvnsit/nvns.git
   ```

2. **Push:**
   ```bash
   git push -u origin main
   ```

### Option 3: Get Added as Collaborator

If you're not the owner of the `nvnsit` organization:
1. Ask the repository owner to add you as a collaborator
2. Go to repository Settings → Collaborators → Add people
3. Then you can push normally

### Option 4: Use GitHub CLI

1. **Install GitHub CLI:**
   ```bash
   winget install GitHub.cli
   ```

2. **Authenticate:**
   ```bash
   gh auth login
   ```

3. **Push:**
   ```bash
   git push -u origin main
   ```

## Quick Fix (If you have access):

If you have the credentials, you can also try:
```bash
git push -u origin main
```
And enter your credentials when prompted.

