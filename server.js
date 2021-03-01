const http = require ('http')
const url = require('url');
const port = 8000
const requestHandler = (request, response) => {
    exampleUrl = request.url;
    const parsedUrl = url.parse(exampleUrl, true);
    if(parsedUrl.query.name && parsedUrl.query.city){
        response.end(`Hello, ${parsedUrl.query.name} from ${parsedUrl.query.city}`);
    }
    response.end(`Please provide name AND city parameters`);
  };
  
  const server = http.createServer(requestHandler)
  server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});
