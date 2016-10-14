FROM node:6.8.0

RUN mkdir /code
WORKDIR /code

RUN npm install -g create-react-app
