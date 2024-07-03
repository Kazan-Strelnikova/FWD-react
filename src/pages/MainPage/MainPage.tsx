import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';

export default function MainPage() {
  return (
    <>
      <Header />
      <Profile />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}
