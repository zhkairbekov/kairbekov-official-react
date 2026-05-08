.PHONY: install dev build preview typecheck clean help

# Default target
.DEFAULT_GOAL := help

install: ## Установить зависимости
	npm install

dev: ## Запустить dev-сервер (http://localhost:5173)
	npm run dev

build: ## Собрать проект в папку dist/
	npm run build

preview: ## Запустить превью production-сборки (http://localhost:4173)
	npm run preview

typecheck: ## Проверить типы TypeScript без сборки
	npm run typecheck

clean: ## Удалить node_modules и dist/
	rm -rf node_modules dist

reinstall: clean install ## Полная переустановка зависимостей

help: ## Показать список команд
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'