#!/bin/bash

ROOT_DIR_NAME="build"
SOURCE_DIR_NAME="dist"
SOURCE_DIR="../../$SOURCE_DIR_NAME"
TARGET_DIR="./$SOURCE_DIR_NAME"

echo "Удаление старых сборок."
rm -rf $SOURCE_DIR_NAME
rm -rf build

# Проверяем, существует ли исходная папка
if [ -d "$SOURCE_DIR" ]; then
    # Копируем папку dist
    cp -r "$SOURCE_DIR" "$TARGET_DIR"
    
    # Проверяем, успешно ли прошло копирование
    if [ $? -eq 0 ]; then
        echo "Копирование $SOURCE_DIR_NAME успешно завершено."
        echo "Собираем проект [PROD_EMULATOR]."
        npm run build
    else
        echo "Ошибка при копировании папки $SOURCE_DIR_NAME."
    fi
else
    echo "Исходная папка $SOURCE_DIR не существует. Предварительно запустите сборку проектов!"
fi

PORT=2000
PORT_ROOT=4000

# Директория, из которой будут раздаваться файлы
DIRECTORY="./dist"

# Проверяем, существует ли директория
if [ -d "$DIRECTORY" ]; then
    # Запускаем сервер с использованием bun
    echo "Запуск сервера на порту $PORT для раздачи файлов из директории $DIRECTORY/exampleApp"
    http-server ./$SOURCE_DIR_NAME/exampleApp -p $PORT --cors=* -g -c-1 -P http://127.0.0.1:$PORT? &
    sleep 2
    http-server ./$ROOT_DIR_NAME -p $PORT_ROOT --cors=* -g -c-1 -P http://127.0.0.1:$PORT_ROOT?
else
    echo "Директория $DIRECTORY не существует."
fi