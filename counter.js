const setupCounter = (addBtn, resetBtn) => {
  // Initial counter and setter function
  let counter = 0
  const setCounter = (count) => {
    counter = count
    addBtn.innerHTML = `count is ${counter}`
    setStorage.update(counter)
  }

  // Storage manage methods
  const setStorage = {
    initialState: () => {
      let counterStorage = localStorage.getItem("counter") ? true : false
      if(counterStorage) {
        setCounter(Number(localStorage.getItem("counter")))
      } else {
        let initialValue = 0
        setCounter(initialValue)
        localStorage.setItem("counter", initialValue)
      }
    },
    update: (newValue) => {
      localStorage.setItem("counter", newValue)
    }
  }

  // Listeners for buttons
  addBtn.addEventListener('click', () => {
    setCounter(Number(counter + 1))
  })
  resetBtn.addEventListener('click', () => {
    setCounter(Number(0))
  })
  window.addEventListener('storage', () => {
    setStorage.initialState()
  })
}

export { setupCounter }