import { useState } from 'react'
import { ItemCard } from '../../../components/cards/item-card/ItemCard.tsx'
import './ItemsList.scss'
import { ItemHeader } from '../items-header/ItemHeader.tsx'
import { Button } from '../../../components/button/Button.tsx'

type ItemType = {
  title: string,
  description: string,
  price: string,
  email: string,
  image: string
}

const ItemList: React.FC<{ data: any }> = ({ data }: { data: any }) => {
  const [itemsDisplayed,setItemsDisplayed] = useState(5)
  const [items,setItems] = useState(data.items.slice(0, itemsDisplayed))
  const [favorites, setFavorites] = useState<[]|ItemType[]>([]);

  const isItemFavorite = (e:string) => {
    return favorites.find((item:ItemType)=>item.title === e)?true:false;
  }

  const handleFavorites = (e:string) => {
    const isFavorite = isItemFavorite(e)
    console.log('isFavorite',isFavorite);
    if (isFavorite) {
      const newFavorites:ItemType[] = favorites.filter((item:ItemType)=>item.title !== e);
      setFavorites([...newFavorites])
    } else {
      const selectedItem:ItemType[] = items.filter((item:ItemType)=>item.title === e);
      setFavorites([...favorites,...selectedItem])
    }
  }

  const sortList = (filter:any,sortElement:any) => {
    const isFavorite = filter ==="Favorite title"? true:false;
    if (isFavorite && favorites.length===0) return
    filter = isFavorite? 'title':filter
    const list = isFavorite ? favorites : items
    const convertToNumber = filter === 'price'? true:false;
    if (sortElement==='down') {
      list.sort((a:any, b:any) => {
        const elementA = convertToNumber? Number(a[filter]) : a[filter].toUpperCase();
        const elementB = convertToNumber? Number(b[filter]) : b[filter].toUpperCase();
        if (elementA > elementB) {
          return -1;
        }
        if (elementA < elementB) {
          return 1;
        }
        return 0;
      });
      
    } else {
      list.sort((a:any, b:any) => {
        const elementA = convertToNumber? Number(a[filter]) : a[filter].toUpperCase();
        const elementB = convertToNumber? Number(b[filter]) : b[filter].toUpperCase();
        if (elementA < elementB) {
          return -1;
        }
        if (elementA > elementB) {
          return 1;
        }
        return 0;
      });
    }
    if (isFavorite) {
      setFavorites([...list])
    } else {
      setItems([...list])
    }
  }

  const handleFilter = (type:string,filter:string) => {
    const isFavorite = type ==="Favorite title"? true:false;
    const list = isFavorite ? favorites : data.items
    if (isFavorite) {
      type = 'title';
      if (filter==="") return setFavorites([...list])
      const newFavoritesList = list.filter((item:any)=>item[type].trim().toLowerCase().includes(filter.trim().toLowerCase()))
      setFavorites([...newFavoritesList])
    } else {
      if (filter==="") return setItems([...list])
      const newItemsList = list.filter((item:any)=>item[type].trim().toLowerCase().includes(filter.trim().toLowerCase()))
      setItems([...newItemsList])
    }
  }

  const handleShowMore = () => {
    if (itemsDisplayed>25)return
    setItems([...data.items.slice(0, itemsDisplayed+5)])
    setItemsDisplayed(itemsDisplayed+5)
  }

  return (
    <>
      <ItemHeader favorites={favorites} handleFavorites={handleFavorites} sortList={sortList} handleFilter={handleFilter} />
      <div className='items-container'>
        {items.map((item:ItemType) => {
          const isFavorite =isItemFavorite(item.title)
          return <ItemCard isFavorite={isFavorite} handleFavorites={handleFavorites} key={`item_${item.title.trim()}`} item={item} />
        })}
      </div>
      <div className='footer-button'>
        <Button onClick={handleShowMore}>View More</Button>
      </div>
    </>
  )
}

export default ItemList