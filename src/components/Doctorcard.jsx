import React from 'react';

function Doctorcard({name, specialization, gender, salary}) {
  return (
    <div className='doctorcard'>
        <img 
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/arjun_reddy_5_0_x.jpeg?VersionId=773iWhtw6J3IBMKfky7p9Gb19Ls_whZx" 
          alt="Dr. Arjun Profile" 
        />
        <h1>{name}</h1>
        <div>{specialization}</div>
        <p>{gender}</p>
        <button>View More</button>
    </div>
  )
}

export default Doctorcard;