import './App.css'
import {TodolistItem} from './components/TodolistItem'
import {useState} from "react";
import {v1} from "uuid";

export type FilterValueType = 'All' | 'Active' | 'Completed'
export type TodolistType = {id: string, title: string, filter: FilterValueType}

export const App = () => {
  const arr:TodolistType[] = [
    {id: v1(), title: "What to learn", filter: 'All'},
    {id: v1(), title: "What to learn-1", filter: 'All'},
    {id: v1(), title: "What to learn-2", filter: 'All'}
  ]
  let [todolists, setTodolists] = useState<TodolistType>(arr)
  let [tasks, setTasks] = useState(
    [
      {id: v1(), title: "Do morning exercise", isDone: true},
      {id: v1(), title: "Read 20 pages of a book", isDone: false},
      {id: v1(), title: "Watch a React tutorial", isDone: false},
      {id: v1(), title: "Prepare lunch", isDone: true},
      {id: v1(), title: "Write in diary", isDone: false},
    ]
  )
  // const tasksWork = [
  //   { id: 6, title: "Check and reply to emails", isDone: true },
  //   { id: 7, title: "Finish layout task", isDone: false },
  //   { id: 8, title: "Team call at 3 PM", isDone: false },
  //   { id: 9, title: "Fix bugs from yesterday", isDone: true },
  //   { id: 10, title: "Review pull requests", isDone: false },
  // ]
  // const tasksWeekend = [
  //   { id: 11, title: "Go for a walk in the park", isDone: false },
  //   { id: 12, title: "Watch a movie", isDone: true },
  //   { id: 13, title: "Call parents", isDone: true },
  //   { id: 14, title: "Clean the kitchen", isDone: false },
  //   { id: 15, title: "Play a board game", isDone: false },
  // ]

  // const [val, setVal] = useState('All')

  const changeFilter = (todolistId: string, newFilter: FilterValueType) => {
   /* const currentTodo = todolists.find(el => el.id === todolistId)
    if (currentTodo) {
      currentTodo.filter = newFilter
    }
    setTodolists([...todolists])*/
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
  const removeTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
    // console.log(taskId)
  }
  const addTask = (newTitle: string) => {
    const newTask = {id: v1(), title: newTitle, isDone: false}
    setTasks([newTask, ...tasks])
  }
  const changeIsDone = (taskId: string, isDone: boolean) => {
    // const currentTask = tasks.find((el) => el.id === taskId)
    // if (currentTask) currentTask.isDone = !currentTask.isDone
    // setTasks([...tasks])
    setTasks(tasks.map(el => el.id === taskId ? {...el, isDone: isDone} : el))
  }

  return (
    <div className="app">
      {todolists.map((mappedTasks) => {
        let tasksForTodolist = tasks
        if (mappedTasks.filter === 'Active') {
          tasksForTodolist = tasks.filter(task => !task.isDone)
        }
        if (mappedTasks.filter === 'Completed') {
          tasksForTodolist = tasks.filter(task => task.isDone)
        }
        return (
          <TodolistItem
            key={mappedTasks.id}
            todolistId={mappedTasks.id}
            title={mappedTasks.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={(filter) => changeFilter(mappedTasks.id, filter)}
            addTask={addTask}
            changeIsDone={changeIsDone}
            filter={mappedTasks.filter}
          />
        )
      })}
    </div>
  )
}
