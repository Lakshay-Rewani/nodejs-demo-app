# Node.js CI/CD Pipeline using GitHub Actions

## 📌 Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.

The pipeline automatically runs whenever code is pushed to the `main` branch.

## 🛠️ Technologies Used

- Node.js
- GitHub
- GitHub Actions
- Docker
- Docker Hub

## 🔄 CI/CD Workflow

The pipeline performs the following steps:

1. Checkout source code
2. Setup Node.js
3. Install dependencies
4. Run automated tests
5. Login to Docker Hub
6. Setup Docker Buildx
7. Build Docker image
8. Push Docker image to Docker Hub

## 📁 Project Structure

```text
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── app.js
├── test.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md
