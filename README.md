# Bookstore API - README

This repository contains the source code for a simple Bookstore API implemented with Nest.js, Prisma.js, RabbitMQ, and PostgreSQL.

## Installation

``
npm install
``

#Prerequisites
Before running the application, make sure you have the following installed on your system:

- Node.js (https://nodejs.org)
- PostgreSQL (https://www.postgresql.org/)
- RabbitMQ (https://www.rabbitmq.com/)
- Docker (https://www.docker.com/)

# Setting Up PostgreSQL
```bash
 brew install postgresql
```

## Setting Up RabbitMQ
If you don't have RabbitMQ installed locally, you can use Docker to run RabbitMQ as a container:

``
docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:management
``

This command will pull the RabbitMQ Docker image and run it as a container. The management plugin is also enabled, and you can access the RabbitMQ management console at http://localhost:15672. The default username and password are both guest.

Logs for API requests will be recorded in the rabbitmq_logs.txt file. To run the RabbitMQ log consumer:
```
node libs/rabbitMQ/log-consumer.js
```

## Running the App
Start the Nest.js application along with the RabbitMQ log consumer:

```
npm run start:dev
```

The application will be available at http://localhost:3001/api, and you can access the Swagger UI documentation for the APIs.

To view the database using Prisma Studio, run:
```
cd prisma
npx prisma generate
npx prisma pull
npx prisma studio
```
Prisma Studio will be accessible at http://localhost:5555 in your browser.

# API Endpoints
The following APIs are available in the Bookstore API:

- POST /books - Creates a new book.
- GET /books/:id - Retrieves a single book by ID.
- GET /books - Retrieves a list of books with pagination support.
- POST /customers - Creates a new customer.
- GET /customers/:id - Retrieves a single customer by ID.
- GET /customers - Retrieves a list of customers with pagination support.
- POST /orders - Creates a new order.
- DELETE /orders/:id - Cancels an existing order.
- GET /orders - Retrieves a list of orders with pagination support.
Please refer to the Swagger UI documentation at http://localhost:3001/api for more details on the available endpoints and their usage.
