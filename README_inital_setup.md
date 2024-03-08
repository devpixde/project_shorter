# Inital setup


## Initial project with docker


This will temporarily create a container, install react in present working dir with redux, reat-router and tailwind support. Afterwards container is removed and inital project will remain.
```shell
 docker run --rm -v "${PWD}:/myapp" -w "/" -it node:20 sh -c "npm i -g create-react-app \
&& npx create-react-app myapp --template redux-typescript \
&&  cd myapp \
&& npm install react-router \
&& npm install -D tailwindcss postcss autoprefixer \
&& npx tailwindcss init -p"
```


Setup tailwind:
```js
content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
```
*tailwind.config.js*

Replace:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
*src/index.css*

In package.json change name to "shorter"


## Create Docker image and run container

```shell
FROM node:20
WORKDIR /app
COPY . .
RUN npm i
ENTRYPOINT ["npm"]
```
*Dockerfile*

Create image named shorter
```shell
docker build -t shorter .
```

```shell
docker run -p "3000:3000" -v "$(pwd)/src:/app/src" shorter start
```
*Go to browser localhost:3000*

```shell
docker container ls
```
*show container id*

```shell
docker stop <container-id>
```
*stop*

```shell
docker start <container-id>
```
*start*


```shell
docker exec -ti <container-id> /bin/bash
```
*interact with container*

## Git init
- git init
- add to github