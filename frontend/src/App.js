import GraphView from "./components/GraphView";

function App() {
  const sampleGraph = {
    nodes: [
      { id: "Student", type: "student" },
      { id: "React", type: "skill" }
    ],
    links: [{ source: "Student", target: "React" }]
  };

  return (
    <div>
      <h1>SkillSphere 3D Knowledge Graph</h1>
      <GraphView graphData={sampleGraph} />
    </div>
  );
}

export default App;
