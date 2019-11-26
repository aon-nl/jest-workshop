export function getData(url) {
  return Promise.resolve({resolved: true})
}

export function getDataWithDelay(url, delay) {
  const DataPromise = this.getData(url)
  const DelayPromise = new Promise(resolve => { setTimeout(resolve, delay)})

 return new Promise(resolve => {
     Promise.all([DataPromise, DelayPromise])
       .then(results => {
         resolve(results[0])
       })
 })
}
