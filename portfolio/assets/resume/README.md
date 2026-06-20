# Resume Folder

Place your resume PDF in this folder with the exact filename:

**`Chetana_Mali_Resume.pdf`**

---

## Steps to Add Your Resume

1. Export your resume as a PDF from Word / Google Docs / Canva
2. Rename it to: `Chetana_Mali_Resume.pdf`
3. Place it in this folder: `assets/resume/`
4. Push to GitHub — the download button in the portfolio will automatically link to this file

## To Update Your Resume Later

Simply replace this file with your updated PDF using the same filename.
Git will track the change, and GitHub Pages will serve the new version.

```bash
# After replacing the file:
git add assets/resume/Chetana_Mali_Resume.pdf
git commit -m "update: resume updated with new experience"
git push origin main
```

**Note:** Keep the filename exactly as `Chetana_Mali_Resume.pdf` — the HTML links to this exact path.
If you change the filename, also update it in `index.html` (search for `Chetana_Mali_Resume.pdf`).
