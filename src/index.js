class CountdownTimer {
    constructor({ targetDate, selector }) {        
        this.targetDate = targetDate;
        this.selector = selector;
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
            clockface: document.querySelector('.timer'),
        };
        this.start();
    }
    start() {        
        setInterval(() => {            
            const startTime = Date.now();
            const deltaTime = this.targetDate - startTime;          
            const time = this.getTimerComponent(deltaTime);
            this.updateClockface(time);            
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
    updateClockface({days, hours, mins, secs}){
        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent =`${hours}`;
        this.refs.mins.textContent =`${mins}`; 
        this.refs.secs.textContent =`${secs}`; 
    };

};

const timer = new CountdownTimer({    
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022')
});















