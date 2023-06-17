import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Home from './components/home/Home';
import "./app.css"
import HeaderSocials from './components/home/HeaderSocials';

const App = () => {
  const email = "khadizatulqubra49@gmail.com";
  const phoneNumber= "0046736404276";
  return (
    <div>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
     

      </main>
      <Contact email={email} phoneNumber={phoneNumber} />

    </div>
  );
}

export default App;
