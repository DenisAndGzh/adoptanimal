FROM node:15-alpine

WORKDIR /server-adoptanimal
COPY package.json .
RUN npm install
COPY . .
CMD npm start
