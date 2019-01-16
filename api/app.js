const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createServer = require('http').createServer;
const post = require('./routes/post.js');
const course = require('./routes/course.js');
const mongo = require('./mongo/mongo.js');
// const apolloServer = require('./graphql/server.js');

// Initialize express app
const app = express();

// apply express middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// RESTful routes
app.use('/api/post', post);
app.use('/api/course', course);

// apply graphQL server to express app and serve at `/graphql` url.
// NOTE: keep this line of code below all `app.use` statements.
// apolloServer.applyMiddleware({ app });

// create http server from express app and graphQL server
const httpServer = createServer(app);

// set application port
const port = process.env.PORT || 7001;

// start http server listening on application port
httpServer.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running on port ${port}`);
  }
});

module.export = app;
