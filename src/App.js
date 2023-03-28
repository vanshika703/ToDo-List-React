import "./App.css";
import { useState } from "react";
import WorkItem from "./components/WorkItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems((prev) => [...prev, item]);
  };

  const handleDelete = (index) => {
    const data = [...items];
    data.splice(index, 1);
    setItems(data);
  };

  return (
    <div className="App">
      <h2>To DO</h2>
      <div>
        <input
          type="text"
          placeholder="new task"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
        {console.log("items", items)}
      </div>
      {items.map((item, i) => (
        <div key={i}>
          <WorkItem item={item} />
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
