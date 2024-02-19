FROM node:20-alpine

WORKDIR /src/app

COPY package.json /

RUN npm install

RUN npm install yarn

COPY . /

RUN yarn build

EXPOSE 3000

CMD [ "yarn", 'start' ]

