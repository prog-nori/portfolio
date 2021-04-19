docker-compose build
docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app portfolio  --template typescript"
docker-compose up -d
docker ps