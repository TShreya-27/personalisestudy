const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // parse JSON bodies

app.post('/submit', (req, res) => {
  const formData = req.body;
  // Process the form data and generate the timetable
  const generatedTimetable = generateTimetable(formData);
  res.json(generatedTimetable);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
