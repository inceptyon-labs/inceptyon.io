# Docker Deployment Guide for Unraid

This guide explains how to deploy the Inceptyon Labs website to your Unraid server using Docker.

## Quick Start

### Option 1: Using Docker Compose (Recommended for Unraid)

```bash
# Navigate to project directory
cd inceptyon-web

# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The website will be available at `http://your-unraid-ip:8080`

### Option 2: Using Docker Commands

```bash
# Build the image
docker build -t inceptyon-labs-web .

# Run the container
docker run -d \
  --name inceptyon-labs-website \
  --restart unless-stopped \
  -p 8080:80 \
  inceptyon-labs-web

# View logs
docker logs -f inceptyon-labs-website

# Stop and remove container
docker stop inceptyon-labs-website
docker rm inceptyon-labs-website
```

## Unraid-Specific Setup

### Method 1: Docker Compose Manager Plugin

1. Install the **Docker Compose Manager** plugin from Unraid Community Applications
2. Copy the `docker-compose.yml` file to `/mnt/user/appdata/compose/inceptyon-web/`
3. Copy the entire project to the same directory
4. In Unraid Docker Compose Manager:
   - Add a new compose stack
   - Point to `/mnt/user/appdata/compose/inceptyon-web/docker-compose.yml`
   - Click "Compose Up"

### Method 2: Unraid Docker Template (Manual)

1. Go to **Docker** tab in Unraid
2. Click **Add Container**
3. Configure as follows:

```
Name: InceptyonLabsWebsite
Repository: inceptyon-labs-web:latest
Network Type: Bridge
Port Mappings:
  - Container Port: 80
  - Host Port: 8080
  - Protocol: TCP
Labels:
  - com.inceptyon.description=Inceptyon Labs Website
  - com.inceptyon.version=1.0.0
```

4. First build the image on Unraid via SSH:

```bash
# SSH into Unraid
ssh root@your-unraid-ip

# Navigate to appdata
cd /mnt/user/appdata/

# Clone or copy your project
mkdir -p inceptyon-web
cd inceptyon-web
# (copy files here)

# Build the Docker image
docker build -t inceptyon-labs-web:latest .
```

5. Apply and start the container

### Method 3: Using Unraid Community Applications Template

Create a custom template at `/boot/config/plugins/dockerMan/templates-user/inceptyon-labs.xml`:

```xml
<?xml version="1.0"?>
<Container version="2">
  <Name>InceptyonLabsWebsite</Name>
  <Repository>inceptyon-labs-web:latest</Repository>
  <Registry>local</Registry>
  <Network>bridge</Network>
  <Privileged>false</Privileged>
  <Support>https://github.com/inceptyon/inceptyon-web</Support>
  <Project>https://inceptyon.io</Project>
  <Overview>Inceptyon Labs official website - A modern, responsive single-page website built with React, Vite, and Tailwind CSS.</Overview>
  <Category>Network:Web Status:Stable</Category>
  <WebUI>http://[IP]:[PORT:8080]</WebUI>
  <Icon>https://inceptyon.io/favicon.svg</Icon>
  <Config Name="WebUI Port" Target="80" Default="8080" Mode="tcp" Description="Web interface port" Type="Port" Display="always" Required="true" Mask="false">8080</Config>
  <Config Name="PUID" Target="PUID" Default="99" Mode="" Description="User ID" Type="Variable" Display="advanced" Required="false" Mask="false">99</Config>
  <Config Name="PGID" Target="PGID" Default="100" Mode="" Description="Group ID" Type="Variable" Display="advanced" Required="false" Mask="false">100</Config>
</Container>
```

## Configuration

### Environment Variables

No environment variables required for basic deployment. For advanced configurations, you can add:

```yaml
environment:
  - TZ=America/New_York  # Your timezone
  - NODE_ENV=production
```

### Port Mapping

By default, the container exposes port **80** internally and maps to port **8080** on the host.

To change the host port, modify `docker-compose.yml`:

```yaml
ports:
  - "3000:80"  # Change 3000 to your desired port
```

Or in Docker command:

```bash
docker run -p 3000:80 inceptyon-labs-web
```

### Reverse Proxy Setup (Nginx Proxy Manager / Traefik)

If you're using a reverse proxy on Unraid:

#### Nginx Proxy Manager

1. Add a new Proxy Host
2. Domain: `inceptyon.io` (or your domain)
3. Forward Hostname/IP: `your-unraid-ip`
4. Forward Port: `8080`
5. Enable "Block Common Exploits"
6. Enable SSL if using Let's Encrypt

#### Traefik Labels

Add these labels to `docker-compose.yml`:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.inceptyon.rule=Host(`inceptyon.io`)"
  - "traefik.http.routers.inceptyon.entrypoints=websecure"
  - "traefik.http.routers.inceptyon.tls.certresolver=myresolver"
  - "traefik.http.services.inceptyon.loadbalancer.server.port=80"
