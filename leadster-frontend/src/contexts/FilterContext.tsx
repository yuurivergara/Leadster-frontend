import React,{ReactNode, createContext, useEffect, useState} from "react";

type FilterContextType = {
  category: string;
  setCategory: (newState: string) => void;
  order:string;
  setOrder: (newState: string) => void;
}


type FilterContextProps = {
  children: ReactNode
}

export const FilterContext = createContext<FilterContextType>({} as FilterContextType)

export default function FilterProvider  ({children} : FilterContextProps) {
  const [category, setCategory] = useState("agencias")
  const [order, setOrder]= useState("data")
  
  
  
  return (
    <FilterContext.Provider value={{ category, setCategory, order, setOrder}}>
      {children}
    </FilterContext.Provider>
  )
  
}
