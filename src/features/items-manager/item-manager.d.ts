export type SortTypesProps = undefined|'up'|'down'

export type SortProps = {
  title: SortTypesProps,
  category: SortTypesProps,
  description: SortTypesProps,
  price: SortTypesProps
}

export type ItemType = {
  id: number,
  title: string,
  description: string,
  price: string,
  images: string[],
  category: {
    id: number,
    name: string,
    image:string,
  }
}

export type HeaderType = {
  favorites: ItemType[],
  handleFavorites:(e:string)=>void,
  handleFilter:(type:string,filter:string)=>void,
  sortList:(input:string,type:string)=>void
  }