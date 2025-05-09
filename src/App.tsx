import './App.css'
import {TodolistItem} from './components/TodolistItem'
import {useState} from "react";
import {v1} from "uuid";

export type FilterValueType = 'All' | 'Active' | 'Completed'

export const App = () => {
  let [tasks, setTasks] = useState(
    [
      { id: v1(), title: "Do morning exercise", isDone: true },
      { id: v1(), title: "Read 20 pages of a book", isDone: false },
      { id: v1(), title: "Watch a React tutorial", isDone: false },
      { id: v1(), title: "Prepare lunch", isDone: true },
      { id: v1(), title: "Write in diary", isDone: false },
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

  const [val, setVal] = useState('All')
  const changeFilter = (val: FilterValueType) => {
    setVal(val)
  }
  const filter = () => {
    switch (val) {
      case 'Completed': {
        return tasks.filter(task => task.isDone)
      }
      case 'Active': {
        return tasks.filter(task => !task.isDone)
      }
      default: return tasks
    }
  }
  const removeTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
    // console.log(taskId)
  }
  const addTask = (newTitle: string) => {
    const newTask = { id: v1(), title: newTitle, isDone: false }
    setTasks([newTask, ...tasks])
  }
  const changeIsDone = (taskId: string) => {
    console.log(taskId)
  }

  return (
    <div className="app">
      <TodolistItem
        title="What to learn"
        tasks={filter()}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeIsDone={changeIsDone}
      />
    </div>
  )
}
