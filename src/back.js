import React, { useState } from 'react';
import InputForm from './InputForm';
import Timetable from './Timetable';
import axios from 'axios';

function App() {
  const [timetable, setTimetable] = useState(null);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      if (response.data) {
        const { study_days, study_hours_per_day, subject_names_list, break_interval, break_duration } = response.data.data;
        const generatedTimetable = generateTimetable(study_days, study_hours_per_day, subject_names_list, break_interval, break_duration);
        setTimetable(generatedTimetable);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const generateTimetable = (study_days, study_hours_per_day, subject_names_list, break_interval, break_duration) => {
    const timetable = {};
    const total_subjects = subject_names_list.length;
    const hours_per_subject = study_hours_per_day / total_subjects;

    for (let day = 1; day <= study_days; day++) {
      const daily_schedule = [];
      let start_hour = 0.0;

      for (let i = 0; i < total_subjects; i++) {
        const end_hour = start_hour + hours_per_subject;
        daily_schedule.push({
          subject: subject_names_list[i],
          start_time: `${String(Math.floor(start_hour)).padStart(2, '0')}:${String(Math.round((start_hour % 1) * 60)).padStart(2, '0')}`,
          end_time: `${String(Math.floor(end_hour)).padStart(2, '0')}:${String(Math.round((end_hour % 1) * 60)).padStart(2, '0')}`
        });
        start_hour = end_hour;
      }

      let break_time = 0.0;
      while (break_time + break_interval <= study_hours_per_day) {
        const break_start = break_time + break_interval;
        const break_end = break_start + (break_duration / 60.0);

        if (break_start < study_hours_per_day) {
          const start_hour = Math.floor(break_start);
          const start_minute = Math.round((break_start - start_hour) * 60);
          const end_hour = Math.floor(break_end);
          const end_minute = Math.round((break_end - end_hour) * 60);

          daily_schedule.push({
            subject: 'Break',
            start_time: `${String(start_hour).padStart(2, '0')}:${String(start_minute).padStart(2, '0')}`,
            end_time: `${String(end_hour).padStart(2, '0')}:${String(end_minute).padStart(2, '0')}`
          });
        }
        break_time = break_end;
      }

      daily_schedule.sort((a, b) => {
        const [aHour, aMinute] = a.start_time.split(':').map(Number);
        const [bHour, bMinute] = b.start_time.split(':').map(Number);
        return aHour === bHour ? aMinute - bMinute : aHour - bHour;
      });

      timetable[`Day ${day}`] = daily_schedule;
    }

    return timetable;
  };

  return (
    <div className="App">
      <InputForm onSubmit={handleFormSubmit} />
      {timetable && <Timetable timetable={timetable} />}
    </div>
  );
}

export default App;
