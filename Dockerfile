FROM node:18


WORKDIR /app

COPY package*.json ./

# Instalar dependencias de la aplicación
RUN npm install

RUN npm uninstall bcrypt
RUN npm i bcrypt

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start"]
