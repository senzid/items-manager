import { useCallback } from 'react'
import { ItemCard } from '../../../components/cards/item-card/ItemCard.tsx'
import './ItemsList.scss'
import { ItemHeader } from '../items-header/ItemHeader.tsx'
import { Button } from '../../../components/button/Button.tsx'
import { useItemsDisplayed } from './useItemsDisplayed.ts'
import { useHandleItems } from './useHandleItems.ts'
import { ItemType } from '../item-manager'

const ItemList: React.FC<{ data: any }> = ({ data }: { data: any }) => {
  const {itemsDisplayed,addMoreItems} = useItemsDisplayed()
  const {items,updateItems,favorites,handleUpdateFavorites, filterElements, sortElements,isItemFavorite} = useHandleItems(data.slice(0, itemsDisplayed))

  const handleFavorites = useCallback(handleUpdateFavorites,[favorites])

  const sortList = useCallback(sortElements,[items,favorites])

  const handleFilter = useCallback(filterElements,[items,favorites])

  const handleShowMore = () => {
    if (itemsDisplayed>data.length)return
    addMoreItems()
    updateItems(data.slice(0, itemsDisplayed+5))
  }

  return (
    <>
      <ItemHeader favorites={favorites} handleFavorites={handleFavorites} sortList={sortList} handleFilter={handleFilter} />
      <section className='items-container'>
        {items.map((item:ItemType) => {
          const isFavorite =isItemFavorite(item.title)
          return <ItemCard isFavorite={isFavorite} handleFavorites={handleFavorites} key={`item_${item.title.trim()}`} item={item} />
        })}
      </section>
      <div className='footer-button'>
        <Button onClick={handleShowMore}>View More</Button>
      </div>
    </>
  )
}

export default ItemList