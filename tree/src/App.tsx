import { useState } from "react";
import Tree from "./components/Tree";
import exampleTree from "./data/exampleTree";

function App() {
  const [treeData, setTreeData] = useState(exampleTree);

  return (
    <div className="App">
      <Tree tree={treeData} />
    </div>
  );
}

export default App;
