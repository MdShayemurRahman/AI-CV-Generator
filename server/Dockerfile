FROM node:latest
WORKDIR /usr/src/server
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8000

# Define the command to run your server
CMD ["npm", "run", "server"]