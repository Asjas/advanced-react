FROM node:16-alpine

EXPOSE 8080

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --production && npm cache clear --force
COPY --chown=node:node . .

RUN npm run build

RUN npm run seed-data

CMD ["./node_modules/.bin/keystone-next", "start"]
