# David Shimamoto - Resume

A clean, professional resume website hosted on GitHub Pages.

## Publishing to GitHub Pages

### Initial Setup

1. **Ensure your repository is named correctly**
   - Your repository should be named `davidshimamoto.github.io` (which it already is)
   - This is your personal GitHub Pages site

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to the **Pages** section in the left sidebar
   - Under **Source**, select `main` branch
   - Click **Save**

3. **Wait for deployment**
   - GitHub will automatically build and deploy your site
   - This usually takes 1-2 minutes
   - Your site will be available at: `https://davidshimamoto.github.io`

### Making Updates

Whenever you make changes to your resume:

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Update resume"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically rebuild and redeploy your site within a few minutes.

### Customizing Your Resume

Edit `index.html` to update:
- Your name and contact information
- Professional summary
- Work experience
- Education
- Skills

Edit `style.css` to customize:
- Colors
- Fonts
- Layout
- Responsive design

### Tips

- **Test locally**: Open `index.html` in your browser before pushing to see changes
- **Check deployment status**: Go to the **Actions** tab in your GitHub repository to see deployment progress
- **Custom domain** (optional): You can set up a custom domain in Settings > Pages
- **HTTPS**: GitHub Pages automatically provides HTTPS for your site

### Troubleshooting

- If your site doesn't update, check the Actions tab for build errors
- Clear your browser cache to see latest changes
- Ensure the main branch is set as the source in Settings > Pages
