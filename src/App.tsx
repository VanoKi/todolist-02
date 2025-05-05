import './App.css'
import {TodolistItem} from './components/TodolistItem'

export const App = () => {
  const tasksToday = [
    { id: 1, title: "Do morning exercise", isDone: true },
    { id: 2, title: "Read 20 pages of a book", isDone: false },
    { id: 3, title: "Watch a React tutorial", isDone: false },
    { id: 4, title: "Prepare lunch", isDone: true },
    { id: 5, title: "Write in diary", isDone: false },
  ]
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

  const removeTask = () => {
    console.log('click')
  }

  return (
    <div className="app">
      <TodolistItem
        title="What to learn"
        tasks={tasksToday}
        truck2={crypto.randomUUID()}
        removeTask={removeTask}
      />
      {/*<TodolistItem title="What to learn 2" tasks={tasksWork} truck2={crypto.randomUUID()}/>*/}
      {/*<TodolistItem title="What to learn 3" tasks={tasksWeekend} truck2={crypto.randomUUID()}/>*/}
    </div>
  )
}
