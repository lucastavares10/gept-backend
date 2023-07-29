FROM node:16

WORKDIR /usr

COPY . .

RUN npm install

RUN npm run build

EXPOSE 4000

CMD [ "node", "server.prod.js" ]


