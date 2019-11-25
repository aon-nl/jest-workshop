export function setAlarm(callback, timeout) {
  setTimeout(() => {
    callback()
  }, timeout)
}
