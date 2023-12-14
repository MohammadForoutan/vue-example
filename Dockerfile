# Vuejs
FROM node:20.10-alpine3.18 AS build
# change dir
WORKDIR /app
# copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . .
# build
RUN npm run build

# Nginx
FROM nginx:1.24-alpine AS prod-stage

COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

