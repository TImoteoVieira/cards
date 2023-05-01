db:
	docker-compose up -d --build
migrations:
	npx prisma migrate dev
