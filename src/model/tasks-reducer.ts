import type {TasksState} from '../App'
import {CreateTodolistAction} from "./todolist-reducer.ts";

const initialState: TasksState = {}

export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
  switch (action.type) {
    case 'create_todolist': {
      return {...state, [action.payload.id]:[]}
    }
    default:
      return state
  }
}

type Actions = CreateTodolistAction