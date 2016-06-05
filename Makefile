.PHONY: dist test

dev:
	npm run dev

dist:
	npm run dist

test:
	npm test

watchtest:
	npm run watch:test

deploy:
	cooking build -c cooking.demo.js -p
	npm run deploy
