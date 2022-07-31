import React from 'react';
import styled from 'styled-components';

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

const Header = () => (
    <Flex>   
        <div className="site__header section__padding" id="home">
            <div className="site__header-content">
                <h1 className="gradient__text">Cool Headline about Inclusive Education</h1>
                <p> Cool text about importance of inclusive education blalalalala</p>
            </div>
        </div>
</Flex>



);

export default Header;
