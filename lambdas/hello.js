
export function handler(event, context, callback) {

  // send a response
  return callback(null, {
    statusCode: 200,
    body: 'Hello Hack Chicago!'
  });

}
