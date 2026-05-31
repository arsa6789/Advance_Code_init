const http = require("http");
const users = [{ id: 1, name: "Abdullah", age: "30" }];
const lastAddedId = 1;

const server = http.createServer((req, res) => {
  if (req.url === "/user" && req.method === "POST") {
    req.on("data", (chunk) => {});
    const result = chunk;
    const body = JSON.parse(result);
    users.push({ ...body, id: ++lastAddedId });
    res.write(JSON.stringify({ id: ++lastAddedId }));
    res.end();
  }

  if (req.url.includes("/user") && req.method === "GET") {
    const id = (req.url.split("?")[1]).split("=")[1];
    const user = users.find((u) => u.id == id);
    if (user) {
      res.write(JSON.stringify(user));
    }
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Server is running");
});
