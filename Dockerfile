FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . . 

EXPOSE 5173

CMD ["yarn","run","dev","--host","0.0.0.0"]