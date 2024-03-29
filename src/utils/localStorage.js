export function loadFromLocal(key) {
  const jsonString = localStorage.getItem(key)
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    console.log(error)
  }
}

export function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
