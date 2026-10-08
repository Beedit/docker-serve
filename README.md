# Docker Serve

Simple docker container that clones a git repo at runtime and serves it. That's all it does.

## Table of Contents:
- [Docker Serve](#docker-serve)
  - [Table of Contents:](#table-of-contents)
  - [Environment Variables.](#environment-variables)
  - [Running with `docker run`](#running-with-docker-run)
  - [Running with Docker Compose](#running-with-docker-compose)
## Environment Variables.
- `GIT_URL`: Required. The URL of the git repository. Omit `http(s)://`.
- `LOCATION`: Optional. Determines the location files will be served at.
  - The default is `static` leading to files being hosted at `http(s)://example.com/static`
- `USER`: Optional. The username of the repository
- `PASSWORD`: Optional. The password of the user.
  - Please note that the password is likely a Personal Access Token (PAT)
  - Github's PAT settings can be found at https://github.com/settings/personal-access-tokens
  - Please do not use your actual password and limit the PAT to as few permissions as possible

## Running with `docker run`
```sh
docker run -d -p HOST_PORT:8800 \
    -e GIT_URL="put your git URL here" \
    -e LOCATION="Optional. Where to serve files" \
    -e USER="Optional username" \
    -e PASSWORD="Optional password. Please see note above on passwords." \
    ghcr.io/beedit/docker-serve:VERSION
```

## Running with Docker Compose
```yaml
services:
  serve:
    image: ghcr.io/beedit/docker-serve:latest
    ports:
      - "HOST_PORT:8800"
    environment:
      GIT_URL: "Put your git URL here."
      # OPTIONAL
      # Please see note above on passwords.
      USER: "Your username for private git repos"
      PASSWORD: "Your password for private git repos"
      LOCATION: "Where to serve files"
```