```

## Health Checks

The container includes built-in health checks:

```bash
# Check container health status
docker inspect --format='{{.State.Health.Status}}' inceptyon-labs-website

# View health check logs
docker inspect --format='{{range .State.Health.Log}}{{.Output}}{{end}}' inceptyon-labs-website
```

Health check endpoint: `http://your-unraid-ip:8080/health`

## Performance Optimization

### Nginx Optimization

The included `nginx.conf` already has:
- Gzip compression enabled
- Static asset caching (1 year)
- Security headers
- SPA routing fallback

### Resource Limits

Add resource limits in `docker-compose.yml`:

```yaml
services:
  inceptyon-web:
    # ... other config ...
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 256M
        reservations:
          memory: 128M
```

## Updating the Container

### Rebuild and Restart

```bash
# Pull latest code changes
git pull

# Rebuild the image
docker-compose build --no-cache

# Recreate the container
docker-compose up -d

# Or combine into one command
docker-compose up -d --build
```

### Automated Updates (Watchtower)

Install Watchtower on Unraid to automatically update containers:

```bash
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup \
  --interval 86400
```

## Monitoring

### View Logs

```bash
# Follow logs in real-time
docker-compose logs -f

# View last 100 lines
docker-compose logs --tail=100

# Filter by service
docker logs -f inceptyon-labs-website
```

### Container Stats

```bash
# Real-time stats
docker stats inceptyon-labs-website

# View resource usage
docker-compose top
```

## Troubleshooting

### Container Won't Start

```bash
# Check container logs
docker-compose logs

# Inspect container
docker inspect inceptyon-labs-website

# Verify port is not in use
netstat -tulpn | grep 8080
```

### Build Fails

```bash
# Clean build
docker-compose build --no-cache

# Remove old images
docker image prune -a

# Check disk space
df -h
```

### Website Not Accessible

1. Check container is running: `docker ps`
2. Check container health: `docker inspect --format='{{.State.Health.Status}}' inceptyon-labs-website`
3. Check Unraid firewall rules
4. Test health endpoint: `curl http://localhost:8080/health`
5. Check Nginx logs: `docker exec inceptyon-labs-website cat /var/log/nginx/error.log`

### Permission Issues

```bash
# Fix permissions on Unraid
chown -R nobody:users /mnt/user/appdata/inceptyon-web/

# Rebuild with proper permissions
docker-compose down
docker-compose up -d --build
```

## Backup and Restore

### Backup

```bash
# Save Docker image
docker save inceptyon-labs-web:latest | gzip > inceptyon-web-backup.tar.gz

# Backup source code
tar -czf inceptyon-web-source.tar.gz /mnt/user/appdata/inceptyon-web/
```

### Restore

```bash
# Load Docker image
docker load < inceptyon-web-backup.tar.gz

# Extract source code
tar -xzf inceptyon-web-source.tar.gz -C /mnt/user/appdata/
```

## Security Best Practices

1. **Run behind reverse proxy** - Use Nginx Proxy Manager or Traefik with SSL
2. **Keep containers updated** - Use Watchtower or manual updates
3. **Limit resource usage** - Set memory and CPU limits
4. **Use non-root user** - Container runs Nginx as non-root
5. **Enable firewall** - Configure Unraid firewall rules
6. **Monitor logs** - Regularly check for suspicious activity

## Custom Domain Setup

### With Cloudflare

1. Point your domain DNS to your public IP
2. Set up port forwarding (80/443) to Unraid
3. Use Nginx Proxy Manager for SSL termination
4. Configure Cloudflare proxy (orange cloud)

### With DuckDNS (Free Dynamic DNS)

```bash
# Install DuckDNS container on Unraid
docker run -d \
  --name=duckdns \
  -e PUID=99 \
  -e PGID=100 \
  -e TZ=America/New_York \
  -e SUBDOMAINS=your-subdomain \
  -e TOKEN=your-duckdns-token \
  --restart unless-stopped \
  linuxserver/duckdns
```

## Advanced Configuration

### Custom Nginx Configuration

Create a custom `nginx.conf` and mount it:

```yaml
volumes:
  - ./custom-nginx.conf:/etc/nginx/conf.d/default.conf:ro
```

### Enable HTTP/2

Modify `nginx.conf`:

```nginx
listen 80 http2;
```

### Add Custom Headers

Modify `nginx.conf` to add custom headers:

```nginx
add_header X-Custom-Header "Inceptyon Labs" always;
```

## Support

For issues or questions:
- Email: hello@inceptyon.io
- Project Repo: Check README.md for repository link
- Unraid Forums: Post in Docker Engine support

## Performance Metrics

Expected resource usage:
- **Memory**: 20-50 MB
- **CPU**: < 1% idle, 5-10% under load
- **Disk**: ~15 MB (image size)
- **Network**: Varies with traffic

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Unraid Docker Guide](https://wiki.unraid.net/Docker_Management)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Vite Production Build](https://vitejs.dev/guide/build.html)
