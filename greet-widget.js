const greetWidget = {
    name: '',
    greeting: '',
    greetName() {
      this.greeting = greet(this.name);
    },
    clearGreeting() {
      this.greeting = '';
    }
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    const widgetElement = document.querySelector('.widget[data-widget="greetWidget"]');
    if (widgetElement) {
      Alpine.data('greetWidget', greetWidget);
    }
  });