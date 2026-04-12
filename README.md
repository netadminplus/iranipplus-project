# ایران آی‌پی پلاس — Iranipplus.com

Production-ready monorepo for **iranipplus.com** — Iran-based IP service for Iranian expats.

## Stack

| Layer       | Technology          |
|-------------|---------------------|
| Frontend    | Next.js 14 (App Router, TypeScript, Tailwind CSS) |
| CMS / Admin | Payload CMS v3      |
| Database    | PostgreSQL 16       |
| Proxy       | Nginx 1.25 (Alpine) |
| Runtime     | Docker + Compose    |

---

## Project Structure

```
iranipplus-project/
├── docker-compose.yml          # Orchestrates all 5 services
├── .env.example                # Environment variable template
├── .gitignore
│
├── frontend/                   # Next.js 14 application
│   ├── Dockerfile              # Multi-stage: deps → builder → runner
│   ├── package.json
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── src/
│       └── app/
│           ├── layout.tsx      # Root layout — RTL, Farsi font, metadata
│           ├── globals.css     # Tailwind + design tokens
│           ├── page.tsx        # Landing page
│           ├── blog/page.tsx
│           ├── pricing/page.tsx
│           ├── faq/page.tsx
│           ├── setup/page.tsx
│           └── api/health/route.ts
│
├── cms/                        # Payload CMS v3 application
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── payload.config.ts   # Main Payload config
│       └── collections/
│           ├── Users.ts        # Admin users + auth
│           ├── BlogPosts.ts    # Farsi blog articles
│           ├── FAQItems.ts     # FAQ entries
│           ├── PricingPlans.ts # Subscription plans
│           └── Media.ts        # Image uploads
│
├── nginx/
│   ├── conf.d/
│   │   └── iranipplus.conf     # Two vhosts: main + admin
│   ├── certs/
│   │   └── README.md           # SSL cert instructions
│   └── logs/                   # Access & error logs (gitignored)
│
└── backups/                    # Nightly DB dumps (gitignored)
```

---

## Step-by-step Deployment

### Step 1 — Clone & configure environment

```bash
cd iranipplus-project
cp .env.example .env
```

Edit `.env`:
- Set strong `POSTGRES_PASSWORD`
- Generate `PAYLOAD_SECRET`: `openssl rand -hex 32`
- Set correct `SITE_URL` and `CMS_PUBLIC_URL`

### Step 2 — SSL certificates

Follow `nginx/certs/README.md`.  
For a quick local test with self-signed certs:

```bash
mkdir -p nginx/certs/iranipplus.com nginx/certs/admin.iranipplus.com

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/certs/iranipplus.com/privkey.pem \
  -out    nginx/certs/iranipplus.com/fullchain.pem \
  -subj "/CN=iranipplus.com"

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/certs/admin.iranipplus.com/privkey.pem \
  -out    nginx/certs/admin.iranipplus.com/fullchain.pem \
  -subj "/CN=admin.iranipplus.com"
```

### Step 3 — Build & start all services

```bash
docker compose up --build -d
```

Build order (enforced by `depends_on`):
1. `db` starts → health check passes
2. `cms` starts → connects to `db`
3. `frontend` starts → connects to `cms`
4. `nginx` starts → proxies both
5. `db-backup` runs nightly in background

### Step 4 — Create first Payload admin user

```bash
# Wait ~30s for CMS to initialize, then:
docker compose exec cms node -e "
  const payload = require('./dist/payload.config');
  // Or visit https://admin.iranipplus.com/admin/create-first-user
"
```

Or simply open **https://admin.iranipplus.com/admin** in your browser — Payload will prompt you to create the first admin user on first run.

### Step 5 — Verify

```bash
# All services healthy?
docker compose ps

# Logs
docker compose logs -f nginx
docker compose logs -f cms
docker compose logs -f frontend

# DB backup test
docker compose exec db-backup sh -c "pg_dump -h db -U $POSTGRES_USER $POSTGRES_DB | gzip > /backups/test.sql.gz && echo OK"
```

---

## Common Operations

```bash
# Stop all
docker compose down

# Wipe DB (destructive!)
docker compose down -v

# Rebuild single service
docker compose up --build frontend -d

# Manual DB backup
docker compose exec db-backup sh -c \
  "pg_dump -h db -U $POSTGRES_USER $POSTGRES_DB | gzip > /backups/manual_$(date +%Y%m%d).sql.gz"

# Restore from backup
docker compose exec -T db psql -U $POSTGRES_USER $POSTGRES_DB \
  < backups/iranipplus_YYYYMMDD_HHMMSS.sql
```

---

## Environment Variables Reference

| Variable           | Description                              |
|--------------------|------------------------------------------|
| `SITE_URL`         | Public URL of Next.js frontend           |
| `CMS_PUBLIC_URL`   | Public URL of Payload CMS admin          |
| `POSTGRES_USER`    | PostgreSQL username                      |
| `POSTGRES_PASSWORD`| PostgreSQL password (use strong value)   |
| `POSTGRES_DB`      | Database name                            |
| `DATABASE_URI`     | Full Postgres connection string for CMS  |
| `PAYLOAD_SECRET`   | JWT secret for Payload (min 32 chars)    |
