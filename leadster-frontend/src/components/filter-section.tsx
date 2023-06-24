import { styled } from "styled-components"
import { OrderFilter } from "./order-filter"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
`
const Button = styled.button`

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
    const [index,setIndex] = useState(0)
    return(
        <Container>
            <Button 
            onClick={()=>{
                setIndex(0)
            }} className={index == 0? 'pressed' : 'nopressed'}>Agências</Button>
            <Button 
            onClick={()=>{
                setIndex(1)
            }}
            className={index == 1? 'pressed' : 'nopressed'}
            >Chatbot</Button>
            <Button 
            onClick={()=>{
                setIndex(2)
            }}
            className={index == 2? 'pressed' : 'nopressed'}
            >Marketing Digital</Button>
            <Button 
            onClick={()=>{
                setIndex(3)
            }}
            className={index == 3? 'pressed' : 'nopressed'}
            >Geração de Leads</Button>
            <Button 
            onClick={()=>{
                setIndex(4)
            }}
            className={index == 4? 'pressed' : 'nopressed'}
            >Mídia Paga</Button>
            <OrderFilter/>
        </Container>
    )
}