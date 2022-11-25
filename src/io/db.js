import aws from "aws-sdk";

const client = new aws.DynamoDB.DocumentClient();

const dynamo = {
  put: async (data) => {
    const params = {
      TableNames: "TodoTable",
      Item: data
    }
    const result = await client.put(params).promise()
  },
  get: (key) => {
    const params = {
      TableNames: "TodoTable",
      Key: {
        userId: key
      }
    }
    const result = client.get(params).promise()
  },
  scan: (key) => {
    const params = {
      TableNames: "TodoTable",
    }
    const result = client.scan(params).promise()
  },
  delete: (key) => {
    const params = {
      TableNames: "TodoTable",
      Key: {
        userId: key
      }
    }
    const result = client.delete(params).promise()
  },
}

export default dynamo;