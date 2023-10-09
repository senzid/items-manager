import { getSuspender } from "../../infrastructure/api"

export function fetchData (url: string): any {
    console.log(url)
    const promise = fetch(url)
      .then((response) => response.json())
      .then((data) => data)
  
    return getSuspender(promise)
  }