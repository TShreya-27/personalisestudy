document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.querySelector("#generate");
  generateButton.addEventListener("click", displayOutput);
});

function displayOutput(event) {
  event.preventDefault();

  let days = parseInt(document.querySelector("#daysPerWeek").value);
  let subjectNames = Array.from(document.querySelectorAll(".subjectName")).map(
    (input) => input.value
  );
  let subjectHours = Array.from(document.querySelectorAll(".subjectHour")).map(
    (input) => parseInt(input.value)
  );
  let studyHoursPerDay = parseInt(
    document.querySelector("#studyHoursPerDay").value
  );
  let breakInterval = parseInt(document.querySelector("#breakInterval").value);
  let breakDuration = parseInt(document.querySelector("#breakDuration").value);

  let timetable = generateTimetable(
    days,
    studyHoursPerDay,
    subjectNames,
    subjectHours,
    breakInterval,
    breakDuration
  );

  // Store the timetable in local storage
  localStorage.setItem("timetable", JSON.stringify(timetable));

  // Redirect to the output page
  window.location.href = "output.html";
}

function generateTimetable(
  studyDays,
  studyHoursPerDay,
  subjectNamesList,
  subjectHoursList,
  breakInterval,
  breakDuration
) {
  let timetable = {};
  let totalSubjects = subjectNamesList.length;
  let hoursPerSubject = studyHoursPerDay / totalSubjects;

  for (let day = 1; day <= studyDays; day++) {
    let dailySchedule = [];
    let startHour = 0.0;

    for (let i = 0; i < totalSubjects; i++) {
      let endHour = startHour + hoursPerSubject;
      dailySchedule.push({
        subject: subjectNamesList[i],
        start_time: formatTime(startHour),
        end_time: formatTime(endHour),
      });
      startHour = endHour;
    }

    let breakTime = 0.0;
    while (breakTime + breakInterval <= studyHoursPerDay) {
      let breakStart = breakTime + breakInterval;
      let breakEnd = breakStart + breakDuration / 60.0;

      if (breakStart < studyHoursPerDay) {
        dailySchedule.push({
          subject: "Break",
          start_time: formatTime(breakStart),
          end_time: formatTime(breakEnd),
        });
      }
      breakTime = breakEnd;
    }

    dailySchedule.sort((a, b) => {
      let [aStartHour, aStartMinute] = a["start_time"].split(":").map(Number);
      let [bStartHour, bStartMinute] = b["start_time"].split(":").map(Number);
      return aStartHour - bStartHour || aStartMinute - bStartMinute;
    });

    timetable[`Day ${day}`] = dailySchedule;
  }

  return timetable;
}

function formatTime(decimalTime) {
  let hours = Math.floor(decimalTime);
  let minutes = Math.round((decimalTime - hours) * 60);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}
