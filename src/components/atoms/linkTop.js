import React from "react"
import styled from "styled-components"

class LinkTop extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    return (
      <LinkTo onClick={() => this.scrollToTop()}>
        <h5>Top</h5>
      </LinkTo>
    )
  }
}

export default LinkTop

const LinkTo = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50rem;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  height: 120px;
  position: absolute;
  right: 1rem;
  text-align: center;
  transition: ${props => props.theme.animation.transition};
  width: 120px;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }

  h5 {
    margin: 0;
  }
`
