FROM node:argon

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install pm2 -g

# Bundle source code
COPY . /usr/src/app
RUN npm run build

EXPOSE 8000
CMD ["pm2", "start", "prod-server.js", "--no-daemon"]