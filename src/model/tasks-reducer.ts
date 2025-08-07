import type {TasksState} from '../App'
import {CreateTodolistAction, DeleteTodolistAction} from "./todolist-reducer.ts";

const initialState: TasksState = {}

export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
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
      const [todolistId, taskId] = action.payload
      return {...state, [todolistId] : state[todolistId].filter(task => task.id !== taskId)}
    }
    case 'create_task': {
      const [todolistId, newTitle] = action.payload
      return {...state, [todolistId]:[newTitle, ...state[todolistId]]}
    }
    default:
      return state
  }
}
export const deleteTaskAC = ({todolistId, taskId}:{todolistId:string, taskId:string}) => {return {type: 'remove_task', payload: {todolistId, taskId}}}
export const createTaskAC = ({todolistId, newTitle}:{todolistId:string, newTitle:string}) => {return {type: 'create_task', payload: {todolistId, newTitle}}}
export type DeleteTaskAC = ReturnType<typeof deleteTaskAC>
export type CreateTaskAC = ReturnType<typeof createTaskAC>
type Actions = CreateTodolistAction | DeleteTodolistAction | DeleteTaskAC | CreateTaskAC