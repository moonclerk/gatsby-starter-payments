import styled from "styled-components"

const Link = styled.a`
  color: ${props => props.theme.colors.gray};
  padding: 0.25rem 0;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    border-bottom: solid 2px ${props => props.theme.colors.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover {
    &::after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`

export default Link
