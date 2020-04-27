import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import Title from "./title";
import Home from "./list/home";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        {(data.isFetching && <Loading />) ||
          (data.isHome && <Home />) ||
          (data.isPostType && <Post />) ||
          (data.is404 && <Page404 />) ||
          (data.isArchive && <List />)}
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .wprm-recipe {
    margin: 20px auto;
    background-color: #fafafa; /* wprm_background type=color */
    font-family: Helvetica, sans-serif; /* wprm_main_font_family type=font */
    font-size: 0.9em; /* wprm_main_font_size type=font_size */
    line-height: 1.5em; /* wprm_main_line_height type=font_size */
    color: #333333; /* wprm_main_text type=color */
    max-width: 800px; /* wprm_max_width type=size */
}

.wprm-recipe-container .wprm-recipe-template-classic {
  padding: 25px!important;
}

.wprm-recipe-container .wprm-recipe-template-classic .wprm-container-float-right .wprm-recipe-image {
  width: 125px;
}

.wprm-recipe-container .wprm-recipe-template-classic .wprm-container-float-right .wprm-recipe-print {
  margin-right: 15px;
}

.wprm-recipe-container .wprm-recipe-template-classic span::after {
  content: " ";
}

.wprm-recipe a {
    color: #3498db; /* wprm_link type=color */
}
.wprm-recipe p, .wprm-recipe li {
    font-family: Helvetica, sans-serif; /* wprm_main_font_family type=font */
    font-size: 1em !important;
    line-height: 1.5em !important; /* wprm_main_line_height type=font_size */
}
.wprm-recipe li {
    margin: 0 0 0 32px !important;
    padding: 0 !important;
}
.rtl .wprm-recipe li {
    margin: 0 32px 0 0 !important;
}
.wprm-recipe ol, .wprm-recipe ul {
    margin: 0 !important;
    padding: 0 !important;
}
.wprm-recipe br {
    display: none;
}
.wprm-recipe .wprm-recipe-name,
.wprm-recipe .wprm-recipe-header {
    font-family: Helvetica, sans-serif; /* wprm_header_font_family type=font */
    color: #000000; /* wprm_header_text type=color */
    line-height: 1.3em; /* wprm_header_line_height type=font_size */
}
.wprm-recipe h1,
.wprm-recipe h2,
.wprm-recipe h3,
.wprm-recipe h4,
.wprm-recipe h5,
.wprm-recipe h6 {
    font-family: Helvetica, sans-serif; /* wprm_header_font_family type=font */
    color: #000000; /* wprm_header_text type=color */
    line-height: 1.3em; /* wprm_header_line_height type=font_size */
    margin: 0 !important;
    padding: 0 !important;
}
.wprm-recipe .wprm-recipe-header {
    margin-top: 1.2em !important;
}
.wprm-recipe h1 {
    font-size: 2em; /* wprm_h1_size type=font_size */
}
.wprm-recipe h2 {
    font-size: 1.8em; /* wprm_h2_size type=font_size */
}
.wprm-recipe h3 {
    font-size: 1.2em; /* wprm_h3_size type=font_size */
}
.wprm-recipe h4 {
    font-size: 1em; /* wprm_h4_size type=font_size */
}
.wprm-recipe h5 {
    font-size: 1em; /* wprm_h5_size type=font_size */
}
.wprm-recipe h6 {
    font-size: 1em; /* wprm_h6_size type=font_size */
}

.wprm-recipe-print#text {
  display: none;
}
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1),
    rgba(155, 155, 155, 0.1)
  );
`;
