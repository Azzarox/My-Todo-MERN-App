FROM node:16

WORKDIR /client

COPY package*.json ./

COPY /src ./src

COPY /public ./public

ENV REACT_APP_API_BASE_URL=http://localhost:3001

EXPOSE 3000

RUN npm install && npm cache clean --force

CMD ["npm", "start"]
