#bin/bash
time=$(date "+%Y%m%d%H%M%S")
docker build -t 172.16.81.7:8082/backend-app:$time .
docker push 172.16.81.7:8082/backend-app:$time
