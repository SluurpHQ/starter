# A Sluurp app, ready to deploy

A starting point for an app on [Sluurp](https://sluurp.org): a whole backend in one binary. Use this template, change `app/`, and deploy it with one of the buttons below. Sluurp is in alpha; see [what's new](https://sluurp.org/docs/whats-new).

Free for non-commercial use. For commercial use, add a [licence](https://sluurp.org/business) as `SLUURP_LICENSE` wherever it runs.

## Run it here

```sh
curl -fsSL https://raw.githubusercontent.com/SluurpHQ/releases/main/install.sh | sh
sluurp serve --public app
```

Or with Docker:

```sh
docker build -t my-app . && docker run -p 8090:8090 -v my-app-data:/data my-app
```

Open http://localhost:8090, and the admin at http://localhost:8090/_/.

## Deploy

Every option keeps your data on a disk of its own, so it survives a redeploy.

### Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/SluurpHQ/starter)

It uses `render.yaml`: a web service from the `Dockerfile`, with a 1 GB disk at `/data`.

### Railway

Create a project from this repository. Railway builds it from `railway.json`. Then add a volume mounted at `/data`, in the service's settings.

### Fly.io

```sh
fly launch --copy-config --no-deploy
fly volumes create data --size 1
fly deploy
```

### DigitalOcean, Hetzner, or any server

Create an Ubuntu 24.04 or Debian 12 server, and paste [cloud-init.yaml](https://github.com/SluurpHQ/releases/blob/main/deploy/cloud-init.yaml) where it asks for user data. Fill in its four lines first: your domain, the first admin's email and password, and a licence for commercial use.

- **DigitalOcean**: Create Droplet, Advanced options, Add initialization scripts.
- **Hetzner Cloud**: Create server, Cloud config.

Sluurp is installed as a service, behind Caddy, with HTTPS once your domain points at the server. Put your app in `/srv/sluurp/app`, for example with `rsync -a app/ root@your-server:/srv/sluurp/app/`, then run `systemctl restart sluurp`.

### Docker, anywhere

```sh
docker run -d -p 8090:8090 -v sluurp-data:/data -v "$PWD/app:/app" -e SLUURP_LICENSE=… ghcr.io/sluurphq/sluurp
```
