
const enoughAirtimeWidget = {
    projectedUsage: '',
    availAirtime: 0,
    remainingAirtime: 0,
    calculateRemainingAirtime() {
      this.remainingAirtime = enoughAirtime(this.projectedUsage, this.availAirtime);
    }
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    const widgetElement = document.querySelector('.widget[data-widget="enoughAirtimeWidget"]');
    if (widgetElement) {
      Alpine.data('enoughAirtimeWidget', enoughAirtimeWidget);
    }
  });