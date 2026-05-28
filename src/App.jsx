import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import Addnewdoctor from './components/Addnewdoctor';
import { Route, Routes } from 'react-router-dom';
import Doctordetails from './components/Doctordetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Section/>} />
        <Route path = '/add-doctor' element = {<Addnewdoctor />}/>
        <Route path = '/doctor/:id' element = {<Doctordetails />}/>
      </Routes>
      {/* <Section /> */}
      {/* <div className = 'doctorcontainer'>
        <Doctorcard name = 'Arjun' specialization = 'Cardio' gender = 'male'/>
        <Doctorcard name = 'Roy' specialization = 'Neuro' gender = 'male'/>
        <Doctorcard name = 'Shankar' specialization = 'MBBS' gender = 'male'/>
        <Doctorcard name = 'Munna' specialization = 'Ortho' gender = 'male'/>
      </div> */}
      {/* <Addnewdoctor /> */}
      <Footer />

    </div>
  );
}

export default App;