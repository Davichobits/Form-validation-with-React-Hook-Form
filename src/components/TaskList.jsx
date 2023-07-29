import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"

export const TaskList = () => {
  const stateTask = useSelector(state=>state.tasks);
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    stateTask.map(task=>(
      <div key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={()=> handleDelete(task.id)}>delete</button>
      </div>
      ))
  )
}
