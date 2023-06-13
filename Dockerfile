FROM node:alpine
WORKDIR /app
EXPOSE 3000
COPY package.json package-lock.json ./
RUN npm install express
COPY . ./
CMD ["npm", "start"]s