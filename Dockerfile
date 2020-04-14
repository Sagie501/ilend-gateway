FROM node:12

# Create app directory
WORKDIR /home/cs806/ilend/ilend-gateway

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
#COPY . .

RUN npm run build

RUN ls

WORKDIR /home/cs806/ilend/ilend-gateway/dist

RUN ls

EXPOSE 80
CMD [ "node", "index.js" ]
