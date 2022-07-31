import React from "react";
import styled from 'styled-components';

const Box = styled.div`
padding: 80px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;


const Footer = () => {
return (
    <div>
        	<Box>
                <h1 style={{ color: "green",
                            textAlign: "center",
                            marginTop: "-50px" }}>
                    GeeksforGeeks: A Computer Science Portal for Geeks
                </h1>
                <Container>
                    <Flex>
                        <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Aim</FooterLink>
                            <FooterLink href="#">Vision</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">Writing</FooterLink>
                            <FooterLink href="#">Internships</FooterLink>
                            <FooterLink href="#">Coding</FooterLink>
                            <FooterLink href="#">Teaching</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contact Us</Heading>
                            <FooterLink href="#">Uttar Pradesh</FooterLink>
                            <FooterLink href="#">Ahemdabad</FooterLink>
                            <FooterLink href="#">Indore</FooterLink>
                            <FooterLink href="#">Mumbai</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                Facebook
                                </span>
                            </i>
                            </FooterLink>
                            <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                Instagram
                                </span>
                            </i>
                            </FooterLink>
                            <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                Twitter
                                </span>
                            </i>
                            </FooterLink>
                            <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                Youtube
                                </span>
                            </i>
                            </FooterLink>
                        </Column>
                        </Row>
                    </Flex>
                    
                </Container>
            </Box>
    </div>

);
};
export default Footer;
