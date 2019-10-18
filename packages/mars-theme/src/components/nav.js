import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ({ state }) => (
  <Container>
    {state.theme.menu.map(([name, link]) => (
      <Item key={name} isSelected={state.router.link === link}>
        <Link link={link}>{name}</Link>
      </Item>
    ))}
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  width: 1080px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 2rem 24px;
  margin: 0;
  overflow-x: auto;
  justify-content: center;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #4d4d4d;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
