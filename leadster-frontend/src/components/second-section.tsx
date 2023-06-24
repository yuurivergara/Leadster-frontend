import { styled } from "styled-components"
import { FilterSection } from "./filter-section"
import info from '@/components/data.json'
import { useState } from "react"

interface DataProps{
    title:string, views:number, category: string
}
const TagSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 120px;    
`

const FilterContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    button{
        background-color: transparent;
        border: none;
        font-weight: 500;
        font-family: inherit;
        width: 20px;

        &:hover,&:focus{
            border: 1px solid blue;
            border-radius: 5px;
            color: blue;
        }

    }
`
const HorizontalLine = styled.div`
    border: 1px solid var(--platinum);
    width: 100%;
`

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
`
const VideoCard = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    cursor: pointer; 
    border-radius: 5px;
    box-shadow: var(--platinum) 1px 5px 25px;
    width: 256px;

    >div{
        &.image{
            display: flex; 
            background-color: blue;
            background-image: url("/play.png");
            background-position: center;
            background-repeat: no-repeat;
        }
        &.title{
            display: flex;
            flex: 1;
            align-items: center;
            padding: 10px 20px;
        }
    }

    &:hover{
        p{
            color: blue;
        }
        img{
            opacity: 0.6;           
        }
    }


    

    
`

export function SecondSection(){
    const data: DataProps[] = info
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage *9;
    const endIndex = startIndex + 9;
    const pages = Math.ceil(data.length/9);
    const [category, setCategory] = useState("agencias")
    const currentData = data.slice(startIndex, endIndex)

    return(
        <TagSection>
            <FilterSection/>
            <HorizontalLine />
            <ListContainer>
                {currentData.map((data)=>(
                <VideoCard>
                    <div className="image">
                        <img src="/thumbnail.png" width={256} />
                    </div>
                    <div className="title">
                    <p>{data.title}</p>

                    </div>
                    
                </VideoCard>
                 ))}
            </ListContainer>
            <HorizontalLine />
            <FilterContainer>
                <span>Página</span>
                {Array.from(Array(pages), (item, index)=>{
                    return (
                    <button value={index} onClick={()=> setCurrentPage(index)}>{index +1}</button>)
                })}
            </FilterContainer>

            
            
        </TagSection>
    )
}