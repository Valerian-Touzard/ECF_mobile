FROM node:slim AS build

WORKDIR /dev/app-mobile

COPY /package.json /package.json

RUN npm cache clean --force && npm i

COPY /src /src
COPY /public /public

RUN npm build
RUN npx cap copy && npx cap sync
RUN npx cap open android


# Stage de production
FROM nginx:alpine-slim

COPY --from=build  /build/ /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]