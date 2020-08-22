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

  .wp-block-cover .wp-block-button .wp-block-button__link, .wp-block-getwid-media-text-slider .wp-block-button .wp-block-button__link {
    backdrop-filter: blur(8px);
    background-color: #909090a3;
    color: #fff;
    border: 0px;
  }

  .wp-block-image {
    margin: 0 0 1em 0;
  }

  .wp-block-getwid-media-text-slider {
    overflow: hidden;
    width: 100%;
    height: 60vh;
  }

  .wp-block-getwid-media-text-slider .wp-block-getwid-media-text-slider__content {
    height: 60vh;
    position: relative;
    clear: both;
  }

  .wp-block-getwid-media-text-slider .wp-block-getwid-media-text-slider-slide-content {
    display:  block;
    position: relative;
    margin-bottom: 1em;

  }

  .wp-block-getwid-media-text-slider .wp-block-getwid-media-text-slider-slide {
    height: 60vh;
  }

  .wp-block-getwid-media-text-slider .wp-block-getwid-media-text-slider-slide-content figure {
    margin-right: 0px;
    margin-left: 0px;
  }

  .wp-block-getwid-media-text-slider .wp-block-getwid-media-text-slider-slide-content__content {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: 22.5%;
  }

  .wp-block-getwid-media-text-slider .wp-block-getwid-media-text-slider-slide-content__image {
    width: 100%;
    height: 60vh;    
    object-fit: cover; 
    filter: brightness(0.5);
  }


`;
