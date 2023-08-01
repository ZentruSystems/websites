FROM node:16-alpine3.16

WORKDIR /usr/src/betta-website

COPY package*.json ./

COPY yarn.lock ./
RUN yarn

COPY ./*.js .

COPY ./static-files ./static-files

ENV NODE_ENV production

# USER node

EXPOSE 80

CMD ["node", "server.js"]