module.exports = {
  input: (event) => JSON.parse(event.body),
  params: (event) => event.pathParameters
}