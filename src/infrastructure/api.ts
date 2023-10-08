function getSuspender (promise: any): any {
  let status = 'pending'
  let response: any

  const suspender = promise.then(
    (res: any) => {
      status = 'success'
      response = res
    },
    (err: any) => {
      status = 'error'
      response = err
    }
  )

  const read = (): any => {
    switch (status) {
      case 'pending':
        throw suspender
      case 'error':
        throw response
      default:
        return response
    }
  }

  return { read }
}

export function fetchData (url: string): any {
  console.log(url)
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data)

  return getSuspender(promise)
}
