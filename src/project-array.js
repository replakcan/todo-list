import { readDataFromLocalStorage } from './lib/readDataFromLocalStorage'

export const projectArr = readDataFromLocalStorage('projects') || []
