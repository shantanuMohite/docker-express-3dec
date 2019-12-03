FROM  node:alpine

WORKDIR /app

COPY . .

EXPOSE 9786

CMD node server.js