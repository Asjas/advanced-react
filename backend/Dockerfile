FROM node:16-lts

EXPOSE 8080

ARG FRONTEND_URL
ARG COOKIE_SECRET
ARG DATABASE_URL
ARG CLOUDINARY_CLOUD_NAME
ARG CLOUDINARY_KEY
ARG CLOUDINARY_SECRET
ARG STRIPE_SECRET
ARG MAIL_HOST
ARG MAIL_PORT
ARG MAIN_USER
ARG MAIL_PASS

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --production
COPY --chown=node:node . .

RUN npm run deploy

CMD ["./node_modules/.bin/keystone-next", "start"]
