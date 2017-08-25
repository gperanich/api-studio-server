var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var graphqlExpress = require('graphql-server-express');

let app = express();
app.use(bodyParser.json());

app.use('/graphiql', graphqlExpress.graphiqlExpress({
    endpointURL: '/api'
}));

app.listen(3000, function() {
    console.log('server running on port 3000');
});