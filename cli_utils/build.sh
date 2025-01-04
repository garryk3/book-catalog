#!/bin/bash

echo "Валидация файлов"
npm run ci-check
if [ $? -eq 0 ]
then
  echo "---------[УСПЕШНО:ci-check]"
else
  echo "---------[ОШИБКА:ci-check]: $?"
  exit 1
fi

echo "Сборка проекта"
npm run ci-build
