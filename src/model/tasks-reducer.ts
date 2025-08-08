import type {TasksState} from '../App'
import {CreateTodolistAction, DeleteTodolistAction} from "./todolist-reducer.ts";
import {v1} from "uuid";

const initialState: TasksState = {}

export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
  console.log('task reducder recided action', action)
  switch (action.type) {
    case 'create_todolist': {
      return {...state, [action.payload.id]:[]}
    }
    case 'delete_todolist': {
      const newState = {...state}
      delete newState[action.payload.id]
      return newState
    }
    case 'remove_task': {
      const {todolistId, taskId} = action.payload
      return {...state, [todolistId] : state[todolistId].filter(task => task.id !== taskId)}
    }
    case 'create_task': {
      const {todolistId, newTitle} = action.payload
      const newTask = {id: v1(), title: newTitle, isDone: false}
      return {...state, [todolistId]:[newTask, ...state[todolistId]]}
    }
    case 'change_task_status': {
      const {todolistId, taskId, isDone} = action.payload
      return {...state, [todolistId]:state[todolistId].map(task => task.id === taskId ? {...task, isDone} : task)}
    }
    case 'change_task_title': {
      const {todolistId, taskId, updatedTitle} = action.payload
      return  {...state, [todolistId]:state[todolistId].map(task => task.id === taskId ? {...task, title: updatedTitle} : task)}
    }
    default:
      return state
  }
}
export const deleteTaskAC = ({todolistId, taskId}:{todolistId:string, taskId:string}) => {
  return {type: 'remove_task', payload: {todolistId, taskId}} as const
}
export const createTaskAC = ({todolistId, newTitle}:{todolistId:string, newTitle:string}) => {return {type: 'create_task', payload: {todolistId, newTitle}} as const}
export const changeTaskStatusAC = ({todolistId, taskId, isDone}:{todolistId: string, taskId: string, isDone: boolean}) => {return {type: 'change_task_status', payload: {todolistId, taskId, isDone} } as const }
export const changeTaskTitleAC = ({todolistId, taskId, updatedTitle}:{todolistId:string, taskId: string, updatedTitle: string}) => {return {type: 'change_task_title', payload: {todolistId, taskId, updatedTitle}} as const }

export type DeleteTaskAC = ReturnType<typeof deleteTaskAC>
export type CreateTaskAC = ReturnType<typeof createTaskAC>
export type ChangeTaskStatusAC = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleAC = ReturnType<typeof changeTaskTitleAC>
type Actions = CreateTodolistAction | DeleteTodolistAction | DeleteTaskAC | CreateTaskAC | ChangeTaskStatusAC | ChangeTaskTitleAC