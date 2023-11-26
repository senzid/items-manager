import { Suspense, lazy } from 'react'
import { fetchItems } from '../services/items-manager/get-items.ts'
import apiPaths from '../services/apiPaths.ts'
const ItemsList = lazy(async () => await import('../features/items-manager/items-list/ItemsList.tsx'))

const apiData = fetchItems(apiPaths.ALLITEMS)

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