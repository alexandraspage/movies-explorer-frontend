import React from 'react';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

<<<<<<< Updated upstream
function Main(){
    return(
        <>
          <Header page="main"></Header>
          <Promo></Promo>
          <NavTab></NavTab>
          <AboutProject></AboutProject>
          <Techs></Techs>
          <AboutMe></AboutMe>
          <Footer></Footer>
        </>
    )
=======
function Main(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} page="main"></Header>
      <main className='page-size'>
        <Promo></Promo>
        <AboutProject></AboutProject>
        <Techs></Techs>
        <AboutMe></AboutMe>
      </main>
      <Footer></Footer>
    </>
  )
>>>>>>> Stashed changes
}

export default Main;