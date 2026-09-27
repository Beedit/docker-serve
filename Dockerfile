# Use alpine as a base and then work in /app.
FROM node:26-alpine3.23 as base
WORKDIR /app

COPY . .

ENV GIT_URL "https://github.com/example/test"
RUN mkdir /files

RUN apk add git
# Use port 8800
EXPOSE 8800
# chown the files that user node needs to have access to and switch user to node
RUN chown -R node /app
RUN chown -R node /files
USER node

# Clean install and build
RUN npm ci

# run the server
CMD git clone $GIT_URL /files && \
    npm run start