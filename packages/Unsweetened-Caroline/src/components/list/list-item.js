import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      </Link>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
    </article>
  );
};

export default connect(Item);

const Title = styled.h1`
  font-size: 1.25rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 14px;
  padding-bottom: 8px;
  box-sizing: border-box;
  text-align: center;
`;

const Author = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Fecha = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
line-height: 1.8;
color: #111;
margin: 0;
overflow: hidden;
`;
