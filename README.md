# Minimal 3 Tier Web Application
- **React frontend (using Vite.js):** Uses react query to load data from the two apis and display the result.
- **Node JS and Golang APIs:** Both have `/` and `/ping` endpoints. `/` queries the Database for the current time, and `/ping` returns `pong`.
- **PostgreSQL Database:** An empty PostgreSQL database with no tables or data. Used to show how to set up connectivity. The API applications execute `SELECT NOW() as now;` to determine the current time to return.

![](./readme-assets/tech-stack.png)

## Running the Application

The `Makefile` contains the commands to start each application.

### PostgreSQL

- It's way more convenient to run postgres in a container, like we do in this project.

- `make run-postgres` will start postgres in a container and publish port 5432 from the container to your localhost.

### api-node - Node.js

- To run the node api you will need to run `npm install` to install the dependencies (I used node `v18.19.1` and npm `v9.2.0`).

- After installing the dependencies, `make run-api-node` will run the api in development mode with nodemon for restarting the app when you make source code changes.

### api-golang - Golang

- To run the golang api you will need to run `go mod download` to download and install the dependencies (I used `go1.22.2`)

- After installing the dependencies, `make run-api-golang` will build and run the api.

### client-react - Vite.js

- Like `api-node` and `api-data-processing-node`, you will first need to install the dependencies with `npm install` (again, I used node `v18.19.1` and npm `v9.2.0`)

- After installing the dependencies, `make run-client-react` will use vite to run the react app in development mode.

## Running the Application with docker-compose.yml

To run the complete application with the compose, you will need to run:

```bash
docker-compose up --build -d
```

You can also run the main `Makefile` commands using a specific docker-compose.yml.
