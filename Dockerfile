FROM node:latest as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

FROM nginx
WORKDIR /app
COPY --from=build /app/build /app/build
COPY chanhu.io.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
