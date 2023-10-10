import { useState, useEffect } from 'react'
import { SortProps } from '../item-manager'

export const useHandleFavorites = (favorites:any) => {
  
  const initialSorted: SortProps = {
    title:undefined,
    email:undefined,
    description:undefined,
    price: undefined
  }

  const [filteredFavorites, setFilteredFavorites] = useState(favorites);
  const [sortItems,setSortItems] = useState<SortProps>(initialSorted)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateFilteredFavorites = (newFavoritesList:any) => setFilteredFavorites([...newFavoritesList])
  const updateSortedItems = (newSortedItems:any) => setSortItems({...sortItems,...newSortedItems})

  const filterFavorites = (type:string,filter:string) => {
    const list = favorites
      type = 'title';
      if (filter==="") return updateFilteredFavorites(list)
      const newFavoritesList = list.filter((item:any)=>item[type].trim().toLowerCase().includes(filter.trim().toLowerCase()))
      updateFilteredFavorites(newFavoritesList) 
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(()=>{
      setFilteredFavorites(favorites)
    },[favorites])

  return {
      filteredFavorites,
      updateFilteredFavorites,
      sortItems,
      updateSortedItems,
      filterFavorites,
      isModalOpen,
      toggleModal,
  }
}