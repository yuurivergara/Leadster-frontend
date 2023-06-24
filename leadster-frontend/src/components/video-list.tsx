import { styled } from "styled-components"

interface PropsType{
    props:{ title: string, views: number, category: string}
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`
export function VideoList(props : PropsType){
    return(
        <Container>
            <p>{props.props.title}</p>
        </Container>
    )
}