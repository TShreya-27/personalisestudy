import React from "react";
import { useLocation } from "react-router-dom";

const TimetableOutput = () => {
  const location = useLocation();
  const timetableData = location.state;

  if (!timetableData) return <div>No timetable data available</div>;

  return (
    <div>
      <h2>Timetable for {timetableData.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.day}</td>
              <td>{subject.time}</td>
              <td>{subject.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableOutput;
