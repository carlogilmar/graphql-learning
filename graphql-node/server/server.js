const express = require('express'); // Require express module
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');
const app = express(); // Create an express application

// Fake Data
const authors = [
  {
    id: "1",
    info: {
      name: "Joe Kelly",
      age: 32,
      gender: "M",
    }
  },
  {
    id: "2",
    info: {
      name: "Mary Jane",
      age: 27,
      gender: "F",
    }
  }
];

// TypeDefs GraphQL
const typeDefs = `
  type Author {
  	id: ID!
  	info: Person
  }
  type Person {
  	name: String!
  	age: Int
  	gender: String
  }
  type Query {
  	getAuthors: [Author]
  }
`;

// The resolvers
const resolvers = {
  Query: {
    getAuthors: () => authors
  },
};

//The schema
const schema = makeExecutableSchema({typeDefs, resolvers});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3500, ()=> {
	console.log("Server Running on Port 3500, have a nice day!");
});

