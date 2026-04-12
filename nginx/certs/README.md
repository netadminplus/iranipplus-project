# SSL Certificates

Place your certificates here in the following structure:

```
nginx/certs/
├── iranipplus.com/
│   ├── fullchain.pem
│   └── privkey.pem
└── admin.iranipplus.com/
    ├── fullchain.pem
    └── privkey.pem
```

## Using Let's Encrypt (Certbot)

```bash
# Install certbot on the host
certbot certonly --standalone \
  -d iranipplus.com -d www.iranipplus.com

certbot certonly --standalone \
  -d admin.iranipplus.com

# Copy to project
mkdir -p nginx/certs/iranipplus.com
cp /etc/letsencrypt/live/iranipplus.com/fullchain.pem nginx/certs/iranipplus.com/
cp /etc/letsencrypt/live/iranipplus.com/privkey.pem   nginx/certs/iranipplus.com/

mkdir -p nginx/certs/admin.iranipplus.com
cp /etc/letsencrypt/live/admin.iranipplus.com/fullchain.pem nginx/certs/admin.iranipplus.com/
cp /etc/letsencrypt/live/admin.iranipplus.com/privkey.pem   nginx/certs/admin.iranipplus.com/
```

## Self-signed (for local dev / testing)

```bash
mkdir -p nginx/certs/iranipplus.com
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/certs/iranipplus.com/privkey.pem \
  -out    nginx/certs/iranipplus.com/fullchain.pem \
  -subj "/CN=iranipplus.com"

mkdir -p nginx/certs/admin.iranipplus.com
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout nginx/certs/admin.iranipplus.com/privkey.pem \
  -out    nginx/certs/admin.iranipplus.com/fullchain.pem \
  -subj "/CN=admin.iranipplus.com"
```
