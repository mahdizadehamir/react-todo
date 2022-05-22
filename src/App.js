import "./App.css";
import TodoTitle from "./TodoTitle";
import Addtask from "./Addtask";
import TaskList from "./TaskList";
import Alert from "./Alert";
import { useState } from "react";
import EmptyAlert from "./EmptyAlert";
function App() {
  const [taskListState, setTaskListState] = useState(
    JSON.parse(localStorage.getItem("list") || null)
  );
  const [showAlert, setShowAlert] = useState("hidden");
  const [emptyAlert, setEmptyAlert] = useState("hidden");
  return (
    <div className="App h-screen container mx-auto  ">
      <TodoTitle />
      <Addtask
        setEmptyAlert={setEmptyAlert}
        setShowAlert={setShowAlert}
        taskListState={taskListState}
        setTaskListState={setTaskListState}
      />
      <TaskList
        setEmptyAlert={setEmptyAlert}
        setShowAlert={setShowAlert}
        setTaskListState={setTaskListState}
        taskListState={taskListState}
      />
      <div className="fixed left-6 bottom-6 flex flex-col justify-between">
      <Alert showAlert={showAlert} />
      <EmptyAlert emptyAlert={emptyAlert} />
      </div>
    </div>
  );
}

export default App;
