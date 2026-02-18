const taxonomy = {
  Frontend: ["React", "HTML", "CSS", "JavaScript"],
  Backend: ["Node", "Express"],
  Database: ["MongoDB"]
};

function categorizeSkill(skill) {
  for (let category in taxonomy) {
    if (taxonomy[category].includes(skill)) {
      return category;
    }
  }
  return "Other";
}

module.exports = categorizeSkill;
