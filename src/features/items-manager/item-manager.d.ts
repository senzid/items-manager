export type SortTypesProps = undefined|'up'|'down'

export type SortProps = {
  title: SortTypesProps,
  email: SortTypesProps,
  description: SortTypesProps,
  price: SortTypesProps
}

export type ItemType = {
  title: string,
  description: string,
  price: string,
  email: string,
  image: string
}

export type HeaderType = {
  favorites: ItemType[],
  handleFavorites:(e:string)=>void,
  handleFilter:(type:string,filter:string)=>void,
  sortList:(input:string,type:string)=>void
  }