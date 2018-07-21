
export function handler(event, context, callback) {

  // grab the parameters from the request
  var params = event.queryStringParameters;

  // get the time in Chicago
  var now = new Date();
  var time = now.toLocaleString("en-US", { timeZone: "America/Chicago", hour: 'numeric', minute: 'numeric'});

  // send a response
  return callback(null, {
    statusCode: 200,
    body: `Hello ${ params.name }! The time here in Chicago is ${time}`
  });

}
