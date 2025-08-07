import {v1} from 'uuid'
import { expect, test } from 'vitest'
import type {TodolistType} from '../App'
import {deleteTodolistAC, todolistReducer} from './todolist-reducer'

test('correct todolist should be deleted', () => {
  const todolistId1 = v1()
  const todolistId2 = v1()

  // 1. Стартовый state
  const startState: TodolistType[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]

  // 2. Действие
  const endState = todolistReducer(startState, deleteTodolistAC(todolistId1))

  // 3. Проверка, что действие измененило state соответствующим образом
  // в массиве останется один тудулист
  expect(endState.length).toBe(1)
  // удалится нужный тудулист, не любой
  expect(endState[0].id).toBe(todolistId2)
})