import {Task} from "./Task.tsx";
import {FilterValueType} from "../App.tsx";
import Button from '@mui/material/Button';
import {Input} from "./Input.tsx";
import {EditableSpan} from "./EditableSpan.tsx";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import {Box} from "@mui/material";
import {filterButtonsConteinerSx} from "../Todolist.styles.ts";

type TodoListItemProps = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (todolistID: string, taskId: string) => void
  changeFilter: (val: FilterValueType) => void
  addTask: (todolistId: string, newTitle: string) => void
  changeIsDone: (todolistId: string, taskId: string, isDone: boolean) => void
  filter: FilterValueType
  todolistId: string
  removeTodolist: (todolistId: string) => void
  updatedTaskTitle: (todolistId: string, taskId: string, updatedTitle: string) => void
  updatedTitle: (todolistId:string, newTitle:string) => void
}
export type TaskProps = {
  id: string
  title: string
  isDone: boolean
}

export const TodolistItem = (props: TodoListItemProps) => {
  const {title, tasks, removeTask, changeFilter, addTask, changeIsDone, filter, todolistId,removeTodolist, updatedTaskTitle, updatedTitle} = props

  let tasksForTodolist = tasks
  if (filter === 'Active') {
    tasksForTodolist = tasks.filter(task => !task.isDone)
  }
  if (filter === 'Completed') {
    tasksForTodolist = tasks.filter(task => task.isDone)
  }
  const changeFilterHAndler = (val: FilterValueType) => {
    changeFilter(val)
  }
  const updatedTitleHandler = () => {
    updatedTitle(title, todolistId)
  }
  const updateTaskTitleHandler = (taskId:string, title: string) => {
    updatedTaskTitle(todolistId, taskId, title)
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
        updatedTaskTitleHandler={updateTaskTitleHandler}
      />
    )
  })
  return (
    <div className={'todolist'}>
      <div className={'heaadline'}>
        <h2>
          <EditableSpan title={title} onClick={updatedTitleHandler}/>
        </h2>
        {/*<Button title={'x'} onClick={() => removeTodolist(todolistId)}/>*/}
        <IconButton aria-label="delete"
                    onClick={() => removeTodolist(todolistId)}>
          <DeleteIcon fontSize="small"/>
        </IconButton>
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
        <List>
          {mappedTasks}
        </List>
      )}
      <Box sx={filterButtonsConteinerSx}>
        <Button variant={filter == 'All' ? "outlined" : "contained"} color="success" size={'small'} onClick={() => changeFilterHAndler('All')}>
          All
        </Button>
        <Button variant={filter == 'Active' ? "outlined" : "contained"} color="error" size={'small'} onClick={() => changeFilterHAndler('Active')}>
          Active
        </Button>
        <Button variant={filter == 'Completed' ? "outlined" : "contained"} color="secondary" size={'small'} onClick={() => changeFilterHAndler('Completed')}>
          Completed
        </Button>
      </Box>
    </div>
  )
}
