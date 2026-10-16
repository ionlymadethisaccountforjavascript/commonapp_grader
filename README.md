# Common App Personal Statement Grader (VSPICE & Admissions Rubric)

A high-performance, lightweight web application built with **Svelte 5** and **SvelteKit** (zero React bloat) designed to grade American college admissions personal statements against competitive evaluation rubrics, including **Authenticity**, **Effectiveness of Delivery**, and the **6-pillar VSPICE criteria** (Vulnerability, Selflessness, Perseverance, Initiative, Curiosity, Expression).

Designed for seamless deployment on **Vercel** with `@sveltejs/adapter-vercel`.

---

## 🚀 Key Features

- **Common App Prompt Dropdown**: Instant selection across all 7 official Common Application essay prompts with tailored admissions insight for each.
- **VSPICE 6-Pillar Analysis**:
  - **V**ulnerability: Evaluates honest reflection of struggles/doubts vs. robotic hero bragging.
  - **S**elflessness: Detects empathy, mentoring, and community consciousness.
  - **P**erseverance: Analyzes genuine adaptability, resilience, and problem resolution.
  - **I**nitiative: Checks for independent action taken without adult direction.
  - **C**uriosity: Identifies unprompted intellectual rabbit holes and passion for learning.
  - **E**xpression: Measures authorial voice, sensory details, and vivid metaphors.
  - **Target Benchmark**: Flags whether the essay achieves **3 or more active pillars** (the competitive standard used by top admissions strategists like ElevatEd).
- **Authenticity Scoring**: Detects sensory anchors, introspective honesty, and penalizes cliché phrases ("championship game", "hard work pays off", etc.).
- **Effectiveness of Delivery**: Analyzes sentence length variation, cadence rhythm, hook strength, and paragraph pacing.
- **Real-Time Word Count Guard**: Common App hard limit checks (250–650 words) with real-time indicators.
- **Constructive Feedback Engine**: Categorized actionable tips (Critical, Cautions, Strengths, and Strategic Admissions Advice).
- **Admissions Rubric Guide**: Built-in reference explaining the 2:1 resolution rule, VSPICE distribution, and supplemental essay synergy.

---

## 🛠️ Tech Stack

- **Framework**: [Svelte 5](https://svelte.dev/) + [SvelteKit](https://kit.svelte.dev/) (runes mode, ultra-lightweight client bundle)
- **Deployment Adapter**: `@sveltejs/adapter-vercel`
- **Build Tool**: [Vite](https://vitejs.dev/)

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```

---

## ☁️ Deploy to Vercel

This repository is pre-configured with `@sveltejs/adapter-vercel`.

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects SvelteKit and applies the build settings (`npm run build`).
4. Click **Deploy**!
