const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { title } = JSON.parse(event.body);
  const taskId = `task-${Date.now()}`;

  const params = {
    TableName: 'taskTable',
    Item: {
      taskId,
      title,
    },
  };

  try {
    await dynamoDB.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ taskId, title }),
    };
  } catch (error) {
    // TODO: Handle errors and return appropriate error responses
    return {
      statusCode: 500,
      body: JSON.stringify({ error:'Error creating task' }),
    };
  }
};
