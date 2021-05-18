// class new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const clockface = document.querySelector('.timer')

class CountdownTimer {
    constructor({ onTick, targetDate, selector }) {
        this.onTick = onTick;
        this.targetDate = targetDate;
        this.selector = selector;        
    }
    start() {        
        setInterval(() => {            
            const startTime = Date.now();
            const deltaTime = this.targetDate - startTime;          
            const time = this.getTimerComponent(deltaTime);
            this.onTick(time);            
        }, 1000);   
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
timer.start();

function updateClockface({ days, hours, mins, secs }) {
    clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
};

















