const refs = {  
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  clockface:document.querySelector('.timer')
}

class CountdownTimer {
    constructor({ onTick, targetDate, selector }) {
        this.onTick = onTick;
        this.targetDate = targetDate;
        this.selector = selector;    
        this.start();
    }
    start() {        
        setInterval(() => {            
            const startTime = Date.now();
            const deltaTime = this.targetDate - startTime;          
            const time = this.getTimerComponent(deltaTime);
            this.onTick(time);            
        });   
    };

    getTimerComponent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));    
    return { days, hours, mins, secs };
    };

    pad(value) {
    return String(value).padStart(2, '0');
    };     
};

const timer = new CountdownTimer({
    onTick: updateClockface,
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021')
});

function updateClockface({days, hours, mins, secs}){
  refs.days.textContent = `${days}`
  refs.hours.textContent = `${hours}`
  refs.mins.textContent = `${mins}`
  refs.secs.textContent = `${secs}`
}














