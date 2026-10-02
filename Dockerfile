# Use alpine as a base and then work in /app.
FROM node:26 as base
WORKDIR /app

# Use port 8800
EXPOSE 8800

# chown the files that user node needs to have access to and switch user to node
COPY package.json package-lock.json /app/
RUN npm ci

COPY . .

RUN chown -R node /app
USER node

# Build
RUN npm run build

# run the server
CMD npm run start