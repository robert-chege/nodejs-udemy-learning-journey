const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter User</title></head>");
    res.write("<body>");
    res.write("<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form>")
    res.write("</body>")
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Enter Users</title></head>");
    res.write("<body>");
    res.write("<ul><li>User 1</li></ul>");
    res.write("<ul><li>User 2</li></ul>");
    res.write("<ul><li>User 3</li></ul>");
    res.write("<ul><li>User 4</li></ul>");
    res.write("</body>")
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFile("create-user.txt", message, () => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    });
  }

  res.setHeader("Content-type", "text/html");
  res.write(
    "<html><head><title>My First Page</title></head><body><h1>Hello my node.js server!</h1></body></html>"
  );
  res.end();
};

module.exports = requestHandler;
