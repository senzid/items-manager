export function getSuspender (promise: Promise<unknown>): { read: () => unknown; } {
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

  const read = (): unknown => {
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
