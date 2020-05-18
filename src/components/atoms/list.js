import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  position: relative;
  margin-bottom: 3rem;

  li {
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    position: relative;

    &:before {
      content: "";
      display: block;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 10rem;
      height: 0.325rem;
      left: -1rem;
      position: absolute;
      top: 0.5rem;
      width: 0.325rem;
    }
  }
`
export default List
