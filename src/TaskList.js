const TaskList = (props) => {
  const deleteTask = (index) => {
    const filterItems = props.taskListState.filter(
      (task) => props.taskListState.indexOf(task) !== index
    );
    props.setTaskListState(filterItems);
    localStorage.removeItem("list");
    localStorage.setItem("list", JSON.stringify(filterItems));
  };
  return (
    <div className="task-list flex flex-col justify-center items-center mt-16">
      {props.taskListState.map((task, index) => (
        <div
          className={`flex flex-row justify-between  bg-gray-900 mb-4  font-sans text-xl  shadow-lg shadow-gray-900 p-4 w-72 break-words ${
            "task" + "-" + index
          }`}
          key={index}
        >
          <p className="break-words w-44">{task}</p>
          <button
            onClick={() => deleteTask(index)}
            class="btn btn-sm btn-circle btn-outline btn-error"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <label for="my-modal-6" class="btn modal-button">open modal</label>
          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg">
                Congratulations random Interner user!
              </h3>
              <p class="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div class="modal-action">
                <label for="my-modal-6" class="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
