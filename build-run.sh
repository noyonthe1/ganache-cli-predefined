docker rm -f startbahn-ganache-cli
docker rmi startbahn/ganache-cli
docker build --no-cache -t startbahn/ganache-cli .
docker run -d -p 8545:8545 startbahn/ganache-cli
# docker-compose up -d
docker exec -it startbahn-ganache-cli bash
# sleep 10
# docker logs art-cert-test