import { useEffect } from "react";

const TaskList = (props) => {
  return (
    <div className="task-list flex flex-col justify-center items-center mt-16">
      {props.taskListState.map((task, index) => (
        <div className={`inline-block bg-gray-900 mb-4  font-sans text-xl  shadow-lg shadow-gray-900 p-4 w-72 break-words ${"task" + "-" + index}`} key={index}>
          {task}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
