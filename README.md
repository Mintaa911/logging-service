# Logging System

## Overview

This Logging System is designed as a standalone microservice using Kafka and NestJS. It provides a robust and scalable logging solution for microservices architecture, enabling centralized log management. The system can be enhanced to handle large volumes of log data and supports multiple topics for different services, ensuring high performance and flexibility.

## Features

- **Centralized Logging:** Collect logs from multiple microservices in a single, centralized system.
- **Kafka Integration:** Leverages Kafka for scalable and reliable message streaming.
- **Multiple Topics:** Supports different topics for various services or log types.
- **Configurable Partitioning:** Efficiently handle large volumes of log data using Kafka partitioning.
- **Dynamic Topic Creation:** Create Kafka topics programmatically within the system.

## Getting Started

### Prerequisites

- **Docker & Docker Compose:** Ensure Docker is installed on your machine.
- **Node.js:** Ensure you have Node.js installed for local development.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Mintaa911/logging-system.git
   cd logging-system

2. **Install Dependencies**

    Navigate to the project directory and run

    ```bash
    npm install
    ```
3. **Setup kafka using docker compose**

  Start Kafka and Zookeeper containers using Docker Compose:

  ```bash
  docker-compose up -d
  ```
  This will start the Kafka broker and Zookeeper, creating the necessary topics as specified in the docker-compose.yml file.


### Run the logging system

To start the logging service:

  ```bash
  npm run start
