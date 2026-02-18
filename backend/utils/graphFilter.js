function filterGraph(graph, skillName) {
  const relatedNodes = new Set();
  const relatedLinks = [];

  graph.links.forEach(link => {
    if (link.source === skillName || link.target === skillName) {
      relatedLinks.push(link);
      relatedNodes.add(link.source);
      relatedNodes.add(link.target);
    }
  });

  return {
    nodes: graph.nodes.filter(node => relatedNodes.has(node.id)),
    links: relatedLinks
  };
}

module.exports = filterGraph;
