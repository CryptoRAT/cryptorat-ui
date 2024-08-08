# Use an official node image as the base image
FROM node:iron

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["npx", "serve", "-s", "build"]
