import {Button} from './Button'
import {Task} from "../Task.tsx";
import {FilterValueType} from "../App.tsx";

type Props = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (taskId: string) => void
  filter: (val: FilterValueType) => void
  changeFilter: (val: FilterValueType) => void
}
type TaskProps = {
  id: string
  title: string
  isDone: boolean
}

export const TodolistItem = ({
                               title,
                               tasks,
                               removeTask,
                               changeFilter,
                               filter
}: Props) => {

  const mappedTasks = filter().map(task => {
    return (
      <Task
        id={task.id}
        key={task.id}
        title={task.title}
        isDone={task.isDone}
        removeTask={() => removeTask(task.id)}/>
    )
  })

  return (
    <div>
      <h3>{title}</h3>
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
        <button onClick={() =>changeFilter('All')}>All</button>
        <button onClick={() =>changeFilter('Active')}>Active</button>
        <button onClick={() =>changeFilter('Completed')}>Completed</button>
      </div>
    </div>
  )
}
