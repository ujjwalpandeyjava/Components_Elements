# Use an official Node.js runtime as the base image
FROM node:20.11.1-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Remove the source code files
RUN rm -rf src public

# Change directory to the build directory
WORKDIR /app/build

# Expose the port your app runs on
EXPOSE 3003

# Command to run your app -- the -p {port}, port has to be exactly same as exposed port.
CMD ["npx", "serve", "-s", "-p", "3003", "."]