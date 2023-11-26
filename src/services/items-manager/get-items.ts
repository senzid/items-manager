import { getSuspender } from "../../infrastructure/api/api"

export function fetchItems (url: string): any {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data)

  return getSuspender(promise)
}