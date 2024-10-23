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
CMD ["npm", "start"]
# Stage 2: Setup Nginx and serve the static files
