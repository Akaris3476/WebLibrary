local start: node controllers/server.js
<br>
in .env must be present JWT_Private_Key
<br><br>
start in minikube: <br>minikube start <br>kubectl apply -f  '*.yaml'<br>minikube mount .../\*some directory with postgres db\*/data:/mnt/data
