# Виберіть базовий образ
FROM node:14

# Встановіть робочу директорію в контейнері
WORKDIR /usr/src/app

# Копіюйте package.json та package-lock.json
COPY package*.json ./

# Встановіть залежності вашого проекту
RUN npm install

# Копіюйте весь код вашого додатку в контейнер
COPY . .

# Відкрийте порт 3000
EXPOSE 3000

# Запустіть ваш додаток
CMD [ "node", "index.js" ]
