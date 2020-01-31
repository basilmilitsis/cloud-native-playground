set OUTPUTDIR=../src/api/db-api-graphql

rem delete old generated files
rm -rf $OUTPUTDIR

rem # -- Get the JSON spec file

rem # v1 - get the latest JSON spec file from a running service
rem #SPECURL=http://localhost:3000/
rem #SPECFILE=api-spec/spec.json
rem #wget --quiet --no-check-certificate $SPECURL -O $SPECFILE

rem # OR

rem # v2 - local JSON spec file
set SPECFILE=api-spec/db-api-graphql.json

rem # generate files from spec
rem #node ./node_modules/graphql-typed-client/dist/cli.js -e http://localhost:5000 -o /local/$OUTPUTDIR
node ./node_modules/graphql-typed-client/dist/cli.js -s %SPECFILE% -o %OUTPUTDIR%