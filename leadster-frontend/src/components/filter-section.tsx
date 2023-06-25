import { styled } from "styled-components"
import { OrderFilter } from "./order-filter"
import { useContext, useState } from "react"
import { FilterContext } from "@/contexts/FilterContext"

const Container = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
    margin-bottom: 30px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 968px) {
        flex-direction: column;
    }
`

const CategoryButton = styled.div`
    display: flex;
    gap:20px
`
const Button = styled.button`


&.nopressed{
    
    border: 0.1em solid #1D3C51;
    border-radius: 50px; 
    padding: 5px 10px;
    background-color: transparent;
    font-size: 12px;
    color: #1D3C51;
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
    
    @media(max-width: 968px){
        &.nopressed{
            font-size: 10px;
        }
        
        &.pressed{
            font-size: 10px;
            padding-inline-start: 2px 5px;
            border-radius: 20px;
        }
    }


`

export function FilterSection(){
    const {setCategory, setCurrentPage, setPageButtonIndex} = useContext(FilterContext)
    const [index,setIndex] = useState(0)
    return( 
        <Container>
            <CategoryButton>

            <Button 
            onClick={()=>{
                setIndex(0)
                setCategory("agencias")
                setCurrentPage(0)
                setPageButtonIndex(0)
            }} className={index == 0? 'pressed' : 'nopressed'}>Agências</Button>
            <Button 
            onClick={()=>{
                setIndex(1)
                setCategory("chatbot")
                setCurrentPage(0) 
                setPageButtonIndex(0)
            }}
            className={index == 1? 'pressed' : 'nopressed'}
            >Chatbot</Button>
            <Button 
            onClick={()=>{
                setIndex(2)
                setCategory("marketing")
                setCurrentPage(0)
                setPageButtonIndex(0)
            }}
            className={index == 2? 'pressed' : 'nopressed'}
            >Marketing Digital</Button>
            <Button
            onClick={()=>{
                setIndex(3)
                setCategory("leads")
                setCurrentPage(0)
                setPageButtonIndex(0) 
            }}
            className={index == 3? 'pressed' : 'nopressed'}
            >Geração de Leads</Button>
            <Button 
            onClick={()=>{
                setIndex(4)
                setCategory("midia")
                setCurrentPage(0)
                setPageButtonIndex(0)
            }}
            className={index == 4? 'pressed' : 'nopressed'}
            >Mídia Paga</Button>
            </CategoryButton>

            <OrderFilter/>
        </Container>
    )
}