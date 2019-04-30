const express = require('express'); // Require express module
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const app = express(); // Create an express application


app.listen(3500, ()=> {
	console.log("Server Running on Port 3500, have a nice day!");
});

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
