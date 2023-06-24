"use client"

import { styled } from "styled-components"
import { OrderFilter } from "./order-filter"
import { useContext, useState } from "react"
import { FilterContext } from "@/contexts/FilterContext"

const Container = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
`
const FilterButton = styled.button`

    &.nopressed{

        border: 0.1em solid #1D3C51;
        border-radius: 50px; 
        padding: 5px 10px;
        background-color: transparent;
        font-size: 12px;
        color: #1D3C51;
        font-weight: 500;
        cursor: pointer;
        font-weight: 600;
        &:hover{
            border: 0.1px solid var(--dodger-blue); 
            color: var(--dodger-blue);
        }
    }

    &.pressed{
        background-color: var(--dodger-blue);
        border: none;
        color: white;
        border-radius: 50px;
        padding: 5px 10px;
    }



`

export function FilterSection(){
    const {setCategory, setCurrentPage, setPageButtonIndex} = useContext(FilterContext)
    const [index,setIndex] = useState(0)
    return( 
        <Container>
            <FilterButton 
            onClick={()=>{
                setIndex(0)
                setCategory("agencias")
                setCurrentPage(0)
                setPageButtonIndex(0)
            }} className={index == 0? 'pressed' : 'nopressed'}>Agências</FilterButton>
            <FilterButton 
            onClick={()=>{
                setIndex(1)
                setCategory("chatbot")
                setCurrentPage(0) 
                setPageButtonIndex(0)
            }}
            className={index == 1? 'pressed' : 'nopressed'}
            >Chatbot</FilterButton>
            <FilterButton 
            onClick={()=>{
                setIndex(2)
                setCategory("marketing")
                setCurrentPage(0)
                setPageButtonIndex(0)
            }}
            className={index == 2? 'pressed' : 'nopressed'}
            >Marketing Digital</FilterButton>
            <FilterButton
            onClick={()=>{
                setIndex(3)
                setCategory("leads")
                setCurrentPage(0)
                setPageButtonIndex(0) 
            }}
            className={index == 3? 'pressed' : 'nopressed'}
            >Geração de Leads</FilterButton>
            <FilterButton 
            onClick={()=>{
                setIndex(4)
                setCategory("midia")
                setCurrentPage(0)
                setPageButtonIndex(0)
            }}
            className={index == 4? 'pressed' : 'nopressed'}
            >Mídia Paga</FilterButton>
            <OrderFilter/>
        </Container>
    )
}