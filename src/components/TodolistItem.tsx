import {Button} from './Button'
import {Task} from "../Task.tsx";

type Props = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (taskId: number) => void
  changeFilter: () => void
}
type TaskProps = {
  id: number
  title: string
  isDone: boolean
}

export const TodolistItem = ({
                               title,
                               tasks,
                               truck2,
                               removeTask,
                               changeFilter
}: Props) => {
  const mappedTasks = tasks.map(task => {
      return (
        <Task title={task.title} isDone={task.isDone} removeTask={() => removeTask(task.id)}/>
      )
    })

  return (
    <div>
      <h3>{title}</h3>
      {<p>{truck2}</p>}
      <div>
        <input/>
        <Button title={'+'}/>
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {mappedTasks}
        </ul>
      )}
      <div>
        {/*<Button title={'All'}/>*/}
        {/*<Button title={'Active'}/>*/}
        {/*<Button title={'Completed'}/>*/}
        <button onClick={() =>changeFilter()}>All</button>
        <button onClick={() =>changeFilter()}>Active</button>
        <button onClick={() =>changeFilter()}>Completed</button>
      </div>
    </div>
  )
}
