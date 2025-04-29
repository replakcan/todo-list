export function writeDataInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
