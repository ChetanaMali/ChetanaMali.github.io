# 🚀 Chetana Mali — Cloud & DevOps Engineer Portfolio

> A professional portfolio website built for a Cloud & DevOps Engineer fresher.
> **Live at:** `https://chetanamali.github.io` *(update with your actual URL)*

---

## 📋 Table of Contents

- [About This Project](#about-this-project)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [How to Customize](#how-to-customize)
- [CI/CD Pipeline Explanation](#cicd-pipeline-explanation)
- [Interview Explanation](#interview-explanation)

---

## About This Project

This is a **static portfolio website** designed specifically for a Cloud & DevOps profile. Key features:

- ✅ Dark navy/cyan theme (inspired by DevOps monitoring dashboards)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ ATS-friendly — recruiter ready
- ✅ Automated deployment via GitHub Actions
- ✅ Zero dependencies — pure HTML, CSS, JavaScript
- ✅ Fast load time (no framework overhead)

**Why no React/Vue?**
For a portfolio hosted on GitHub Pages, plain HTML/CSS/JS is optimal:
- Instant deploy with no build step
- Faster page load (no JS bundle overhead)
- Zero configuration errors
- Easier to maintain and explain in interviews

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure and content |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Interactivity, scroll animations, typed text |
| GitHub Actions | CI/CD pipeline for auto-deployment |
| GitHub Pages | Free static site hosting |
| Font Awesome 6 | Icons |
| Google Fonts | Space Grotesk + Inter + JetBrains Mono |

---

## Folder Structure

```
portfolio/
├── index.html                    ← Main HTML file (entire site)
├── README.md                     ← This file
├── assets/
│   ├── css/
│   │   └── style.css             ← All styles (CSS variables, responsive)
│   ├── js/
│   │   └── main.js               ← All interactivity (typed text, animations)
│   ├── images/
│   │   └── profile.jpg           ← Add your profile photo here
│   └── resume/
│       └── Chetana_Mali_Resume.pdf ← Add your resume PDF here
└── .github/
    └── workflows/
        └── deploy.yml            ← GitHub Actions CI/CD pipeline
```

---

## Setup Instructions

### Prerequisites
- A GitHub account
- Git installed on your computer
- A text editor (VS Code recommended)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it exactly: `yourusername.github.io`
   - Example: `chetanamali.github.io`
   - This special name auto-enables GitHub Pages at `https://chetanamali.github.io`
3. Set to **Public**
4. Click **Create repository**

### Step 2: Clone and Set Up Locally

```bash
# Clone your new repository
git clone https://github.com/yourusername/yourusername.github.io.git

# Enter the directory
cd yourusername.github.io

# Copy all portfolio files into this directory
# (or just move the portfolio folder contents here)
```

### Step 3: Add Your Personal Files

1. **Add your resume:**
   ```
   Copy your resume PDF to: assets/resume/Chetana_Mali_Resume.pdf
   ```

2. **Update your info in `index.html`:**
   - Replace email: `chetana.mali@email.com` → your actual email
   - Replace LinkedIn URL
   - Replace GitHub URL
   - Fill in Project 2 and Project 3 details
   - Add any internship experience

### Step 4: Push to GitHub

```bash
git add .
git commit -m "feat: initial portfolio setup"
git push origin main
```

---

## Deployment to GitHub Pages

### Option A: Using GitHub Actions (Recommended — Already Configured)

The `.github/workflows/deploy.yml` file automates deployment. Once you push to `main`:

1. GitHub Actions triggers automatically
2. Your site deploys to GitHub Pages within 1–2 minutes
3. Visit: `https://yourusername.github.io`

**To enable GitHub Actions deployment:**
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Done! Every push to `main` auto-deploys.

### Option B: Manual GitHub Pages (Simpler)

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**
5. Your site goes live at: `https://yourusername.github.io`

### Custom Domain (Optional)

To use `www.chetanamali.com` instead:
1. Buy a domain from GoDaddy, Namecheap, etc.
2. In your domain DNS settings, add a CNAME record: `www → yourusername.github.io`
3. In GitHub repo → Settings → Pages → Custom domain → Enter your domain
4. GitHub auto-provisions HTTPS via Let's Encrypt

---

## How to Customize

### Update Personal Info
Open `index.html` and use Ctrl+F to find and replace:
- `chetana.mali@email.com` → your email
- `chetana-mali` (in LinkedIn URL) → your LinkedIn
- `ChetanaMali` (in GitHub URL) → your GitHub username

### Add a Project
Find the project card template (Project 2 or 3) in `index.html` and fill in:
```html
<h3 class="project-title">Your Project Title</h3>
<p class="project-desc">What it does...</p>
<!-- Fill detail blocks, tech tags, and links -->
```

### Change Colors
Open `assets/css/style.css`. At the top, find `:root {}` and modify:
```css
--cyan:  #00D4FF;   /* Primary accent — change to any color */
--amber: #F5A623;   /* Secondary accent */
--bg:    #0A0F1E;   /* Background */
```

### Update Resume
Simply replace `assets/resume/Chetana_Mali_Resume.pdf` with your updated PDF. The download button automatically picks up the new file.

---

## CI/CD Pipeline Explanation

```
┌─────────────────────────────────────────────────────┐
│              CI/CD PIPELINE FLOW                    │
│                                                     │
│  You push code                                      │
│      │                                              │
│      ▼                                              │
│  GitHub detects push to 'main' branch               │
│      │                                              │
│      ▼                                              │
│  GitHub Actions triggers (.github/workflows/)       │
│      │                                              │
│      ▼                                              │
│  Job: deploy (runs on ubuntu-latest)               │
│  ├── Checkout code (actions/checkout@v4)           │
│  ├── Configure Pages                               │
│  ├── Upload artifact (your site files)             │
│  └── Deploy to GitHub Pages                        │
│              │                                      │
│              ▼                                      │
│  Live at: https://yourusername.github.io            │
│  (within ~60 seconds of your push)                 │
└─────────────────────────────────────────────────────┘
```

**This is a real CI/CD pipeline** — the same concept used by companies with Jenkins, GitLab CI, and GitHub Actions. You can explain this confidently in interviews.

---

## Interview Explanation

### "Tell me about this portfolio project"

> "I built my portfolio as a static website using HTML, CSS, and JavaScript — deliberately choosing this stack over React because GitHub Pages doesn't require a build step, making deployment simpler and load times faster. I set up a CI/CD pipeline using GitHub Actions that auto-deploys on every push to main. The pipeline checks out code, configures the Pages environment, uploads the artifact, and deploys — all in under 60 seconds. This mirrors enterprise CI/CD workflows but at a smaller scale."

### "What is GitHub Pages?"

> "GitHub Pages is a free static site hosting service from GitHub. It reads from a repository and serves the files as a website. It supports custom domains, auto-provisions HTTPS via Let's Encrypt, and integrates natively with GitHub Actions for automated deployment."

### "Why not use React for this?"

> "React is great for SPAs with complex state, but for a portfolio — which is primarily static content — it adds unnecessary complexity: a build step, node_modules, potential deployment configuration issues. The 'right tool for the right job' principle."

---

## 📞 Contact

**Chetana Mali** | Cloud & DevOps Engineer
- Email: chetana.mali@email.com
- LinkedIn: linkedin.com/in/chetana-mali
- GitHub: github.com/ChetanaMali

---

*Built with HTML · CSS · JS · Deployed on GitHub Pages · Auto-deployed via GitHub Actions CI/CD*
