dev:
	export NODE_OPTIONS=--openssl-legacy-provider && npm run dev
build:
	export NODE_OPTIONS=--openssl-legacy-provider && npm run build