#!/bin/bash

delete_node_modules_in_subdirs() {
    local base_dir=$1
    local subdirs=("${@:2}")

    for subdir in "${subdirs[@]}"; do
        # Проверяем, существует ли поддиректория
        if [ -d "$base_dir/$subdir" ]; then
            echo "Удаление node_modules в $base_dir/$subdir..."
            find "$base_dir/$subdir" -type d -name "node_modules" -exec rm -rf {} +
        else
            echo "Поддиректория $base_dir/$subdir не найдена."
        fi
    done
}

echo "Удаление директории сборки dist"
rm -rf dist

echo "Удаление node_modules в корне проекта"
rm -rf node_modules

# Удаление node_modules в поддиректориях внутри apps
if [ -d "apps" ]; then
    subdirs1=("example")
    delete_node_modules_in_subdirs "apps" "${subdirs1[@]}"
else
    echo "Директория apps не найдена."
fi

# Удаление node_modules в поддиректориях внутри packages
if [ -d "packages" ]; then
    subdirs2=("configs" "sandbox")
    delete_node_modules_in_subdirs "packages" "${subdirs2[@]}"
else
    echo "Директория packages не найдена."
fi

echo "Удаление завершено."
