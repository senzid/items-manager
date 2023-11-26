import { useState } from 'react'
import { ItemType } from '../item-manager';

export const useHandleItems = (initialData:ItemType[]) => {
  const [items,setItems] = useState(initialData);
  const [favorites, setFavorites] = useState<[]|ItemType[]>([]);

  const updateItems = (itemsNew:ItemType[]) => setItems([...itemsNew])

  const updateFavorites = (favoritesNew:ItemType[]) => setFavorites([...favorites,...favoritesNew])

  const resetFavorites = (favoritesNew:ItemType[]) => setFavorites([...favoritesNew])

  const isItemFavorite = (e:string) => {
    return favorites.find((item:ItemType)=>item.title === e)?true:false;
  }

  const handleUpdateFavorites = (e:string) => {
    const isFavorite = isItemFavorite(e)
    if (isFavorite) {
      const newFavorites:ItemType[] = favorites.filter((item:ItemType)=>item.title !== e);
      resetFavorites(newFavorites)
    } else {
      const selectedItem:ItemType[] = items.filter((item:ItemType)=>item.title === e);
      updateFavorites(selectedItem)
    }
  }

  const filterElements = (type:string,filter:string) => {
    console.log(filter,type)
    const isFavorite = type ==="Favorite title"? true:false;
    const list = isFavorite ? favorites : initialData
    if (isFavorite) {
      type = 'title';
      if (filter==="") return resetFavorites(list)
      const newFavoritesList = list.filter((item:any)=>item[type].trim().toLowerCase().includes(filter.trim().toLowerCase()))
      resetFavorites(newFavoritesList)
    } else {
      if (filter==="") return updateItems(list)
      let newItemsList
      if (type==="price") {
        console.log(list,filter)
        newItemsList = list.filter((item:any)=>item.price.toString().startsWith(filter))
      } else if (type === "category") {
        newItemsList = list.filter((item:any)=>item[type].name.trim().toLowerCase().includes(filter.trim().toLowerCase()))
      } else {
        newItemsList = list.filter((item:any)=>item[type].trim().toLowerCase().includes(filter.trim().toLowerCase()))
      }
      updateItems(newItemsList)
    }
  }

  const sortElements = (filter:any,sortElement:any) => {
    const isFavorite = filter ==="Favorite title"? true:false;
    if (isFavorite && favorites.length===0) return
    filter = isFavorite? 'title':filter
    const list = isFavorite ? favorites : items
    const convertToNumber = filter === 'price'? true:false;
    if (sortElement==='down') {
      list.sort((a:any, b:any) => {
        const itemA = convertToNumber? Number(a[filter]) : a[filter].toUpperCase();
        const itemB = convertToNumber? Number(b[filter]) : b[filter].toUpperCase();
        if (itemA > itemB) {
          return -1;
        }
        if (itemA < itemB) {
          return 1;
        }
        return 0;
      });
      
    } else {
      list.sort((a:any, b:any) => {
        const itemA = convertToNumber? Number(a[filter]) : a[filter].toUpperCase();
        const itemB = convertToNumber? Number(b[filter]) : b[filter].toUpperCase();
        if (itemA < itemB) {
          return -1;
        }
        if (itemA > itemB) {
          return 1;
        }
        return 0;
      });
    }
    if (isFavorite) {
      resetFavorites(list)
    } else {
      updateItems(list)
    }
  }

  return {
    items,
    updateItems,
    favorites,
    handleUpdateFavorites,
    filterElements,
    sortElements,
    isItemFavorite
  }
}