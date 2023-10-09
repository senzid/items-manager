import { memo } from 'react'
import { Button } from '../../button/Button'
import './ItemCard.scss'

type ItemType = {
    title: string,
    description: string,
    price: string,
    email: string,
    image: string
}

type CardType = {
  item: ItemType,
  handleFavorites:(e:string)=>void,
  isFavorite: boolean
}

export const ItemCard: React.FC<CardType>=memo(({item,isFavorite,handleFavorites})=> {
  return (
    <article className="card-container">
        <div className='card-img'>
          <img src={item.image}/>
        </div>
        <div className='card-content'>
          <div className='card-content-title'>
            <h2>{item.title}</h2>
            <Button onClick={()=>handleFavorites(item.title)}>{isFavorite?'Remove':'Add'} Favorite</Button>
          </div>
          <p>{item.email}</p>
          <p><strong>{item.price}€</strong></p>
          <p>{item.description}</p>
        </div>
    </article>
  );
})