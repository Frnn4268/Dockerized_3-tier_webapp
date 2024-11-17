# Minimal 3-Tier Web Application with Docker Swarm

This repository contains a minimal 3-tier web application set up for deployment using Docker Swarm. The application is structured into the following services:

- **Client React Nginx:** Serves the frontend application built with Vite and React.
- **API Node:** Handles API requests using Node.js.
- **API Golang:** Provides additional API endpoints using Go.
- **PostgreSQL Database:** Stores application data.

## Repository Contents

- **Makefile:** Simplifies Docker commands for managing the application using Docker Compose and Docker Swarm.
- **docker-compose-prod.yml:** Defines service configurations for local Docker Compose deployment.
- **docker-swarm.yml:** Configures the application for deployment on a Docker Swarm cluster.
- **Setup instructions and environment secrets management.**

## Prerequisites

- **Docker** and **Docker Compose** installed on your local machine.
- Access to a **Docker Swarm** cluster if deploying via Swarm. Ensure a manager node is set up.
- **SSH access** to the machine or VM where the Docker Swarm manager node is running.

## Installation and Usage

### Local Deployment with Docker Compose

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Frnn4268/minimal_3-tier_webapp.git
   cd minimal_3-tier_webapp
   ```

2. **Start services using Docker Compose:**
   ```bash
   make compose-up
   ```

3. **Alternatively, start services in detached mode:**

   ```bash
   make compose-up-d
   ```

4. **Stop services:**

   ```bash
   make compose-down
   ```

5. The application will be accessible at http://localhost:5173 for the frontend, and API services will be available on their respective ports (3000, 8080).

### Deployment on Docker Swarm

1. **Initialize Docker Swarm:**

   ```bash
   make swarm-init
   ```

2. **Deploy the application stack:**

   ```bash
   make swarm-deploy-stack
   ```

3. **View running services:**

   ```bash
   make swarm-ls
   ```

4. **Remove the stack:**
   ```bash
   make swarm-remove-stack
   ```


### Secrets Management
1. Create necessary secrets:
   ```bash
   make create-secrets
   ```
   
2. Delete secrets:
   ```bash
   make delete-secrets
   ```

3. For redeployment of the stack with updated secrets:
   ```bash
   make redeploy-all
   ```

### Docker Swarm Configuration

The docker-swarm.yml file is designed for deploying the application on a Docker Swarm cluster. It includes:

- Use of secrets to securely manage sensitive information such as database passwords.
- Specification of deployment modes and replication settings for each service.
- Health checks for ensuring service availability and performance.

### Volumes and Networks
- **Volumes:**

	- pgdata: Persistent storage for the PostgreSQL database data.

- **Networks:**

	- frontend: Network for communication between frontend and API services.
	- backend: Network for communication between database and API services.
