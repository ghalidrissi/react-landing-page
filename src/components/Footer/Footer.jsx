import React from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItem, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {

  const toggleHome = () => {
     scroll.scrollToTop();
  }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>How It Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Submit Videos</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencers</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Socials</FooterLinkTitle>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>LinkedIn</FooterLink>
                        <FooterLink to='/'>YouTube</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Company
                    </SocialLogo>
                    <WebsiteRights>
                        Company &#169; {new Date().getFullYear()} All Rights Reserved.
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer