import './App.css'
import {TodolistItem} from './TodolistItem'

export const App = () => {
  const tasks = [
    { id: 1, title: "Сделать зарядку", isDone: true },
    { id: 2, title: "Почитать 20 страниц книги", isDone: false },
    { id: 3, title: "Посмотреть учебное видео по React", isDone: false },
  ]

  const tasks2 = [
    { id: 4, title: "Ответить на письма", isDone: true },
    { id: 5, title: "Завершить задачу по верстке", isDone: false },
    { id: 6, title: "Созвон с командой в 15:00", isDone: false },
  ]

  const tasks3 = [
    { id: 7, title: "Сходить в парк", isDone: false },
    { id: 8, title: "Посмотреть фильм", isDone: false },
    { id: 9, title: "Позвонить родителям", isDone: true },
  ]

  return (
    <div className="app">
      <TodolistItem title="What to learn" tasks={tasks} truck2={crypto.randomUUID()}/>
      <TodolistItem title="What to learn 2" tasks={tasks2} truck2={crypto.randomUUID()}/>
      <TodolistItem title="What to learn 3" tasks={tasks3} truck2={crypto.randomUUID()}/>
    </div>
  )
}
