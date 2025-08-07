import {TodolistType} from "../App.tsx";

const initialState:TodolistType[] = []
export const todolistReducer = (state, action) => {
  switch (action.type) {

    default: return state
  }
}

type Avtions = {
  type: string
  payload: any
}

