import { Modal } from '../../../components/modal/Modal.tsx'
import './ItemHeader.scss'
import { Button } from '../../../components/button/Button.tsx'
import { FavoriteCard } from '../../../components/cards/favorite-card/FavoriteCard.tsx'
import { Input } from '../../../components/input/Input.tsx'
import { useHandleFavorites } from './useHandleFavorites.ts'
import { SortProps, ItemType, HeaderType, SortTypesProps } from '../item-manager'

export const ItemHeader: React.FC<HeaderType> = ({ favorites,handleFavorites,sortList,handleFilter }) => {
  
  const {filteredFavorites,sortItems,updateSortedItems,filterFavorites,isModalOpen,toggleModal} = useHandleFavorites(favorites)
  const initialSorted: SortProps = {
    title:undefined,
    email:undefined,
    description:undefined,
    price: undefined
  }

  const handleSort = (filter:string) => {
    let sortElement:SortTypesProps;
    let sortedItems = initialSorted
    if (sortItems[filter as keyof SortProps] === undefined) {
      sortElement = 'up'
    } else {
      sortElement = sortItems[filter as keyof SortProps] === 'up'?'down':'up'
    }
    sortedItems[filter as keyof SortProps] = sortElement;
    sortList(filter,sortElement)
    updateSortedItems({...sortedItems})
  }

  const handleFavoriteFilter = filterFavorites;

  const toggle = toggleModal;

  return (
    <>
      <div className='header-container'>
        <Input key="title" placeholder='title' handleSort={handleSort} sorted={sortItems.title} handleFilter={handleFilter}/>
        <Input key="email" placeholder='email' handleSort={handleSort} sorted={sortItems.email} handleFilter={handleFilter}/>
        <Input key="price" placeholder='price' handleSort={handleSort} sorted={sortItems.price} handleFilter={handleFilter}/>
        <Input key="description" placeholder='description' handleSort={handleSort} sorted={sortItems.description} handleFilter={handleFilter}/>
        <Button onClick={toggle}>Show Favorites</Button>
      </div>
     
      <Modal toggle={toggle} isOpen={isModalOpen}>
        <div className='items-container'>
          <h2>Favorites</h2>
          <Input key="fav-title" placeholder='Favorite title' handleSort={handleSort} sorted={sortItems.title} handleFilter={handleFavoriteFilter}/>
          {filteredFavorites.map((item:ItemType) => {
            return <FavoriteCard handleFavorites={handleFavorites} key={`favorite_${item.title.trim()}`} item={item}/>
          })}
        </div>
      </Modal>
    </>
  )
}
