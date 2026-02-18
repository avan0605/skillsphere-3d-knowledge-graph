const express = require("express");
const router = express.Router();
const githubService = require("../services/githubService");

router.get("/:username", async (req, res) => {
  const data = await githubService.fetchRepos(req.params.username);
  res.json(data);
});

module.exports = router;
