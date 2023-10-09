import { useState } from 'react'
import { Modal } from '../../../components/modal/Modal.tsx'
import './ItemHeader.scss'
import { Button } from '../../../components/button/Button.tsx'
import { FavoriteCard } from '../../../components/cards/favorite-card/FavoriteCard.tsx'
import { Input } from '../../../components/input/Input.tsx'


type ItemType = {
  title: string,
  description: string,
  price: string,
  email: string,
  image: string
}

type HeaderType = {
favorites: ItemType[],
handleFavorites:(e:string)=>void,
handleFilter:(type:string,filter:string)=>void,
sortList:(input:string,type:string)=>void
}

type SortProps = {
  title:undefined | 'up' | 'down',
  email:undefined | 'up' | 'down',
  description:undefined | 'up' | 'down',
  price: undefined | 'up' | 'down'
}

export const ItemHeader: React.FC<HeaderType> = ({ favorites,handleFavorites,sortList,handleFilter }) => {
  const [isOpen, setisOpen] = useState(false);
  const initialSorted: SortProps = {
    title:undefined,
    email:undefined,
    description:undefined,
    price: undefined
  }
  const [sortItems,setSortItems] = useState<SortProps>(initialSorted)

  const handleSort = (filter:string) => {
    let sortElement:undefined|'up'|'down';
    let sortedItems = initialSorted
    if (sortItems[filter as keyof SortProps] === undefined) {
      sortElement = 'up'
    } else {
      sortElement = sortItems[filter as keyof SortProps] === 'up'?'down':'up'
    }
    sortedItems[filter as keyof SortProps] = sortElement;
    sortList(filter,sortElement)
    setSortItems({...sortItems,...sortedItems})
  }

  const toggle = () => {
    setisOpen(!isOpen);
  };



  return (
    <>
      <div className='header-container'>
        <Input key="title" placeholder='title' handleSort={handleSort} sorted={sortItems.title} handleFilter={handleFilter}/>
        <Input key="email" placeholder='email' handleSort={handleSort} sorted={sortItems.email} handleFilter={handleFilter}/>
        <Input key="price" placeholder='price' handleSort={handleSort} sorted={sortItems.price} handleFilter={handleFilter}/>
        <Input key="description" placeholder='description' handleSort={handleSort} sorted={sortItems.description} handleFilter={handleFilter}/>
        <Button onClick={toggle}>Show Favorites</Button>
      </div>
     
      <Modal toggle={toggle} isOpen={isOpen}>
        <div className='items-container'>
          <h2>Favorites</h2>
          <Input key="fav-title" placeholder='Favorite title' handleSort={handleSort} sorted={sortItems.title} handleFilter={handleFilter}/>
          {favorites.map((item:ItemType) => {
            return <FavoriteCard handleFavorites={handleFavorites} key={`favorite_${item.title.trim()}`} item={item}/>
          })}
        </div>
      </Modal>
    </>
  )
}
