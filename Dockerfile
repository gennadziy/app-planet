# stage 1
FROM node:13.7.0
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /dist/app-planet /usr/share/nginx/html
