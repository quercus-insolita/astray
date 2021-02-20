mkdir -p logs && \
docker-compose -f docker-compose-prd.yml build --no-cache app && \
docker-compose -f docker-compose-prd.yml down --remove-orphans && \
docker-compose -f docker-compose-prd.yml up -d database app && \
docker image prune -f
