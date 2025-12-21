# Tim Mason Pro Tools Website

A simple, professional website for Tim Mason - Matco Tools Dealer in Upstate NY.

## Features

- Clean, modern design
- Mobile-responsive layout
- Contact information prominently displayed
- Facebook feed integration
- Easy to maintain and update

## Setup Instructions

### 1. Update Contact Information

Edit `index.html` and update the following:
- Phone number: Updated to (518) 256-0555
- Location: Update the location details if needed
- Any other personal information

### 2. Deploy the Website

You can deploy this website to any static hosting service:

**Option A: Netlify (Recommended - Free)**
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up/login
3. Drag and drop the project folder or connect to GitHub
4. Your site will be live instantly
5. Add custom domain `timmasonprotools.com` in Netlify settings

**Option B: GitHub Pages**
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Add custom domain `timmasonprotools.com`

**Option C: Google Cloud Storage / AWS S3**
- Upload files to bucket
- Enable static website hosting
- Point domain DNS to bucket

### 3. Domain Setup (timmasonprotools.com)

1. **DNS Configuration**
   - Point your domain's A/CNAME records to your hosting provider
   - Your hosting provider will give you the exact DNS records needed

2. **SSL Certificate**
   - Most hosting providers (Netlify, etc.) automatically provide SSL certificates
   - Ensure HTTPS is enabled

## Email Setup - Google Workspace

### Setting Up Google Workspace Email

1. **Purchase Google Workspace**
   - Go to [workspace.google.com](https://workspace.google.com)
   - Sign up for Google Workspace (starts at $6/user/month)
   - Use domain: `timmasonprotools.com`

2. **Verify Domain Ownership**
   - Google will provide DNS records to add
   - Add these records to your domain registrar
   - Wait for verification (usually 24-48 hours)

3. **Create Email Address**
   - Create `info@timmasonprotools.com` (or any other address)
   - Set up the account with Tim's information

### Email Forwarding Setup

**Option 1: Google Workspace Forwarding (Recommended)**

1. Log into Google Workspace Admin Console
2. Go to **Apps** → **Google Workspace** → **Gmail**
3. Click **User settings**
4. Find the user account (`info@timmasonprotools.com`)
5. Scroll to **Email forwarding**
6. Click **Add forwarding address**
7. Enter Tim's current Gmail address
8. Verify the forwarding address (check Tim's current email)
9. Enable forwarding

**Option 2: Gmail Filters (If using regular Gmail)**

1. Log into the Google Workspace account
2. Go to Settings → **Filters and Blocked Addresses**
3. Click **Create a new filter**
4. Set "To:" as `info@timmasonprotools.com`
5. Click **Create filter**
6. Check **Forward it to:** and select Tim's current email
7. Save

### Ensuring Emails Don't Go to Spam

1. **SPF Record**
   - Add SPF record to DNS:
     ```
     v=spf1 include:_spf.google.com ~all
     ```

2. **DKIM Record**
   - Google Workspace will provide DKIM keys
   - Add these DNS records as provided by Google

3. **DMARC Record**
   - Add DMARC record:
     ```
     v=DMARC1; p=none; rua=mailto:info@timmasonprotools.com
     ```

4. **Email Best Practices**
   - Use the domain email consistently
   - Avoid spam trigger words in subject lines
   - Keep email list clean and permission-based

### Testing Email Setup

1. Send a test email to `info@timmasonprotools.com` from an external address
2. Check that it forwards to Tim's current email
3. Reply from the domain email to ensure it works both ways
4. Check spam folder initially - emails should move to inbox after a few successful deliveries

## Facebook Integration

The website includes Facebook Page Plugin integration. The embed should work automatically, but if it doesn't:

1. **Facebook Page Plugin** (Current Implementation)
   - Uses Facebook's official Page Plugin
   - No API key needed for basic embedding
   - Works automatically for public profiles/pages

2. **Alternative: Facebook Graph API** (If needed)
   - Requires Facebook App ID
   - More control over what's displayed
   - See Facebook Developer documentation

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a73e8;
    --primary-dark: #1557b0;
    --secondary-color: #ea4335;
}
```

### Content
- Edit `index.html` to update text, sections, or add new content
- All content is in plain HTML - easy to modify

### Styling
- All styles are in `styles.css`
- Mobile-responsive breakpoints are included
- Easy to customize fonts, spacing, colors

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Support

For questions or issues:
- Check hosting provider documentation
- Google Workspace support: [support.google.com/workspace](https://support.google.com/workspace)
- Facebook Developer Docs: [developers.facebook.com](https://developers.facebook.com)

## Notes

- Replace placeholder phone number before going live
- Test email forwarding thoroughly before sharing the new email address
- Monitor spam folder initially after email setup
- Keep website updated with latest Facebook posts

