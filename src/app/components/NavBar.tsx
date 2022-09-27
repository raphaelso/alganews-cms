import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar () {
  return <>
    <List>
      <Item><NavLink end to="/">Home</NavLink></Item>
      <Item><NavLink end to="/contato">Contato</NavLink></Item>
    </List>
  </>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`

const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #274060;

    &.active {
      color: #09f;
    }
  }
`