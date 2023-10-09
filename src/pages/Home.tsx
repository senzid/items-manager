import { Suspense, lazy } from 'react'
import { fetchData } from '../services/items-manager/get-items.ts'
// import MyComponent from './MyComponent.tsx'
const ItemsList = lazy(async () => await import('../features/items-manager/items-list/ItemsList.tsx'))

const apiData = fetchData('https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json')

const Home = (): JSX.Element => {
  const data = apiData.read()

  return (
    <main>
      <h1>Itempop Manager</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ItemsList data={data} />
      </Suspense>
    </main>
  )
}
export default Home