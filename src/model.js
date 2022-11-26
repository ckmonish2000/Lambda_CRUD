const aws = require('aws-sdk');

class Todo {
  client = new aws.DynamoDB.DocumentClient();
  TableName = "todoTable"

  async put(Item) {
    const params = {
      TableName: this.TableName,
      Item
    }
    const result = await this.client.put(params).promise()

    return result.$response
  }


  async fetchById(key) {
    const params = {
      TableName: this.TableName,
      Key: {
        userId: key
      }
    }
    const result = await this.client.get(params).promise()
    return result.Item
  }

  async fetchAll(key) {
    const params = {
      TableName: this.TableName,
    }
    const result = await this.client.scan(params).promise()
    return result.Items
  }

  async deleteById(key) {
    const params = {
      TableName: this.TableName,
      Key: {
        userId: key
      }
    }
    const result = await this.client.delete(params).promise()
    return result.$response
  }
}

module.exports = new Todo();