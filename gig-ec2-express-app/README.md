# EC2 Express App Example

This project demonstrates running a Node.js Express app on an EC2 instance.

## Setup Instructions

1. Launch EC2 (Amazon Linux 2 or Ubuntu).
2. Install Node.js: sudo yum install -y nodejs npm
3. Upload this project to the instance.
4. Install dependencies: npm install
5. Run the app: npm start
6. Access http://<EC2_PUBLIC_IP>:3000 for home page and /api/time for API.
