document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  const select = document.getElementById("date-select");
  const today = new Date();
  const tomorrow = new Date(); tomorrow.setDate(today.getDate() + 1);
  const nextTomorrow = new Date(); nextTomorrow.setDate(today.getDate() + 2);
  const next3Days = new Date(); next3Days.setDate(today.getDate() + 3);
  const next4Days = new Date(); next4Days.setDate(today.getDate() + 4);

  const formatDate  = (date) => {
      return date.toDateString('en-UK', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
      });
  };

  const todayFormatted = formatDate(today);
  const tomorrowFormatted = formatDate(tomorrow);
  const nextTomorrowFormatted = formatDate(nextTomorrow);
  const next3DaysFormatted = formatDate(next3Days);
  const next4DaysFormatted = formatDate(next4Days);
  

  document.getElementById('day1').innerHTML = todayFormatted
  document.getElementById('day2').innerHTML = tomorrowFormatted
  document.getElementById('day3').innerHTML = nextTomorrowFormatted
  document.getElementById('day4').innerHTML = next3DaysFormatted
  document.getElementById('day5').innerHTML = next4DaysFormatted   
});
