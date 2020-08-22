import { css } from "frontity";
export default css`
  body {
    margin: 0;
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  article .wp-block-image img {
    width: 100%;
  }
  .wp-block-getwid-recent-posts .wp-block-getwid-recent-posts__wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .wp-block-getwid-recent-posts .wp-block-getwid-recent-posts__wrapper .wp-block-getwid-recent-posts__content-wrapper .wp-block-getwid-recent-posts__entry-header {
    text-align: center;
  }

  .wp-block-jetpack-instagram-gallery {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .wp-block-jetpack-instagram-gallery .wp-block-jetpack-instagram-gallery__grid-post img {
    width: 100%;
    height: auto; 
  }

  .wp-block-cover .wp-block-button .wp-block-button__link {
    backdrop-filter: blur(8px);
    background-color: #909090a3;
  }
`;
