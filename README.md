**О проекте**

Проект представляет собой монорепозиторий, состоящий из основных микросервисов, расположенных в директории **apps**, а также вспомогательных (служащих для упрощения разработки), расположенных в директории **packages**.

Для тестирования в production режиме используется сервис [prod_emulator](packages/prod_emulator/README.md).

Для работы в режиме мока обращений к API используется сервис [mock_api](packages/mock_api/README.md).

**Приложения (apps)**
- [@repo/example](./apps/example/README.md) - микросервис example

**Вспомогательные приложения (packages)**
- [@repo/ui](./packages/ui/README.md) - общая библиотека компонентов (!TODO)
- [@repo/mock_api](./packages/mock_api/README.md) - тестовый сервер с мок данными (!TODO)
- [@repo/sandbox](./packages/sandbox/README.md) - песочница для разработки
- [@repo/prod_emulator](./packages/prod_emulator/README.md) - эмулятор прод режима (!TODO)
- [@repo/configs](./packages/configs/README.md) - конфигурационные файлы
- [@types/repo](./packages/types/README.md) - глобальные типы

**Документация**

- [Архитектура приложений](./docs/ARCH.md)
- [Архитектура компонентов](./docs/ARCH_CMP.md)
- [Правила работы с проектом](./docs/DEV_RULES.md)
- [Правила работы с системой контроля версий](./docs/GIT.md)
- [Стенды](./docs/STANDS.md)
- [CICD](./docs/CICD.md)
- [Разработка и тестирование](./docs/DEVELOPMENT.md)