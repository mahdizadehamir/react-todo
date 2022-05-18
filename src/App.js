import "./App.css";
import TodoTitle from "./TodoTitle";
import Addtask  from "./Addtask";
import TaskList  from "./TaskList";
import { useState } from "react";
function App() {
  const taskList = JSON.parse(localStorage.getItem("list") || "[]");
  const [taskListState, setTaskListState] = useState(taskList);
  return (
    <div className="App  h-screen container mx-auto ">
      <TodoTitle />
      <Addtask taskListState={taskListState} setTaskListState={setTaskListState} />
      <TaskList taskListState={taskListState} />
    </div>
  );
};

export default App;
