import {Task} from "../Task.tsx";
import {FilterValueType} from "../App.tsx";
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

  let tasksForTodolist = tasks
  if (filter === 'Active') {
    tasksForTodolist = tasks.filter(task => !task.isDone)
  }
  if (filter === 'Completed') {
    tasksForTodolist = tasks.filter(task => task.isDone)
  }
  const mappedTasks = tasksForTodolist.map(task => {

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

  const changeFilterHAndler = (val: FilterValueType) => {
    changeFilter(val)
  }

  return (
    <div className={'todolist'}>
      <div>
        <h2>{title}</h2>
        <Button title={'x'} onClick={() => removeTodolist(todolistId)}/>
      </div>
      <p>{todolistId}</p>
      <p>{new Date().toLocaleTimeString()}</p>
      <div>
        <Input
          placeholder={'Enter the task'}
          buttonTitle={'+'}
          onSubmit={(newTitle) => addTask(todolistId, newTitle)}
        />
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
