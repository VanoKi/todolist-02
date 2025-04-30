import {Button} from './Button'

type Props = {
  title: string
  tasks: TaskProps[]
  truck2?: string
}
type TaskProps = {
  id: number
  title: string
  isDone: boolean
}

export const TodolistItem = ({title, tasks, truck2}: Props) => {
  const mappedTasks = tasks.map(task => {
      return (
        <li key={task.id}>
          <input type="checkbox" checked={task.isDone}/>
          <span>{task.title}</span>
        </li>
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
        <Button title={'All'}/>
        <Button title={'Active'}/>
        <Button title={'Completed'}/>
      </div>
    </div>
  )
}
