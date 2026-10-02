# Use alpine as a base and then work in /app.
FROM node:26 as base
WORKDIR /app

# Use port 8800
EXPOSE 8800

# Copy package.json and package-lock.json and install packages. 
COPY package.json package-lock.json /app/
RUN npm ci

# Copy the rest of the program
COPY . .

# Change the owner of the files to node and switch user to node
RUN chown -R node /app
USER node

# Build
RUN npm run build

# Run the server
CMD npm run start