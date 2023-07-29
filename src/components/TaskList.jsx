import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const stateTask = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
    <header>
      <h1>Tasks {stateTask.length}</h1>
      <Link to='/form'>
        New
      </Link>
    </header>
    {
      stateTask.map((task) => (
        <div key={task.id} className="border-2 flex place-content-around rounded-lg my-4">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="w-24 flex place-content-between">
            <button onClick={() => handleDelete(task.id)}>delete</button>
            <button onClick={() => handleDelete(task.id)}>edit</button>
          </div>
        </div>
      ))
    }
    </>
  )
};
