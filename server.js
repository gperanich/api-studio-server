import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import graphqlExpress from 'graphql-server-express';

let app = express();
app.use(bodyParser.json());

app.use('/graphiql', graphqlExpress.graphiqlExpress({
    endpointURL: '/api'
}));

app.listen(3000);