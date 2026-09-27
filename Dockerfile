# Use alpine as a base and then work in /app.
FROM node:current-alpine as base
WORKDIR /app

COPY . .

# Use port 8800
EXPOSE 8800
# chown the files that user node needs to have access to and switch user to node
RUN chown -R node /app
USER node

# Clean install and build
RUN npm ci

# run the server
CMD ["npm", "run", "start"]