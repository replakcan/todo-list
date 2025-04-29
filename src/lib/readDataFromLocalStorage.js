export function readDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
