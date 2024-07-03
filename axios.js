import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    studyDays: '',
    studyHoursPerDay: '',
    subjectNames: '',
    breakInterval: '',
    breakDuration: '',
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      if (response.data) {
        console.log('Timetable generated:', response.data);
        // Update the state with the generated timetable data
        setTimetable(response.data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>Study Days:</label>
        <input type="number" value={formData.studyDays} onChange={(event) => setFormData({ ...formData, studyDays: event.target.value })} />
        <br />
        <label>Study Hours Per Day:</label>
        <input type="number" value={formData.studyHoursPerDay} onChange={(event) => setFormData({ ...formData, studyHoursPerDay: event.target.value })} />
        <br />
        <label>Subject Names:</label>
        <input type="text" value={formData.subjectNames} onChange={(event) => setFormData({ ...formData, subjectNames: event.target.value })} />
        <br />
        <label>Break Interval:</label>
        <input type="number" value={formData.breakInterval} onChange={(event) => setFormData({ ...formData, breakInterval: event.target.value })} />
        <br />
        <label>Break Duration:</label>
        <input type="number" value={formData.breakDuration} onChange={(event) => setFormData({ ...formData, breakDuration: event.target.value })} />
        <br />
        <button type="submit">Generate Timetable</button>
      </form>
      {timetable && <Timetable timetable={timetable} />}
    </div>
  );
}
