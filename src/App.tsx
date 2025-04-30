import './App.css'
import {TodolistItem} from './TodolistItem'

export const App = () => {
  const tasks = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'ReactJS', isDone: false},
  ]

  const tasks2 = [
    {id: 4, title: 'Redux', isDone: false},
    {id: 5, title: 'Typescript', isDone: false},
    {id: 6, title: 'RTK query', isDone: false},
  ]

  return (
    <div className="app">
      <TodolistItem title="What to learn" tasks={tasks} truck2={crypto.randomUUID()}/>
      <TodolistItem title="What to learn 2" tasks={tasks2} truck2={crypto.randomUUID()}/>
      <TodolistItem title="What to learn 3" tasks={tasks} truck2={crypto.randomUUID()}/>
    </div>
  )
}
