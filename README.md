# Sriram Portfolio

Full-stack portfolio website showcasing my skills, projects, and experience as a developer.

## Live Demo

[https://portfolio-seven-henna-93.vercel.app/](https://portfolio-seven-henna-93.vercel.app/)

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Backend:** Node.js, Express
- **Deployment:** Vercel
- **Contact:** Web3Forms API

## Features

- Cyberpunk-themed UI with dark/light mode toggle
- Interactive particle background and custom cursor
- Animated orbit component with tech stack icons
- Skills progress bars with scroll-triggered animation
- Project filter by category
- Responsive timeline section
- Working contact form with email delivery
- Mobile-friendly hamburger menu
- Smooth scroll navigation

## Local Development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

## Project Structure

```
api/          Serverless functions (Vercel)
  contact.js  Contact form handler
  health.js   Health check endpoint
index.html    Main HTML
styles.css    All styles
script.js     Client-side functionality
server.js     Express server (local dev)
```

## Deployment

Auto-deploys via Vercel on push to `main` branch.
