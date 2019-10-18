import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = ({ state }) => (
  <>
    <Container>
        <Logo>
          <StyledLink link="/" title="Unsweetened Caroline">
            <HeaderLogo src="https://www.unsweetenedcaroline.com/wp-content/uploads/2019/03/Unsweetened-Caroline-Logo-V2-test.png"></HeaderLogo>
          </StyledLink>  
        </Logo>
      <Description>{state.frontity.description}</Description>
      <HeaderSocial>
        <SocialLink href="https://www.facebook.com/unsweetenedcaro/" target="_blank">
          <HeaderSocialIcons><FontAwesomeIcon icon={ faFacebookF } className="fa-2x" /></HeaderSocialIcons>
        </SocialLink>
        <SocialLink href="https://twitter.com/Unsweetenedcaro" target="_blank">
          <HeaderSocialIcons><FontAwesomeIcon icon={ faTwitter } className="fa-2x" /></HeaderSocialIcons>
        </SocialLink>
        <SocialLink href="https://www.instagram.com/unsweetened.caroline/" target="_blank">
          <HeaderSocialIcons><FontAwesomeIcon icon={ faInstagram } className="fa-2x" /></HeaderSocialIcons>
        </SocialLink>
        <SocialLink href="https://www.pinterest.ca/unsweetenedcaro" target="_blank">
          <HeaderSocialIcons><FontAwesomeIcon icon={ faPinterest } className="fa-2x" /></HeaderSocialIcons>
        </SocialLink>
      </HeaderSocial>
    </Container>
    <Nav />
  </>
);

export default connect(Header);

const Container = styled.div`
`;

const Logo = styled.div`
  padding: 15px 0;
  position: relative;
  display: inline-block;
`;

const Description = styled.h4`
  margin: 0;
  color: #4d4d4d;
  display: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  max-width: 300px;
  display: block;
`;

const HeaderLogo = styled.img`
  width: 100%;
  height: auto;
`;

const HeaderSocial = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  display: block;
  color: #4d4d4d;
  padding: 0 0.5rem 0 0.5rem;

  &:hover {
    color: #7a7a7a;
  }

  &:last-child {
    padding-right: 0rem;
  }

  
`;

const HeaderSocialIcons = styled.span`
  font-size: 18px;
  border: 1px solid;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  display: inline-block;
  margin: 10px 7px 0 0;
  line-height: 27px;
  text-align: center;
  color: inherit;

  & svg {
    height: 1em;
    display: inline-block;
    overflow: visible;
    font-size: inherit;
    vertical-align: -0.15em;
`;