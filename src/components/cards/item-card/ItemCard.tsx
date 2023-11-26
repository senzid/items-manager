import { memo } from 'react'
import { Button } from '../../button/Button'
import './ItemCard.scss'
import { ItemType } from '../../../features/items-manager/item-manager'

type CardType = {
  item: ItemType,
  handleFavorites:(e:string)=>void,
  isFavorite: boolean
}

export const ItemCard: React.FC<CardType>=memo(({item,isFavorite,handleFavorites})=> {
  return (
    <article className="card-container">
        <div className='card-img'>
          <img alt={`image of ${item.title}`} src={item.images[0]}/>
        </div>
        <div className='card-content'>
          <div className='card-content-title'>
            <h2>{item.title}</h2>
            <Button onClick={()=>handleFavorites(item.title)}>{isFavorite?'Remove':'Add'} Favorite</Button>
          </div>
          <p>{item.category.name}</p>
          <p><strong>{item.price}€</strong></p>
          <p>{item.description}</p>
        </div>
    </article>
  );
})