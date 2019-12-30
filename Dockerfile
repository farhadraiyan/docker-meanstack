FROM node:8.17.0-alpine3.9
# FROM busybox
# ENV foo /bar
# WORKDIR ${foo}   # WORKDIR /bar
# ADD . $foo       # ADD . /bar
# COPY \$foo /quux # COPY $foo /quux

WORKDIR /usr/src/app/nodeapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

