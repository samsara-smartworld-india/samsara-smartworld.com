# Samsara Smartworld — Property Leasing Website

Premium commercial office spaces for lease in Delhi and Gurugram by **Millennium Maritech Private Limited**.

## Properties

1. **Le Meridien Commercial Tower, New Delhi** — 7th Floor, Raisina Road, ~1,140 sq. ft. furnished office
2. **Plot 87, Sector 44, Gurugram** — Standalone building, ~25,000 sq. ft., coworking available

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (static export)
- **Contact Form:** Formspree

## Setup

```bash
npm install
npm run dev     # Development server
npm run build   # Static export to /out
```

## Deployment

The site auto-deploys via GitHub Actions on push to `main`. The workflow builds the Next.js static export and deploys to GitHub Pages.

### DNS Configuration

Add these records at your domain registrar for `samsara-smartworld.com`:

| Type  | Host | Value                              |
|-------|------|------------------------------------|
| A     | @    | 185.199.108.153                    |
| A     | @    | 185.199.109.153                    |
| A     | @    | 185.199.110.153                    |
| A     | @    | 185.199.111.153                    |
| CNAME | www  | samsara-smartworld-india.github.io |

### GitHub Pages Setup

1. Go to **Settings > Pages** in the repository
2. Set Source to **GitHub Actions**
3. Add custom domain: `samsara-smartworld.com`
4. Enable **Enforce HTTPS** after DNS propagation

## Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Actions deployment
├── public/
│   ├── CNAME                      # Custom domain
│   ├── sitemap.xml                # SEO sitemap
│   └── robots.txt                 # Search engine directives
├── src/
│   ├── app/                       # Next.js pages
│   ├── components/                # Reusable components
│   └── lib/                       # Schema markup utilities
├── emails/                        # Email campaign templates
├── marketing/                     # Classifieds, ads, WhatsApp templates
└── next.config.js                 # Static export configuration
```

## Contact

- **Abhinav Jha** — 8130292965
- **Email:** info@samsara-smartworld.com
- **Website:** [samsara-smartworld.com](https://samsara-smartworld.com)
