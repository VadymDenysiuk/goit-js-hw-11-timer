const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  timer: document.getElementById('timer-1')
}

class CountdownTimer{

  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
  };

  intervalId = setInterval(() => {
    const currentDate = new Date();
    const deltaTime = this.targetDate - currentDate;
    this.getTimeComponents(deltaTime);
    this.endOfCountdown(deltaTime)
  }, 1000); 

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  endOfCountdown(deltaTime) {
    if (deltaTime <= 0) {
      clearInterval(this.intervalId)
      this.selector.textContent = 'Время пришло!'
    }
  }
};

new CountdownTimer({
  selector: refs.timer,
  targetDate: new Date('Oct 21, 2022, 13:42:50'),
});
