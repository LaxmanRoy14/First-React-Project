import React, { useState } from "react";
import Home from "./Home";

function Addnewdoctor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [salary, setSalary] = useState("");

  const [newdoctor, setNewdoctor] = useState(null);
  function handleform(e) {
    e.preventDefault();

    const formdata = {
      name,
      age,
      gender,
      specialization,
      salary
    };
    setNewdoctor(formdata)
    console.log(formdata)
    setName('')
    setAge('')
    setGender('')
    setSpecialization('')
    setSalary('')
  }

  return (
    <div className="adddoc-container">
      <div className="adddoc-card">
        <h3>Add New Doctor</h3>

        <form className="adddoc-form" onSubmit={handleform}>
          <input
            type="text"
            className="textfield"
            placeholder="Enter Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Enter Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Enter Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />

          <button type="submit">Add Doctor</button>
        </form>
      </div>
      <Home newdoctor = {newdoctor}/>
    </div>
  );
}

export default Addnewdoctor;