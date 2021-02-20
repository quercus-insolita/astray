FROM node:14.15-alpine

WORKDIR /app

ARG NODE_ENV

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY src src

RUN npm install --no-save yarn && \
    yarn --silent && \
    if [[ "$NODE_ENV" == "production" ]]; then npm run build; fi