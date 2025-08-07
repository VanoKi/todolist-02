import './App.css'
import {TodolistItem} from './components/TodolistItem'
import {useReducer, useState} from "react";
import {v1} from "uuid";
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
  todolistReducer
} from "./model/todolist-reducer.ts";

export type FilterValueType = 'All' | 'Active' | 'Completed'
export type TodolistType = {id: string, title: string, filter: FilterValueType}
type ThemeMode = 'dark' | 'light'

export const App = () => {
  const todolistId1 = v1()
  const todolistId2 = v1()
  const [todolists, dispatchToTodolists] = useReducer(todolistReducer, [])
  const [tasks, setTasks] = useState({})

  const changeFilter = (todolistId: string, newFilter: FilterValueType) => {
    dispatchToTodolists(changeTodolistFilterAC({id: todolistId, filter: newFilter}))
  }

  const removeTask = (todolistID: string, taskId: string) => {
    setTasks({...tasks, [todolistID] : tasks[todolistID].filter(el => el.id !== taskId)})
  }
  const addTask = (todolistId:string, newTitle: string) => {
    const newTask = {id: v1(), title: newTitle, isDone: false}
    // setTasks([newTask, ...tasks])
    setTasks({...tasks, [todolistId]:[newTask, ...tasks[todolistId]]})
  }
  const changeIsDone = (todolistId: string, taskId: string, isDone: boolean) => {
    setTasks({...tasks, [todolistId]:tasks[todolistId].map(el => el.id === taskId ? {...el, isDone} : el)})
  }
  const removeTodolist = (todolistId: string) => {
    dispatchToTodolists(todolistId)
  }
  const addTodolist = (title: string) => {
    dispatchToTodolists(createTodolistAC(title))
  }
  const updatedTaskTitle = (todolistId:string, taskId: string, updatedTitle: string) => {
    setTasks({...tasks, [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, title: updatedTitle} :  el)})
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
              <Paper elevation={5} sx={{p: '30px'}}>
                <TodolistItem
                  key={el.id}
                  todolistId={el.id}
                  title={el.title}
                  tasks={tasks[el.id]}
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
