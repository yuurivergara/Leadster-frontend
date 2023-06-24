'use client'
import { FirstSection } from '@/components/first-section'
import { ThirdSection } from '@/components/third-section'
import { SecondSection } from '@/components/second-section'
import { styled } from 'styled-components'
import { Footer } from '@/components/footer'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export default function Home() {
  return (
    <PageWrapper>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <Footer />
    </PageWrapper>
  )
}
