FROM node:20
WORKDIR /app
COPY . .
RUN npm i
ENTRYPOINT ["npm"]