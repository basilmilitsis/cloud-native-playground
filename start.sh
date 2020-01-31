# Variable needed for Kafka in docker-compose
export DOCKER_HOST_IP=127.0.0.1

docker-compose -f docker-compose.yml \
               `#-f docker-compose.shape.yml` \
               -f docker-compose.listing.yml \
               -f docker-compose.consumer.yml \
               -f docker-compose.partner.yml \
               -f docker-compose.debug.yml \
               -f docker-compose.override.yml \
               up \
               -d \
               --build