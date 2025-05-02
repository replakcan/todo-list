import { readDataFromLocalStorage } from './lib/readDataFromLocalStorage'

export const todoArr = readDataFromLocalStorage('todos') || []
