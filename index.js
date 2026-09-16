let express = reqire("express");
let app = express();
//localhost:3000/
app.get("/", (req, res) => {
  res.send("home page called");
});
//localhost:3000/abouts
app.get("/aboutus", (req, res) => {
  res.send("about page called");
});
app.post("/addStudent", (req, res) => {
  res.send("add student page called");
});
//run the server in port 3000
app.listen(3000, () => {
  console.log("server running on port 3000");
});
