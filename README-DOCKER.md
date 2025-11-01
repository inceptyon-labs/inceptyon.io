# Docker Quick Start Guide

## Prerequisites

- Docker installed on your Unraid server
- SSH access to Unraid
- Port 8080 available (or choose a different port)

## Deployment Steps for Unraid

### Step 1: Copy Project to Unraid

```bash
# SSH into your Unraid server
ssh root@your-unraid-ip

# Create project directory
mkdir -p /mnt/user/appdata/inceptyon-web
cd /mnt/user/appdata/inceptyon-web

# Copy all project files here (use SCP, rsync, or file sharing)
```

### Step 2: Build and Run

```bash
# Build the Docker image
docker-compose up -d --build

# Or use standard Docker commands
docker build -t inceptyon-labs-web .
docker run -d --name inceptyon-labs-website -p 8080:80 --restart unless-stopped inceptyon-labs-web
```

### Step 3: Access Your Website

Open your browser and navigate to:
- `http://your-unraid-ip:8080`

## Container Management

```bash
# View logs
docker-compose logs -f

# Stop container
docker-compose down

# Restart container
docker-compose restart

# Update after code changes
docker-compose up -d --build
```

## Changing the Port

Edit `docker-compose.yml` and change:

```yaml
ports:
  - "8080:80"  # Change 8080 to your desired port
```

## Health Check

Visit: `http://your-unraid-ip:8080/health`

Should return: `healthy`

## Troubleshooting

**Container won't start:**
```bash
docker-compose logs
```

**Port already in use:**
```bash
# Change port in docker-compose.yml
# Or stop conflicting container
docker ps
docker stop <container-name>
```

**Can't access website:**
1. Check container is running: `docker ps`
2. Check Unraid firewall settings
3. Verify port mapping: `docker port inceptyon-labs-website`

## Full Documentation

For complete deployment guide, reverse proxy setup, and advanced configuration:
- See `DOCKER-DEPLOYMENT.md`
