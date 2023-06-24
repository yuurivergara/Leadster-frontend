'use client'
import Image from 'next/image'
import {styled} from 'styled-components'

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%; 
`

const Logo = styled.a`
    cursor: pointer;
`

export function Header(){
    return(
        <TagHeader>
            <Logo>
                <img src="/logo.png" alt="logo" />
            </Logo>
        </TagHeader>
    )
}