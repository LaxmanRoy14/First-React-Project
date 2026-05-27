import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Doctorcard from './components/Doctorcard';
import Footer from './components/Footer';
import Addnewdoctor from './components/Addnewdoctor';

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <div className = 'doctorcontainer'>
        <Doctorcard name = 'Arjun' specialization = 'Cardio' gender = 'male'/>
        <Doctorcard name = 'Roy' specialization = 'Neuro' gender = 'male'/>
        <Doctorcard name = 'Shankar' specialization = 'MBBS' gender = 'male'/>
        <Doctorcard name = 'Munna' specialization = 'Ortho' gender = 'male'/>
      </div>
      <Addnewdoctor />
      <Footer />

    </div>
  );
}

export default App;