# Use an official Node.js image for building the React app
FROM node:16 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Build your React app
RUN npm run build

# Use an official NGINX image as the final image
FROM nginx:latest

# Remove the default NGINX index file
RUN rm /usr/share/nginx/html/index.html

# Copy the built React app from the previous build stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80
