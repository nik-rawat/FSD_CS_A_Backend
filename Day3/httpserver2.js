const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  const data = await fetch("https://dummyjson.com/recipes");
  const datajson = data.json();
  dataArray = datajson.recipes;
  const names = dataArray.map((recipe) => {
    return recipe.name;
  })
  res.end(names);
});
server.listen(3001, (err) => {
  try {
    if (err) throw err;
  } catch (err) {
    console.log("Server Error", err.message);
  }
});