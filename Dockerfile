# Sử dụng image Node.js làm base
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào image
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Chạy ứng dụng Next.js
# CMD ["npm", "start"]
# Stage 2: Setup Nginx and serve the static files
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Next.js app from the previous stage
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom Nginx config file if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
