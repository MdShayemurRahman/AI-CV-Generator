FROM node:lts-alpine
WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3000
EXPOSE 3000

# Define the command to run your server
CMD ["npm", "start"]