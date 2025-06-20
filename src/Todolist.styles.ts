import {SxProps} from '@mui/material'

export const filterButtonsConteinerSx: SxProps = {
  display: 'flex',
  justifyContent: 'space-between'
}

export const getListItemSx = (isDone: boolean): SxProps => {
  return {
    p: 0,
    justifyContent:
      'space-between',
    opacity:
      isDone ? 0.5 : 1,
    textDecorationLine: isDone ? 'line-through' : 'none',
  }
}