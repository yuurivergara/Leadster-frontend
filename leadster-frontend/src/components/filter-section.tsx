import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 15px;
`
const Button = styled.button`
    border: 1px solid;
    border-radius: 50px;
    padding: 5px;
    background-color: transparent;
    font-size: 12px;
`

export function FilterSection(){
    return(
        <Container>
            <Button>Agências</Button>
            <Button>Chatbot</Button>
            <Button>Marketing Digital</Button>
            <Button>Geração de Leads</Button>
            <Button>Mídia Paga</Button>
        </Container>
    )
}