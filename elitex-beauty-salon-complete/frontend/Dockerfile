FROM node:18-alpine as build
WORKDIR /app

# install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent

# copy sources and build
COPY . .
RUN npm run build -- --configuration production

FROM nginx:stable-alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
