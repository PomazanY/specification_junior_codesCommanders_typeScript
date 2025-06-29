# React Auth App

Простое React-приложение с аутентификацией, построенное с использованием Redux Toolkit и RTK Query.

##  Как запустить приложение

###  Локальный запуск (без Docker)

1. Установите зависимости:
npm install

2. Запустите приложение в режиме разработки:
npm run dev

3. Откройте в браузере:
http://localhost:5173


###  Запуск с использованием Docker

1. Соберите Docker-образ:
docker build -t react-auth-app .


2. Запустите контейнер:
docker run -d -p 8080:80 react-auth-app


3. Перейдите в браузере по адресу:
http://localhost:8080

