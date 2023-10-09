export function getSuspender (promise: any): any {
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
