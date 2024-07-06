import React from 'react';
import './Timetable.css';

const Timetable = ({ timetable }) => {
  return (
    <div className="container">
      <h3>Your Timetable</h3>
      <div className="timetable-grid">
        {timetable.length === 0 ? (
          <p>No entries in the timetable.</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.subject}</td>
                  <td>{entry.day}</td>
                  <td>{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Timetable;
