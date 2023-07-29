import { useSelector } from "react-redux"

export const TaskList = () => {
  const stateTask = useSelector(state=>state.tasks)
  return (
    stateTask.map(task=>(
      <div key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      ))
  )
}
