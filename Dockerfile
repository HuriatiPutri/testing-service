#setup node js
FROM node:18-alpine as build

#dependencies and build
WORKDIR /app
COPY package*.json ./
RUN npm install

#copy source code
COPY . .

#build
EXPOSE 3003

CMD ["node", "index.js"]