const express = require('express'); // Require express module
const PORT = 3500; // Server port
const app = express(); // Create an express application
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');


app.listen(PORT, ()=> {
    console.log("Server Running on Port:", PORT);
});
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
