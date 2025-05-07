import {Task} from "../Task.tsx";
import {FilterValueType} from "../App.tsx";
import {useRef, useState} from "react";

type Props = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (taskId: string) => void
  changeFilter: (val: FilterValueType) => void
  addTask: (newTitle: string) => void
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
                               addTask
}: Props) => {

  const mappedTasks = tasks.map(task => {
    return (
      <Task
        id={task.id}
        key={task.id}
        title={task.title}
        isDone={task.isDone}
        removeTask={() => removeTask(task.id)}/>
    )
  })

  const [newTitle, setNewTitle] = useState('')

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          onChange={(event) => setNewTitle(event.target.value)}
        />
        {/*<Button title={'+'}/>*/}
        <button
          onClick={()=>{
            addTask(newTitle)
          }}
        >+</button>
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
