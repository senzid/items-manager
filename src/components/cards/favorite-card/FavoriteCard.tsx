import { Button } from '../../button/Button'
import './FavoriteCard.scss'

type FavoriteType = {
    title: string,
    images: string[]
}

type CardType = {
  item: FavoriteType,
  handleFavorites:(e:string)=>void,
}

export const FavoriteCard: React.FC<CardType>=({item,handleFavorites})=> {
  return (
    <article className='favcard'>
        <div className='favcard-img-container'>
          <Button className='close-button' onClick={()=>handleFavorites(item.title)}>X</Button>
          <img src={item.images[0]}/>
        </div>
        <div className='favcard-title'>
            <h2>{item.title}</h2>
        </div>
    </article>
  );
}