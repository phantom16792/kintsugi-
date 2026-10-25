# Kintsugi Frontend Demo

Simple static frontend for the Kintsugi FastAPI backend.

## Run

Open `index.html` in a browser or serve statically:

```bash
cd kintsugi-frontend
python3 -m http.server 3000
```

Then open http://localhost:3000

Backend must be running on http://localhost:8000
```bash
cd ../kintsugi-backend
uvicorn app.main:app --reload
```

The demo shows health check and request shape. Real features require Supabase JWT auth.
