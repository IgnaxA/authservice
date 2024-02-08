## Сервис для аутентификации и авторизации пользователей

# Как запустить приложение

1. Склонировать данный репозиторий:

git clone https://github.com/IgnaxA/bank-manager.git

2. Открыть терминал и зайти в корневую папку проекта

3. Собрать docker образ БД:

docker build -f ./docker/images/docker-postgres-scripts.Dockerfile -t ignaxa/bank_manager:postgredb .

4. Запустить контейнеры:

docker-compose -f ./docker/composes/docker-compose.yml up -d

5. В контейнере 'postgres_container' выполнить следующие команды:

su postgres

psql

\i db-init.sql

6. Запустить API