const express = require("express");
const githubRoutes = require("./routes/githubRoutes");

const app = express();
app.use(express.json());

app.use("/api/github", githubRoutes);

app.listen(5000, () => {
  console.log("SkillSphere backend running on port 5000");
});
