# GitHub Pages Deployment Guide for Neural Niki

## Prerequisites
- Git installed locally
- GitHub account with a repository named `neuralniki.github.io`
- Custom domain `neuralniki.com` configured in GitHub Pages settings

## Setup Instructions

### 1. Initialize GitHub Repository
```bash
git init
git remote add origin https://github.com/neural-nikitha/neuralniki.github.io.git
git branch -M main
```

### 2. Build and Deploy
```bash
# Install dependencies
npm install

# Build for production
npm run build

# The built site will be in the dist/ directory
```

### 3. Deploy to GitHub Pages
```bash
# Option A: Using GitHub Pages manually
# Push the dist/ folder contents to your repository

git add .
git commit -m "Deploy Neural Niki blog"
git push origin main
```

### 4. Configure Custom Domain
1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Under "Custom domain", enter: `neuralniki.com`
4. Check "Enforce HTTPS" (recommended)

### 5. DNS Configuration
Point your domain registrar's DNS settings to GitHub Pages:

**GitHub Pages IP addresses:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Or use CNAME record:**
- Type: CNAME
- Name: @ (or your domain)
- Value: yourusername.github.io

### 6. Verify SSL Certificate
GitHub Pages will automatically provision an SSL certificate via Let's Encrypt.
This may take a few minutes after configuring the custom domain.

## Building Locally

```bash
# Development server
npm run dev
# Builds to http://localhost:3000

# Production build
npm run build

# Preview production build
npm run preview
```

## Site Structure
- `src/content/blog/` - Blog post markdown files
- `src/pages/` - Page routes
- `src/layouts/` - Layout templates
- `src/styles/` - Global CSS
- `public/` - Static assets

## SEO & Performance

### Already Configured:
✓ Sitemap generation (auto-generated)
✓ Robots.txt for crawler directives
✓ Open Graph & Twitter cards
✓ JSON-LD structured data
✓ Mobile responsive design
✓ Fast page loads with Astro static generation
✓ Clean URLs and semantic HTML

### Additional Optimization:
- Monitor Core Web Vitals in Google Search Console
- Submit sitemap to Google Search Console
- Set up analytics if needed
- Monitor 404 errors in GitHub Pages

## Continuous Deployment (Optional)

Create `.github/workflows/deploy.yml` for automatic deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## Troubleshooting

**Site not showing up?**
- Check DNS propagation at https://dnschecker.org/
- Ensure SSL certificate is active (green checkmark in GitHub Pages settings)
- Clear browser cache and try incognito window

**Custom domain not working?**
- Wait 5-10 minutes for DNS propagation
- Verify DNS records at your domain registrar
- Check GitHub Pages settings for correct domain

**Build errors?**
- Run `npm install` to ensure all dependencies are installed
- Check Node version compatibility (use 18+)
- Review build output for specific errors

## Performance Checklist

- [x] Static site generation (fast)
- [x] Minimal CSS/JS
- [x] Image optimization (next step: optimize images in public/)
- [x] Responsive design
- [x] Semantic HTML
- [x] Fast font loading
- [x] Proper meta tags for SEO
