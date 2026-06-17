# Résumé source

`resume.html` is the source for `public/KobeMichael_CV.pdf` (single-page, US Letter,
styled to match the v4 site: Outfit + JetBrains Mono, cobalt accent).

## Regenerate

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf=public/KobeMichael_CV.pdf \
  "file://$PWD/resume/resume.html"
```

Keep total content height ≤ 1056px (11in @ 96dpi) so it stays one page.
`KobeMichael_CV.previous.pdf` is the prior (2024) version.
