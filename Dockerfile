FROM node:lts-alpine3.14 AS builder

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install --legacy-peer-deps

RUN ng build --configuration=production

FROM nginx:alpine

COPY nginx/config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/* /usr/share/nginx/html/
