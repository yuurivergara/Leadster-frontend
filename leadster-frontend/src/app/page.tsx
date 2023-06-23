'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { styled } from 'styled-components'
import { FirstSection } from '@/components/first-section'
import { ThirdSection } from '@/components/third-section'
import { SecondSection } from '@/components/second-section'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  `

export default function Home() {
  return (
    <PageWrapper>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </PageWrapper>
  )
}
