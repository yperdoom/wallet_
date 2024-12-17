# Etapa 1: Construção
FROM node:22 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:22

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./

RUN yarn install --production

EXPOSE 3000

CMD ["node", "dist/index.js"]
