FROM node:16

WORKDIR /api

COPY package*.json .

COPY src/ ./src

ENV JWT_SECRET="some_jwt_secret_used_for_development"

ENV NODE_ENV=development

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
