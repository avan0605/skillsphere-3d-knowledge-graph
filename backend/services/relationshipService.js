function buildRelationships(repos) {
  const relationships = {};

  repos.forEach(repo => {
    repo.skills.forEach(skillA => {
      repo.skills.forEach(skillB => {
        if (skillA !== skillB) {
          const key = `${skillA}-${skillB}`;
          relationships[key] = (relationships[key] || 0) + 1;
        }
      });
    });
  });

  return relationships;
}

module.exports = buildRelationships;
