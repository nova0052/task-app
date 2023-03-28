const AWS = require('aws-sdk');
const { createTask } = require('./createTask');
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();

const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.post('/tasks', createTask);

// TODO: Add other CRUD operations for tasks (e.g., GET, PUT, DELETE)

module.exports = app;
