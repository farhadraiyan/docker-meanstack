# Create image based on the official Node 10 image from dockerhub
FROM node:8.17.0-alpine3.9

# Create a directory where our app will be placed
# RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/ng-client

# Copy dependency definitions
COPY package*.json ./

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]