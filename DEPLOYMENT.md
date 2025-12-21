# Deployment Guide: Vercel + GoDaddy

This guide will walk you through deploying the website to Vercel and connecting your GoDaddy domain.

## Step 1: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login (you can use GitHub, GitLab, or email)

2. **Create a New Project**
   - Click "Add New..." → "Project"
   - If you have the code in GitHub/GitLab, import it
   - OR click "Browse" and upload the project folder directly

3. **Configure Project**
   - Framework Preset: **Other** (or leave as auto-detected)
   - Root Directory: `./` (default)
   - Build Command: Leave empty (static site, no build needed)
   - Output Directory: Leave empty (or `./`)
   - Install Command: Leave empty

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 30-60 seconds)
   - You'll get a URL like: `your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI (Advanced)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /Users/j/Dev/TimMasonProTools122125
   vercel
   ```
   - Follow the prompts
   - Choose "Set up and deploy" for new project
   - Accept defaults

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Step 2: Connect GoDaddy Domain to Vercel

### In Vercel Dashboard:

1. **Go to Your Project**
   - Click on your project name in the Vercel dashboard

2. **Open Settings**
   - Click the "Settings" tab
   - Click "Domains" in the left sidebar

3. **Add Domain**
   - Enter: `timmasonprotools.com`
   - Click "Add"
   - Also add: `www.timmasonprotools.com` (optional but recommended)
   - Vercel will show you the DNS records you need

### In GoDaddy Dashboard:

1. **Log into GoDaddy**
   - Go to [godaddy.com](https://godaddy.com)
   - Sign in to your account

2. **Access DNS Management**
   - Go to "My Products"
   - Find `timmasonprotools.com`
   - Click "DNS" or "Manage DNS"

3. **Update DNS Records**

   You'll need to add/update these records based on what Vercel shows you:

   **For Root Domain (timmasonprotools.com):**
   
   **Option 1: Use A Record (Recommended)**
   - Type: **A**
   - Name: `@` (or leave blank, or `timmasonprotools.com`)
   - Value: Vercel will provide an IP address (usually `76.76.21.21`)
   - TTL: `600` (or default)

   **Option 2: Use CNAME Record**
   - Type: **CNAME**
   - Name: `@` (or leave blank)
   - Value: `cname.vercel-dns.com` (or what Vercel provides)
   - TTL: `600`

   **For WWW Subdomain (www.timmasonprotools.com):**
   - Type: **CNAME**
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or what Vercel provides)
   - TTL: `600`

4. **Remove Conflicting Records**
   - Delete any existing A or CNAME records for `@` that conflict
   - Keep MX records (for email) if you have them

5. **Save Changes**
   - Click "Save" after making changes

## Step 3: SSL Certificate (Automatic)

- Vercel automatically provisions SSL certificates via Let's Encrypt
- This usually happens within a few minutes after DNS propagates
- Your site will be available at `https://timmasonprotools.com`

## Step 4: Verify DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. To check:

1. **Check DNS Propagation**
   - Visit [whatsmydns.net](https://www.whatsmydns.net)
   - Enter `timmasonprotools.com`
   - Check A record or CNAME record
   - Wait until all locations show the correct values

2. **Test Your Site**
   - Visit `https://timmasonprotools.com`
   - Should load your website
   - Check that SSL certificate is valid (lock icon in browser)

## Step 5: Configure Email DNS Records (For Google Workspace)

After your website is live, you'll need to add email DNS records for Google Workspace:

### In GoDaddy DNS Settings:

1. **MX Records** (for receiving email)
   - Type: **MX**
   - Name: `@`
   - Priority: `1`
   - Value: `aspmx.l.google.com` (Google will provide exact values)
   - Add multiple MX records with different priorities as Google specifies

2. **TXT Record** (for domain verification)
   - Type: **TXT**
   - Name: `@`
   - Value: (Google will provide this during setup)

3. **SPF Record** (to prevent spam)
   - Type: **TXT**
   - Name: `@`
   - Value: `v=spf1 include:_spf.google.com ~all`

4. **DKIM Records** (Google will provide these)
   - Type: **TXT**
   - Name: `google._domainkey` (or similar)
   - Value: (Google provides this)

5. **DMARC Record** (optional but recommended)
   - Type: **TXT**
   - Name: `_dmarc`
   - Value: `v=DMARC1; p=none; rua=mailto:info@timmasonprotools.com`

## Troubleshooting

### Site Not Loading After DNS Update

1. **Wait 24-48 hours** - DNS propagation can take time
2. **Clear browser cache** - Try incognito/private mode
3. **Check DNS records** - Verify they match what Vercel provided
4. **Check Vercel dashboard** - Ensure domain is verified and SSL is active

### SSL Certificate Issues

- Vercel automatically provisions SSL
- If it's not working, wait a few hours after DNS propagation
- Check Vercel dashboard for SSL status

### Email Not Working

- Ensure MX records are correct
- Wait 24-48 hours for DNS propagation
- Verify SPF, DKIM records are set correctly
- Check Google Workspace admin console for verification status

## Quick Reference: Vercel DNS Values

When Vercel asks for DNS records, they typically provide:

- **A Record**: `76.76.21.21` (or similar IP)
- **CNAME**: `cname.vercel-dns.com`

**Always use the exact values Vercel provides in your project's Domain settings!**

## Next Steps After Deployment

1. ✅ Test the website at `https://timmasonprotools.com`
2. ✅ Set up Google Workspace email
3. ✅ Update phone number in `index.html` if needed
4. ✅ Test contact forms/links
5. ✅ Monitor email forwarding to ensure it works

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GoDaddy Support: [godaddy.com/help](https://www.godaddy.com/help)

