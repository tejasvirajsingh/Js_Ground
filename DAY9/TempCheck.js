function checkTemperature(temp) {

  if (temp < 0) {
    // Is temp LESS than 0? → FREEZING
    console.log("🥶 Freezing Point!");

  } else if (temp >= 0 && temp <= 35) {
    // Is temp BETWEEN 0 and 35? → NORMAL
    console.log("🌤️ Normal Temperature!");

  } else {
    // Is temp MORE than 35? → HOT ALERT
    console.log("🔥 Heat Alert!");
  }

}