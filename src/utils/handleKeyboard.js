export const handleKeyboard = (handleNumberClick) => {
  const keydownFunction = (target) => {
    const newTarget = { target: { textContent: target.key } }
    return handleNumberClick(newTarget)
  }

  document.addEventListener('keydown', keydownFunction)

  return function cleanup() {
    document.removeEventListener('keydown', keydownFunction)
  }
}

export const handleEqual = (handleEqual) => {
  const keydownFunction = (target) => {
    if (target.key === 'Enter') {
      handleEqual()
    }
  }

  document.addEventListener('keydown', keydownFunction)

  return function cleanup() {
    document.removeEventListener('keydown', keydownFunction)
  }
}

export const handleClear = (handleClear) => {
  const keydownFunction = (target) => {
    if (target.key === 'C' || target.key === 'c' || target.key === 'Escape') {
      handleClear()
    }
  }

  document.addEventListener('keydown', keydownFunction)

  return function cleanup() {
    document.removeEventListener('keydown', keydownFunction)
  }
}

export const handleLastChar = (handleLastChar) => {
  const keydownFunction = (target) => {
    console.log(target.key)
    if (target.key === 'Backspace') {
      handleLastChar()
    }
  }

  document.addEventListener('keydown', keydownFunction)

  return function cleanup() {
    document.removeEventListener('keydown', keydownFunction)
  }
}
