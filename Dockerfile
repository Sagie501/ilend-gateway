FROM node:latest

WORKDIR /home/cs806/ilend/ilend-gateway

COPY * ./

RUN npm install

RUN npm run build

WORKDIR /home/cs806/ilend/ilend-gateway/dist

ENV NODE_ENV prod

EXPOSE 443
CMD [ "node", "index.js" ]
