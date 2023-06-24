'use client'
import { styled } from "styled-components"
import { useState } from "react"


const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 5px;
    margin-left: 50px;

    span{
        font-weight: 600;
        font-size: 12px;
    }

    button {
        border: 1px solid #1D3C51;
        border-radius: 10px;;
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1px 10px;
        width: 190px;
        color: #1D3C51;
        font-weight: 600;

        &:hover{
            border: 1px solid var(--dodger-blue);
            color: var(--dodger-blue);
            svg{
                fill: var(--dodger-blue);
            }
        }

        svg { 
            margin-left: 16px; 
        }
    }
`


const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px; 
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;
    right: 8px;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }
`

export function OrderFilter(){
    const [isOpen, setIsOpen] = useState(false)
    const [filterText, setFilterText] = useState("Data de Publicação")

    const handleOpen = () => setIsOpen(prev => !prev)


    return(
        <FilterContainer>
            <span>
                Ordenar por:
            </span>
            <button onClick={handleOpen}>
                {filterText}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#737380" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10L12 14L16 10" stroke="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
    
            </button>
            
            {isOpen && 
            <PriorityFilter>
                <li onClick={()=>{
                    setIsOpen(prev => !prev)
                    setFilterText("Data de publicação")
                    }}>Data de publicação</li>
                <li onClick={
                    ()=>{
                        setIsOpen(prev => !prev)
                        setFilterText("Mais Vistos")
                        }}>Mais vistos</li>
            </PriorityFilter>
        }
        </FilterContainer>
    )
}