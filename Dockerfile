# Stage 1 - the build process
FROM node:12-alpine as build-deps
WORKDIR /usr/src/app
ARG NPM_TOKEN
COPY package*.json .npmrc babel.config.js tsconfig.json ./
RUN npm install
RUN rm -f .npmrc
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]