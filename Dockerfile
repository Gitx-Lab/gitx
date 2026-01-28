FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install && npm run build

ENTRYPOINT ["node", "dist/index.js"]
