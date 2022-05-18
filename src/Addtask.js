const Addtask = (props) => {
  const handleAddTask = (e) => {
    const val = document.getElementById("add-task").value;
    localStorage.setItem("list", JSON.stringify([...props.taskListState,val]));
    props.setTaskListState([...props.taskListState,val]);
    document.getElementById("add-task").value = "";
    console.log(props.taskListState);
  };
  return (
    <div className="inputHolder mx-auto">
      <div className="flex flex-row justify-center mt-8">
        <input
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
