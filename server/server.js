const colors = require('colors');

const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

require('dotenv').config();

const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const connectDB = require('./config/mongodb');

// connect to database....
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server is listening on port ${port}`));
