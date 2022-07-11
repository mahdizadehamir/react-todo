import { FaRegEdit } from "react-icons/fa";

const TaskList = (props) => {
	/*define deleteTask function */
  const deleteTask = (index) => {
    document.getElementById(index).classList.add("animate-fade-out-down");
    setTimeout(() => {
    const filterItems = props.taskListState.filter(
      (task) => props.taskListState.indexOf(task) !== index
    );
    props.setTaskListState(filterItems);
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(filterItems));
    console.log(index);
    }, 500);
  };
	  /*define editTask function */
  const handleEdit = (index) => {
    const val = document.getElementById("edited-task" + index).value;
    if (val === "") {
      props.setEmptyAlert("block");
      setTimeout(() => {
        props.setEmptyAlert("hidden");
      }, 3000);
      return
    } 
    if (!props.taskListState.includes(val)) {
      const newArray = [...props.taskListState];
      newArray[index] = val;
      props.setTaskListState(newArray);
      localStorage.removeItem("list");
      localStorage.setItem("list", JSON.stringify(newArray));
      console.log(index);
    }
    else{
      props.setShowAlert('block')
      setTimeout(() => {
      props.setShowAlert('hidden')
      }, 3000);
    }
  };
  return (
    <div className="task-list flex flex-col justify-center items-center mt-16">
	{props.taskListState ? 
      props.taskListState.map((task, index) => (
        <div
          className={`flex flex-row justify-between animate-fade-in-down   bg-gray-900 mb-4  font-sans text-xl  shadow-lg shadow-gray-900 p-4 w-80 break-words tasks ${
            "task" + "-" + index
          }`}
          key={index}
          id={index}
        >
          <p className="break-words w-44">{task}</p>
          <button
            onClick={() => deleteTask(index)}
            className="btn btn-sm btn-circle btn-outline btn-error self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* modal opening */}
          <label
            htmlFor={"modal" + "-" + index}
            className="modal-button self-center p-1 text-3xl ml-2 hover:cursor-pointer hover:text-gray-600 transition duration-700 ease-in-out"
          >
            <FaRegEdit />
          </label>
          <div>
            <input
              type="checkbox"
              id={"modal" + "-" + index}
              className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Edit Todo</h3>
                <input
                  className="input input-bordered input-primary w-full max-w-x"
                  type="text"
                  id={"edited-task" + index}
                  defaultValue={task}
                />
                <div className="modal-action">
                  <label
                    onClick={() => handleEdit(index)}
                    htmlFor={"modal" + "-" + index}
                    className="btn btn-primary"
                  >
                    Edit
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}
        </div>
	  )) : <div>No Tasks</div>}
    </div>
  );
};

export default TaskList;
