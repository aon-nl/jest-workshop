export function throwsWhen(isTrue) {
  if (!isTrue) {
    return
  }
  throw new Error('isTrue')
}
