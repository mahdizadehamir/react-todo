import {useState} from "react";
const Addtask = (props) => {
const [taskValue,setTaskValue] = useState('');
  const handleAddTask = (e) => {
	 e.preventDefault();
    if (taskValue === "") {
      props.setEmptyAlert("block");
      setTimeout(() => {
        props.setEmptyAlert("hidden");
      }, 3000);
      return;
    }
    if (!props.taskListState.includes(taskValue)) {
      localStorage.setItem(
        "list",
        JSON.stringify([...props.taskListState, taskValue])
      );
      props.setTaskListState([...props.taskListState, taskValue]);
      console.log(props.taskListState);
	setTaskValue('');
    } else {
      props.setShowAlert("block");
	setTaskValue('');
      setTimeout(() => {
        props.setShowAlert("hidden");
      }, 3000);
    }
  };
  return (
    <div className="inputHolder mx-auto">
      <div className="  flex flex-row justify-center mt-8">
		<form onSubmit={handleAddTask}>
        <input
		  onChange={(e) => setTaskValue(e.target.value)}
          required
          type="text"
	    	value={taskValue}
          placeholder="add a todo"
          className=" input input-bordered border-primary focus:border-yellow-500   w-full max-w-xs rounded-none"
        />
        <button
	    	type="submit"
          className="btn btn-active btn-primary rounded-none"
        >
          Add
        </button>
		</form>
      </div>
    </div>
  );
};

export default Addtask;
