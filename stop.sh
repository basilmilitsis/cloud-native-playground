docker-compose -f docker-compose.yml \
               -f docker-compose.shape.yml \
               -f docker-compose.listing.yml \
               -f docker-compose.consumer.yml \
               -f docker-compose.partner.yml \
               -f docker-compose.debug.yml \
               -f docker-compose.override.yml \
                down --remove-orphans -v