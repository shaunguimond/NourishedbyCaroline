import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../home-image";

const HomeItem = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <Article>
      <Link link={item.link}>
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      </Link>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
    </Article>
  );
};

export default connect(HomeItem);

const Title = styled.h1`
  font-size: 0.975rem;
  color: rgba(12, 17, 43);
  font-weight: 500;
  margin: 0;
  padding-top: 14px;
  padding-bottom: 8px;
  box-sizing: border-box;
  text-align: center;
`;

const Article = styled.article`
  width: 300px;
  height: 450px;
  margin: 0px 20px;
`;
