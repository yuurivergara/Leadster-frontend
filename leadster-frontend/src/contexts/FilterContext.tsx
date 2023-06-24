'use client'
import {ReactNode, createContext, useState} from "react";

type FilterContextType = {
  category: string;
  setCategory: (newState: string) => void;
  order:string;
  setOrder: (newState: string) => void;
  currentPage:number;
  setCurrentPage: (newState: number) => void;
  PageButtonIndex:number;
  setPageButtonIndex: (newState: number) => void;
  isOpen: boolean;
  setIsOpen: (newState: boolean)=> void;
  currentTitle: string;
  setCurrentTitle:(newState: string) => void;
  currentUrl: string;
  setCurrentUrl:(newState: string) => void;
}


type FilterContextProps = {
  children: ReactNode 
}

export const FilterContext = createContext<FilterContextType>({} as FilterContextType)

export function FilterProvider  ({children} : FilterContextProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [PageButtonIndex, setPageButtonIndex] = useState(0)
  const [category, setCategory] = useState("agencias")
  const [order, setOrder]= useState("data")
  const [isOpen, setIsOpen] = useState(false)
  const [currentTitle, setCurrentTitle]= useState("")
const [currentUrl, setCurrentUrl]= useState("")
  
  
  
  return (
    <FilterContext.Provider value={{ category, setCategory, order, setOrder, currentPage, setCurrentPage, PageButtonIndex, setPageButtonIndex, isOpen, setIsOpen, currentTitle, setCurrentTitle, currentUrl, setCurrentUrl}}>
      {children}
    </FilterContext.Provider>
  )
  
}
