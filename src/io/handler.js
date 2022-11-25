const handler = {
  returnSuccess: body => ({
    statusCode: 200,
    body: JSON.stringify(body)
  }),
}


export default handler;