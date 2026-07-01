# HELIOS – Space Weather Forecast Dashboard

> ISRO Hackathon PS-14 | Heliophysics-Embedded, Longitude-Invariant Operational Sequence Forecaster

## Quick Start (Local)

```bash
# 1. Install dependencies
cd frontend && npm install
cd ../backend && npm install

# 2. Run in development mode (two terminals)
# Terminal 1 – Backend
cd backend && npm run dev

# Terminal 2 – Frontend
cd frontend && npm run dev
```

Frontend: http://localhost:5173  
Backend API: http://localhost:3001

## Production Build & Deploy

```bash
# Build frontend (output → frontend/dist/)
cd frontend && npm run build

# Build backend (output → backend/dist/)
cd backend && npm run build

# Start production server (serves both frontend + API on port 3001)
cd backend && node dist/index.js
```

Open http://localhost:3001 — the backend serves both the API and the frontend.

## Deploy to Render / Railway / Heroku

| Setting          | Value                                |
|------------------|--------------------------------------|
| Build Command    | `cd frontend && npm install && npm run build && cd ../backend && npm install && npm run build` |
| Start Command    | `cd backend && node dist/index.js`   |
| Root Directory   | `Dashboard/`                         |
| Port             | `3001` (auto-detected via `PORT` env)|

## Project Structure

```
Dashboard/
├── frontend/          # React + Vite + Tailwind
│   ├── src/
│   ├── dist/          # Production build (after npm run build)
│   └── package.json
├── backend/           # Express + TypeScript
│   ├── src/
│   ├── dist/          # Compiled JS (after npm run build)
│   └── package.json
├── package.json       # Root scripts
├── Procfile           # PaaS deployment
└── README.md
```

## Environment Variables

| Variable | Default | Description              |
|----------|---------|--------------------------|
| `PORT`   | `3001`  | Server port              |

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 3, Recharts, Lucide Icons
- **Backend**: Node.js, Express 4, TypeScript
- **Build**: Vite 8, tsc
