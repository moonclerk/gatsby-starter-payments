import React from "react"
import styled from "styled-components"

const SlideTestimonial = ({ testimonial, name, title }) => {
  return (
    <Testimonial>
      <Content>
        <i>{testimonial}</i>
      </Content>
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Testimonial>
  )
}

export default SlideTestimonial

const Testimonial = styled.div`
  box-sizing: border-box;
  padding-bottom: 1rem;
`

const Content = styled.p`
  i {
    color: ${props => props.theme.colors.white};
  }
`

const Name = styled.h4`
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: 0.25rem;
`

const Title = styled.h5`
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: 0;
`
