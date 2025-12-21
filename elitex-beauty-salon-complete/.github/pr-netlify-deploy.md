# PR: Netlify Configuration & Build Scripts

## Summary
Configure Netlify deployment and add convenience npm scripts to build and deploy frontend/backend from repo root.

## Changes Made

### 1. Root `netlify.toml`
- Specifies build base in `frontend` directory
- Build command: `npm ci && npm run build`
- Publish directory: `frontend/dist/elitex-frontend`
- Sets Node 20
- Includes SPA redirect rule (`/* → /index.html`)

### 2. Frontend `netlify.toml` (Fixed)
- Updated publish path from `dist/elitex-frontend/browser` to `dist/elitex-frontend`

### 3. Root `package.json` (Added Scripts)
```json
{
  "scripts": {
    "build:frontend": "cd frontend && npm ci --no-audit --no-fund && npm run build",
    "build:backend": "cd backend && mvn -DskipTests package",
    "build:all": "npm run build:frontend && npm run build:backend",
    "netlify:deploy": "npx netlify-cli deploy --dir=frontend/dist/elitex-frontend --prod"
  }
}
```

## Testing
✅ All builds run successfully locally:
- Frontend: `npm run build:frontend` → produces `frontend/dist/elitex-frontend`
- Backend: `npm run build:backend` → produces `backend/target/salon-1.0.0.jar`
- Combined: `npm run build:all` → both pass

## Deployment Steps
1. Merge to `main`
2. (Optional) Install Netlify CLI: `npm i -g netlify-cli`
3. Deploy frontend: `npm run netlify:deploy` (requires Netlify token & site ID in env)
4. Or: Enable auto-deploy by connecting GitHub repo to Netlify dashboard (recommended)

## Branch
- `netlify/configure` → ready to merge to `main`

---
**Created:** 2025-12-21  
**Build Status:** ✅ Passed  
**Ready for Merge:** Yes
