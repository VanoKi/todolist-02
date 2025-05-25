import {Task} from "../Task.tsx";
import {FilterValueType} from "../App.tsx";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";

type TodoListItemProps = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (todolistID: string, taskId: string) => void
  changeFilter: (val: FilterValueType) => void
  addTask: (todolistId: string, newTitle: string) => void
  changeIsDone: (todolistId: string, taskId: string, isDone: boolean) => void
  filter:FilterValueType
  todolistId: string
  removeTodolist: (todolistId: string) => void
}
export type TaskProps = {
  id: string
  title: string
  isDone: boolean
}

export const TodolistItem = ({
                               title,
                               tasks,
                               removeTask,
                               changeFilter,
                               addTask,
                               changeIsDone,
                               filter,
                               todolistId,
                               removeTodolist
}: TodoListItemProps) => {

  const mappedTasks = tasks.map(task => {

    return (
      <Task
        id={task.id}
        key={task.id}
        title={task.title}
        isDone={task.isDone}
        removeTask={() => removeTask(todolistId, task.id)}
        changeIsDone={changeIsDone}
        todolistId={todolistId}
      />
    )
  })

  const [newTitle, setNewTitle] = useState('')
  const [error, setError] = useState<string | null>('')

  const changeFilterHAndler = (val: FilterValueType) => {
    changeFilter(val)
  }
  const addTaskHandler = () => {
    if (newTitle.trim()) {
      addTask(todolistId, newTitle.trim())
      setNewTitle('')
    } else {
      setError('Title is required!')
    }
  }
  const oneKeyDawnHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        addTaskHandler()
      }
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
    setError(null)
  }

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <Button title={'x'} onClick={() => removeTodolist(todolistId)}/>
      </div>
      <div>
        <Input
          placeholder={'Enter the task'}
          value={newTitle}
          onKeyDown={(e) => oneKeyDawnHandler(e)}
          onChange={(e) => onChangeHandler(e)}
          className={error ? 'error' : ''}
          title={'+'}
          onClick={addTaskHandler}
        />
        {error && <p className={'error-message'}>{error}</p>}
      </div>
      {tasks.length === 0 ? (
        <p>There are no tasks</p>
      ) : (
        <ul>
          {mappedTasks}
        </ul>
      )}
      <div>
        <Button
          className={filter === 'All' ? 'active-filter' : ''}
          title={'All'}
          onClick={() => changeFilterHAndler('All')}/>
        <Button
          className={filter === 'Active' ? 'active-filter' : ''}
          title={'Active'}
          onClick={() => changeFilterHAndler('Active')}/>
        <Button
          className={filter === 'Completed' ? 'active-filter' : ''}
          title={'Completed'}
          onClick={() => changeFilterHAndler('Completed')}/>
      </div>
    </div>
  )
}
