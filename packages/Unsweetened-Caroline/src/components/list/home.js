import React from "react";
import { connect, styled } from "frontity";
import HomeItem from "./home-list-item";
import Pagination from "./pagination";

const Home = ({ state }) => {

  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
  <Container>
    <SliderContainer>
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <HomeItem key={item.id} item={item} />;
      })}
    </SliderContainer>
    <Pagination />
  </Container>
  );
};

export default connect(Home);

const Container = styled.div`
  width: 90vw;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const SliderContainer = styled.section`
  width: 100%;
  margin: 0;
  padding: 24px 0px;
  list-style: none;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  height: 525px;
  -webkit-overflow-scrolling: touch;

  & .paddle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3em;
  }
  & .left-paddle {
    left: 0;
  }
  & .right-paddle {
    right: 0;
  }
  & .hidden {
    display: none;
  }

`;
