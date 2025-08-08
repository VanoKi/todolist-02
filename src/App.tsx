import './App.css'
import {TodolistItem} from './components/TodolistItem'
import {useReducer, useState} from "react";
import {Input} from "./components/Input.tsx";
import {MyAppBar} from "./components/MyAppBar.tsx"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import {
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  createTodolistAC,
  deleteTodolistAC,
  todolistReducer
} from "./model/todolist-reducer.ts";
import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  createTaskAC,
  deleteTaskAC,
  tasksReducer
} from "./model/tasks-reducer.ts";

export type FilterValueType = 'All' | 'Active' | 'Completed'
export type TodolistType = {id: string, title: string, filter: FilterValueType}
export type TaskType = {id: string, title: string, isDone: boolean}
export type TasksState = {[key: string] : TaskType[]}
type ThemeMode = 'dark' | 'light'

export const App = () => {
  const [todolists, dispatchToTodolists] = useReducer(todolistReducer, [])
  const [tasks, dispatchTasks] = useReducer(tasksReducer, {})

  const changeFilter = (todolistId: string, newFilter: FilterValueType) => {
    dispatchToTodolists(changeTodolistFilterAC({id: todolistId, filter: newFilter}))
  }

  const removeTask = (todolistId: string, taskId: string) => {
    dispatchTasks(deleteTaskAC({todolistId, taskId}))
  }
  const addTask = (todolistId:string, newTitle: string) => {
    dispatchTasks(createTaskAC({todolistId, newTitle}))
  }
  const changeIsDone = (todolistId: string, taskId: string, isDone: boolean) => {
    dispatchTasks(changeTaskStatusAC({todolistId, taskId, isDone}))
  }
  const removeTodolist = (todolistId: string) => {
    dispatchToTodolists(deleteTodolistAC(todolistId))
  }
  const addTodolist = (title: string) => {
    const action = createTodolistAC(title)
    dispatchToTodolists(action)
    dispatchTasks(action)
  }
  const updatedTaskTitle = (todolistId:string, taskId: string, updatedTitle: string) => {
    dispatchTasks(changeTaskTitleAC({todolistId, taskId, updatedTitle}))
  }
  const updatedTitle = (todolistId: string, newTitle:string) => {
    dispatchToTodolists(changeTodolistTitleAC({id: todolistId, title: newTitle}))
  }

  const [themeMode, setThemeMode] = useState<ThemeMode>('light')
  const theme = createTheme({
    palette: {
      mode: themeMode === 'light' ? 'light' : 'dark',
      primary: {
        main: 'rgba(98,166,127,0.98)'
      }
    }
  });

  const changeModeHandler = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <MyAppBar onSwitch={changeModeHandler}/>
        <Paper elevation={7} sx={{p: '30px'}}>
          <Input placeholder={'Enter title of the todolist'} buttonTitle={'+'} onSubmit={addTodolist}/>
        </Paper>
        <Grid container sx={{p: '30px'}} spacing={4}>
          {todolists.map(el => {
            return (
              <Paper key={el.id} elevation={5} sx={{p: '30px'}}>
                <TodolistItem
                  todolistId={el.id}
                  title={el.title}
                  tasks={tasks[el.id] ?? []}
                  removeTask={removeTask}
                  changeFilter={(filter) => changeFilter(el.id, filter)}
                  addTask={addTask}
                  changeIsDone={changeIsDone}
                  filter={el.filter}
                  removeTodolist={removeTodolist}
                  updatedTaskTitle={updatedTaskTitle}
                  updatedTitle={updatedTitle}
                />
              </Paper>
            )
          })}
        </Grid>
        <CssBaseline/>
      </ThemeProvider>
    </div>
  )
}
