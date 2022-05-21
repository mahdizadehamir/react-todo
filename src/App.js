import "./App.css";
import TodoTitle from "./TodoTitle";
import Addtask from "./Addtask";
import TaskList from "./TaskList";
import Alert from "./Alert";
import { useState } from "react";
function App() {
  const [taskListState, setTaskListState] = useState(
    JSON.parse(localStorage.getItem("list") || null)
  );
  const [showAlert, setShowAlert] = useState("hidden");
  return (
    <div className="App h-screen container mx-auto  ">
      <TodoTitle />
      <Addtask
        setShowAlert={setShowAlert}
        taskListState={taskListState}
        setTaskListState={setTaskListState}
      />
      <TaskList
        setShowAlert={setShowAlert}
        setTaskListState={setTaskListState}
        taskListState={taskListState}
      />
      <Alert showAlert={showAlert} />
    </div>
  );
}

export default App;
