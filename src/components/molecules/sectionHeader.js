import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { media } from "@utils/media"
import Button from "@atoms/button"
import Subheading from "@atoms/subheading"

const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    query HeaderImageQuery {
      file(relativePath: { eq: "checkouts-payments.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <HeaderContainer contentTop content grid backgroundSecondary>
      <Image>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Image>
      <Content>
        <Subheading>Get Started</Subheading>
        <h1>Quickly Accept Payments with Gatsby & MoonClerk</h1>
        <Button href="#checkout">Checkout</Button>
      </Content>
      <HeaderCurve fill="none" viewBox="0 0 1680 232">
        <path
          fill="#F9F6F3"
          d="M0 0h1680v119.847S1428.43 231 1260 231C967.343 231 712.766 9.26 420 9.26 251.618 9.26 0 119.848 0 119.848V0z"
        ></path>
      </HeaderCurve>
    </HeaderContainer>
  )
}

export default SectionHeader

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  margin-bottom: 4rem;
  padding: 0 var(--spacingContent);

  @media ${media.lg} {
    flex-direction: row-reverse;
    min-height: 800px;
  }
`

const Image = styled.div`
  display: block;
  flex-basis: 100%;
  padding-top: 12rem;
  width: 100%;

  @media ${media.lg} {
    padding: 0;
    width: 60%;
    flex-basis: 60%;
  }

  .gatsby-image-wrapper {
    width: 80%;
    margin: 0 auto;
  }
`

const Content = styled.div`
  display: block;
  flex-basis: 100%;
  width: 100%;

  @media ${media.lg} {
    width: 40%;
    flex-basis: 40%;
  }

  h1 {
    margin-bottom: 3rem;
  }
`

const HeaderCurve = styled.svg`
  top: 100vh;
  left: 0;
  position: absolute;
  width: 100vw;
  height: auto;
`
