import { useState } from 'react'

export const useItemsDisplayed = () => {

  const ITEMS_ADDED = 5;

  const [itemsDisplayed,setItemsDisplayed] = useState(ITEMS_ADDED)

  const addMoreItems = () =>setItemsDisplayed(itemsDisplayed+ITEMS_ADDED)

  return {
    itemsDisplayed,
    addMoreItems
  }
}