const Addtask = (props) => {
  const handleAddTask = () => {
    const val = document.getElementById("add-task").value;
    if (!props.taskListState.includes(val)) {
      localStorage.setItem(
        "list",
        JSON.stringify([...props.taskListState, val])
      );
      props.setTaskListState([...props.taskListState, val]);
      document.getElementById("add-task").value = "";
      console.log(props.taskListState);
    }
    else {
      props.setShowAlert('block')
      setTimeout(() => {
      props.setShowAlert('hidden')
      }, 3000);
      
    }
  };
  return (
    <div className="inputHolder mx-auto">
      <div className="flex flex-row justify-center mt-8">
        <input
          required
          type="text"
          id="add-task"
          placeholder="add a todo"
          className="input input-bordered border-primary focus:border-yellow-500   w-full max-w-xs rounded-none"
        />
        <button
          onClick={handleAddTask}
          className="btn btn-active btn-primary  rounded-none"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Addtask;
