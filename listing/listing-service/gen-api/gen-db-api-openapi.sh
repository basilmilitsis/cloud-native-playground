OUTPUTDIR=../src/db-api

#delete old generated files
rm -rf $OUTPUTDIR

# -- Get the JSON spec file

# v1 - get the latest JSON spec file from a running service
#SPECURL=http://localhost:3000/
#SPECFILE=api-spec/spec.json
#wget --quiet --no-check-certificate $SPECURL -O $SPECFILE

# OR

# v2 - local JSON spec file
SPECFILE=api-spec/db-api-spec.yml

# generate files from spec
# docker run --rm --net=host -u="$(id -u)" -v ${PWD}:/local swaggerapi/swagger-codegen-cli:2.4.0 generate \
#     -i /local/$SPECFILE \
#     -l typescript-fetch \
#     -o /local/$OUTPUTDIR --additional-properties ngVersion=7.2.0



docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/$SPECFILE \
    -g typescript-axios \
    -o /local/$OUTPUTDIR