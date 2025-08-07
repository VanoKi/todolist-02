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
    default:
      return state
  }
}
export const deleteTaskAC = ({todolistId, taskId}:{todolistId:string, taskId:string}) => {return {type: 'remove_task', payload: {todolistId, taskId}}}
export type DeleteTaskAC = ReturnType<typeof deleteTaskAC>
type Actions = CreateTodolistAction | DeleteTodolistAction | DeleteTaskAC