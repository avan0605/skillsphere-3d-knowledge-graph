const techDictionary = [
  "React",
  "Node",
  "Express",
  "MongoDB",
  "JavaScript",
  "HTML",
  "CSS"
];

function extractSkills(text) {
  return techDictionary.filter(skill =>
    text.toLowerCase().includes(skill.toLowerCase())
  );
}

module.exports = extractSkills;
