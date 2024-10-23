# Sử dụng image chính thức của Node.js
FROM node:18

# Set thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy các file cần thiết cho quá trình cài đặt
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./

# Xóa cache và cài đặt dependencies
RUN npm cache clean --force && npm install

# Copy toàn bộ mã nguồn vào container
COPY . ./

# Build dự án Next.js
RUN npm run build

# Expose port mà Next.js sẽ chạy
EXPOSE 3000

# Lệnh chạy Next.js ở chế độ production
CMD ["npm", "run", "start"]
