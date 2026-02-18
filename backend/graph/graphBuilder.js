function buildGraph(student, repos) {
  const nodes = [{ id: student, type: "student" }];
  const links = [];

  repos.forEach(repo => {
    nodes.push({ id: repo.name, type: "repo" });
    links.push({ source: student, target: repo.name });

    repo.skills.forEach(skill => {
      nodes.push({ id: skill, type: "skill" });
      links.push({ source: repo.name, target: skill });
    });
  });

  return { nodes, links };
}

module.exports = buildGraph;
