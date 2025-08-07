import { beforeEach, expect, test } from 'vitest'
import {TodolistType} from "../App.tsx";
import { v1 } from 'uuid';
import {changeTodolistTitleAC, createTodolistAC, deleteTodolistAC, todolistReducer} from "./todolist-reducer.ts";

let todolistId1: string
let todolistId2: string
let startState: TodolistType[] = []

beforeEach(() => {
  todolistId1 = v1()
  todolistId2 = v1()

  startState = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ]
})

test('correct todolist should be deleted', () => {
  const endState = todolistReducer(startState, deleteTodolistAC(todolistId1))

  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistId2)
})

test('correct todolist should be created', () => {
  const title = 'New todolist'
  const endState = todolistReducer(startState, createTodolistAC(title))

  expect(endState.length).toBe(3)
  expect(endState[0].title).toBe(title)
})

test('correct todolist should change its title', () => {
  const title = 'New title'
  const endState = todolistReducer(startState, changeTodolistTitleAC({id: todolistId2, title}))

  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe(title)
})