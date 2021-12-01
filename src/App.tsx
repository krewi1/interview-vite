import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import exampleTree from './data/exampleTree';

function App() {
  const [treeData, setTreeData] = useState(exampleTree)

  return (
    <div className="App">
     <Tree data={treeData}/>
    </div>
  )
}

export default App
