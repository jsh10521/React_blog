import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import TopMenu from './JSX/TopMenu';
import Title from './JSX/Title';
import AboutMe from './JSX/AboutMe';
import Skills from './JSX/Skills';
import Career from './JSX/Career';
import Last from './JSX/Last';
import Copyright from './JSX/Copyright';
import Stars from './JSX/Stars'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const TopMenuStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    color: #b9c6e0;
    position: fixed;
    background-color: black;
  `;

  const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
`;

  const AboutMeStyle = styled.div`
    display: flex;
    justify-content: center;
  }
  `;

  const SkillsStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 500px;
  `;

  const CareerStyle = styled.div`
    display: flex;
    justify-content: center;
  `;

  const LastStyle = styled.div`
    display: flex;
    justify-content: center;
  `;

  const CopyrightStyle = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <TopMenuStyle>
        <TopMenu /> 
      </TopMenuStyle>
      <Stars />
      <TitleStyle>
        <Title /> 
      </TitleStyle>
      <Stars />
      <AboutMeStyle>
        <AboutMe />
      </AboutMeStyle>
      <Stars />
      <SkillsStyle>
        <Skills />
      </SkillsStyle>
      <Stars />
      <CareerStyle>
        <Career />
      </CareerStyle>
      <Stars />
      <LastStyle>
        <Last />
      </LastStyle>
      <CopyrightStyle>
        <Copyright />
      </CopyrightStyle>
    </>
  );
}

export default App;