import { styled } from "styled-components"
import { OrderFilter } from "./order-filter"

const Container = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
`
const Button = styled.button`
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

    &:active{
        background-color: var(--dodger-blue);
        color: white;
    }
`

export function FilterSection(){
    return(
        <Container>
            <Button>Agências</Button>
            <Button>Chatbot</Button>
            <Button>Marketing Digital</Button>
            <Button>Geração de Leads</Button>
            <Button>Mídia Paga</Button>
            <OrderFilter/>
        </Container>
    )
}