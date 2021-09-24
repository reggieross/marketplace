#---- image for build (including dev dependencies) ----
FROM node:12.10.0 as build

#create app directory
WORKDIR /app

#install app dependencies (wildard to get package.json and package-lock.json)
COPY package*.json .npmrc tsconfig.json ./
RUN npm install

#move source code into the image
COPY src ./src/

#build it
RUN npm run build

#---- image for installing production dependencies ----
FROM node:12.10.0 as dependencies

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/.npmrc ./
RUN npm ci


#---- image for running the service ----
FROM node:12.10.0-alpine

#copy over only what we need
COPY --from=build /app/package.json ./
COPY --from=dependencies /app/node_modules ./node_modules
RUN mkdir -p /app/build
COPY --from=build /app/build ./build
COPY --from=build /app/src ./src

EXPOSE 5000

CMD ["npm", "run", "start"]