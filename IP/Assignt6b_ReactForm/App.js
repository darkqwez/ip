import './App.css';
import { useState } from 'react';

function App() {
  const [darsh_form, setDarsh_form] = useState({
    name: '',
    description: '',
    year: '',
    gender: '',
    age: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? event.target.value : value;

    setDarsh_form({
      ...darsh_form,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', darsh_form);
  };

  const handleReset = () => {
    setDarsh_form({
      name: '',
      description: '',
      year: '',
      gender: '',
      age: '',
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className='dar_form'>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          value={darsh_form.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description :</label>
        <textarea
          name="description"
          value={darsh_form.description}
          onChange={handleChange}
          cols="30"
          rows="4"
        ></textarea>
        <br />
        <label htmlFor="year">Select Year :</label>
        <select name="year" value={darsh_form.year} onChange={handleChange}>
          <option value="F.E">First Year</option>
          <option value="S.E">Second Year</option>
          <option value="T.E">Third Year</option>
          <option value="B.E">Final Year</option>
        </select>
        <br />
        <label>Gender :</label>
        <input
          type="checkbox"
          value="Male"
          name="gender"
          // checked={darsh_form.gender === 'Male'}
          onChange={handleChange}
        />
        Male
        <input
          type="checkbox"
          value="Female"
          name="gender"
          // checked={darsh_form.gender === 'Female'}
          onChange={handleChange}
        />
        Female
        <br />
        <label>Age :</label>
        <input
          type="radio"
          value="under30"
          name="age"
          checked={darsh_form.age === 'under30'}
          onChange={handleChange}
        />
        Under 30
        <input
          type="radio"
          value="above30"
          name="age"
          checked={darsh_form.age === 'above30'}
          onChange={handleChange}
        />    
        30 and above
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;
