# Noise & Waves

Modern landing page for kokoilab

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── Hero.jsx           # Hero section
│   ├── Features.jsx       # Features showcase
│   └── Footer.jsx         # Footer with links
├── App.jsx                # Main component
├── main.jsx               # Entry point
└── index.css              # Tailwind CSS styles

vite.config.js            # Vite configuration
tailwind.config.js        # Tailwind CSS configuration
postcss.config.js         # PostCSS configuration
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The site will be available at \`http://localhost:5173/\`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This generates an optimized build in the \`dist/\` folder.

### Preview Build

\`\`\`bash
npm run preview
\`\`\`

## Technology Stack

- **Vite** - Next generation frontend build tool
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations

## Customization Guide

### Colors
Edit \`tailwind.config.js\` to customize the color palette. The project includes a \`dark\` color scale that can be extended.

### Components
Each component in \`src/components/\` is self-contained and can be easily modified:
- \`Header.jsx\` - Change navigation links and branding
- \`Hero.jsx\` - Update headline, description, and CTA buttons
- \`Features.jsx\` - Modify feature cards (edit the \`features\` array)
- \`Footer.jsx\` - Update footer links and social media

### Styles
- Global styles and custom components are in \`src/index.css\`
- Use Tailwind CSS utility classes in your JSX
- Define custom classes in the \`@layer components\` section of \`index.css\`

## Deployment to GitHub Pages

### Automatic Deployment with GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically:
1. Builds the project with `npm run build`
2. Deploys to GitHub Pages from the `dist/` folder

**Setup:**

1. Go to your repository Settings → Pages
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch and **/dist** folder
4. Click Save

That's it! Every time you push to `main`, GitHub Actions will:
- Install dependencies
- Build the project (`npm run build`)
- Deploy the `dist/` folder to GitHub Pages automatically

Your site will be live at: `https://noiseandwaves.github.io`

### Manual Deployment (Alternative)

If you prefer to build locally and push:

```bash
# Build the project
npm run build

# The dist/ folder is now ready to deploy
# Commit and push
git add dist/
git commit -m "Build for production"
git push origin main
```

Then configure GitHub Pages as described above to serve from the `dist/` folder.

## Troubleshooting

### MIME Type Error: "Expected a JavaScript-or-Wasm module script"

**Problem:** You see this error in the browser console when visiting the deployed site.

**Cause:** GitHub Pages is trying to serve JSX files directly instead of compiled JavaScript.

**Solution:** This is solved by:
1. Running `npm run build` to compile React/JSX to plain JavaScript
2. Setting GitHub Pages to serve from the `dist/` folder (not the repository root)
3. The GitHub Actions workflow does this automatically

Make sure:
- ✅ The workflow file exists: `.github/workflows/deploy.yml`
- ✅ GitHub Pages Source is set to "Deploy from a branch" with `/dist` folder
- ✅ You've pushed changes to `main` branch

### Site showing 404 errors on refresh

**Cause:** GitHub Pages treats every URL as a separate file request.

**Solution:** We've included a `public/404.html` file that redirects back to `index.html`. This handles all routes correctly.

## Next Steps


- [ ] Add more sections (team, testimonials, blog)
- [ ] Create product showcase pages
- [ ] Add contact form
- [ ] Implement dark mode toggle
- [ ] Add animations and transitions
- [ ] Setup analytics
- [ ] Create blog section

## License

MIT
