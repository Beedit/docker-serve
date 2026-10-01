# Docker Serve

Simple docker container that clones a repo at runtime and serves it. That's all it does.

### Running with docker run
```docker run -d -p HOST_PORT:8800 --env GIT_URL="put your git url here" ghcr.io/beedit/docker-serve:VERSION```

### Running with docker compose
```yaml
services:
  serve:
    image: ghcr.io/beedit/docker-serve:latest
    ports:
      - "HOST_PORT:8800"
    environment:
      GIT_URL: "Put your git URL here."
```
