function calculateRemainingAirtime(projectedUsage, availAirtime) {
    let usage = projectedUsage.split(', ');
    let totalUsage = 0;

    for (let i = 0; i < usage.length; i++) {
      if (usage[i] === 'call') {
        totalUsage += 1.88;
      } else if (usage[i] === 'sms') {
        totalUsage += 0.75;
      } else if (usage[i] === 'data') {
        totalUsage += 12;
      }
    }

    const remainingAirtime = availAirtime - totalUsage;
    return remainingAirtime > 0 ? 'R' + remainingAirtime.toFixed(2) : 'R0.00';
  }


  function calculate() {
    const projectedUsage = document.getElementById('usage').value;
    const availAirtime = parseFloat(document.getElementById('airtime').value);

    const result = calculateRemainingAirtime(projectedUsage, availAirtime);
    document.getElementById('result').textContent = 'Remaining Airtime: ' + result;
  }