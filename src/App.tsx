import './App.css'
import {TodolistItem} from './components/TodolistItem'
import {useState} from "react";
import {v1} from "uuid";

export type FilterValueType = 'All' | 'Active' | 'Completed'
export type TodolistType = {id: string, title: string, filter: FilterValueType}

export const App = () => {
  const todolistId1 = v1()
  const todolistId2 = v1()
  const todolistId3 = v1()

  const [todolists, setTodolists] = useState<TodolistType[]>([
    { id: todolistId1, title: 'What to learn', filter: 'All' },
    { id: todolistId2, title: 'What to buy', filter: 'All' },
    { id: todolistId3, title: 'What to buy', filter: 'All' },
  ])

  const [tasks, setTasks] = useState({
    [todolistId1]: [
      {id: v1(), title: "Do morning exercise", isDone: true},
      {id: v1(), title: "Read 20 pages of a book", isDone: false},
      {id: v1(), title: "Watch a React tutorial", isDone: false},
      {id: v1(), title: "Prepare lunch", isDone: true},
      {id: v1(), title: "Write in diary", isDone: false},
    ],
    [todolistId2]: [
      { id: v1(), title: "Check and reply to emails", isDone: true },
      { id: v1(), title: "Finish layout task", isDone: false },
      { id: v1(), title: "Team call at 3 PM", isDone: false },
      { id: v1(), title: "Fix bugs from yesterday", isDone: true },
      { id: v1(), title: "Review pull requests", isDone: false },
    ],
    [todolistId3]:[
        { id: v1(), title: "Go for a walk in the park", isDone: false },
        { id: v1(), title: "Watch a movie", isDone: true },
        { id: v1(), title: "Call parents", isDone: true },
        { id: v1(), title: "Clean the kitchen", isDone: false },
        { id: v1(), title: "Play a board game", isDone: false },
    ]
  })

  const changeFilter = (todolistId: string, newFilter: FilterValueType) => {
    setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: newFilter} : el))
  }
  // const filter = () => {
  //   switch (val) {
  //     case 'Completed': {
  //       return tasks.filter(task => task.isDone)
  //     }
  //     case 'Active': {
  //       return tasks.filter(task => !task.isDone)
  //     }
  //     default:
  //       return tasks
  //   }
  // }
  const removeTask = (todolistID: string, taskId: string) => {
    setTasks({...tasks, [todolistID] : tasks[todolistID].filter(el => el.id !== taskId)})
  }
  const addTask = (todolistId:string, newTitle: string) => {
    const newTask = {id: v1(), title: newTitle, isDone: false}
    // setTasks([newTask, ...tasks])
    setTasks({...tasks, [todolistId]:[newTask, ...tasks[todolistId]]})
  }
  const changeIsDone = (todolostId: string, taskId: string, isDone: boolean) => {
    setTasks({...tasks, [todolostId]:tasks[todolostId].map(el => el.id === taskId ? {...el, isDone} : el)})
  }
  const removeTodolist = (todolistID: string) => {
    setTodolists(todolists.filter(todoList => todoList.id !== todolistID))
    // setTasks(tasks.filter(taskList => taskList !== todolistID))
    delete tasks[todolistID]
  }

  return (
    <div className="app">
      {todolists.map(el => {
        let tasksForTodolist = tasks[el.id]
        if (el.filter === 'Active') {
          tasksForTodolist = tasks[el.id].filter(task => !task.isDone)
        }
        if (el.filter === 'Completed') {
          tasksForTodolist = tasks[el.id].filter(task => task.isDone)
        }
        return (
          <TodolistItem
            key={el.id}
            todolistId={el.id}
            title={el.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={(filter) => changeFilter(el.id, filter)}
            addTask={addTask}
            changeIsDone={changeIsDone}
            filter={el.filter}
            removeTodolist={removeTodolist}
          />
        )
      })}
    </div>
  )
}
