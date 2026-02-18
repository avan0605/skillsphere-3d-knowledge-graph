const axios = require("axios");

async function fetchRepos(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

module.exports = { fetchRepos };
