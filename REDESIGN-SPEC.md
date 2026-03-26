# REDESIGN SPEC — ADNOC Site Assessment Dashboard v2

## Overview
The index.html has been redesigned. UAE (uae.html) and Morocco (morocco.html) pages need matching updates.
A shared design-system.css has been added with all tokens and component styles.

## Design Philosophy
OLD: "dark gaming dashboard" — animated grids, glowing borders, pulsing dots, bright colored numbers, emoji flags.
NEW: "executive data tool" — restrained, typographically sharp, no decorative animation.

## Core Rules
1. Color is functional only — numbers/text are white or gray. Color ONLY on small status dots, thin bars, map markers.
2. No gratuitous animation — remove pulsing dots, glow effects, shimmer, animated grids, radial glows.
3. Monospaced numbers — all data values use JetBrains Mono via var(--font-mono).
4. Quiet hierarchy — weight and size for hierarchy, not color. Eyebrows: uppercase 10-11px tertiary. Titles: 600-700 weight.
5. 1px borders not box-shadows — cards use border: 1px solid var(--border-primary).

## Steps for Each Country Page (uae.html, morocco.html)

### 1. Add stylesheet link
In <head> before <style>: <link rel="stylesheet" href="design-system.css">

### 2. Remove old font import
Delete: @import url('...Inter...')
Fonts now come from design-system.css (DM Sans + JetBrains Mono).

### 3. Replace CSS variables
Delete entire :root block. Use design-system.css tokens instead.
Key mappings:
- --bg-primary/--bg-secondary -> var(--bg-base)
- --bg-card/--bg-card-elevated -> var(--bg-elevated)
- --bg-hover/--bg-active -> var(--bg-surface)/var(--bg-surface-hover)
- --border -> var(--border-primary)
- --text-primary -> var(--text-primary)
- --text-secondary -> var(--text-secondary)
- --text-muted -> var(--text-tertiary)
- --yellow -> var(--amber) (RENAMED)
- --y1-highlight -> var(--purple)
- --glass-bg -> var(--bg-overlay)
- font-family: 'Inter'... -> font-family: var(--font-sans)

### 4. Remove decorative elements
DELETE from HTML and CSS:
- .bg-grid div and styles
- .bg-glow div and styles
- body::before noise texture overlay
- @keyframes pulse-dot and ALL pulsing animations
- ALL box-shadow glow effects on status dots (box-shadow: 0 0 Xpx rgba(...))
- ALL animation: properties on non-functional elements

### 5. Restyle top nav
Replace current .top-nav with ds-nav pattern:
```html
<nav class="ds-nav">
    <div class="ds-nav-left">
        <a href="index.html" class="ds-back-link">
            <svg viewBox="0 0 12 12" fill="none"><path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Portfolio
        </a>
        <span class="ds-nav-title">[Country Name]</span>
        <span class="ds-nav-subtitle">[Partner] · [N] sites</span>
    </div>
    <div class="ds-nav-right">
        <!-- Keep KPI pills, use ds-nav-kpi class, remove colored shadows -->
    </div>
</nav>
```

### 6. Restyle caveat banner
Replace blue gradient with flat ds-caveat class. Remove ::before overlay.

### 7. Restyle sidebar
- Use ds-sidebar class pattern
- Stats row: ds-stats-row/ds-stat-badge — numbers in mono, labels in tertiary, no colored backgrounds
- Search: ds-search-input — dark bg, subtle border
- Site list: ds-site-item — active state = left accent border, scores in mono
- Remove gradient overlays and glow effects

### 8. Restyle map overlays
- Popups: ds-popup pattern — dark elevated bg, 1px border, no heavy shadows
- Legend: ds-map-legend — glass overlay with blur
- Toggles: ds-toggle-btn — border buttons, subtle hover
- Markers: simple circles, no pulsing/glowing, no drop-shadow, 8-10px radius

### 9. Typography
All font-family references -> var(--font-sans)
All numeric data -> font-family: var(--font-mono)

## Verification Checklist
1. Both pages import design-system.css
2. No references to Inter font
3. No duplicate :root variable definitions
4. No decorative @keyframes
5. No colored box-shadow glows
6. All numbers use var(--font-mono)
7. Status colors only on small dots/bars/markers, NOT on large text
8. Overlays use backdrop-filter: blur() with var(--bg-overlay)
9. auth.js script tag still present
10. All Leaflet map functionality works (zoom, pan, popups, markers, competitor toggle)
