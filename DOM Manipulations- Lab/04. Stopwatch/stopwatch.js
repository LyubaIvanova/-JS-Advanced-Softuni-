function stopwatch() {
    //this solution does not work
    const time = document.getElementById('time');
    let counter = 0;
    let intervalId;
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);

    function startTimer() {
        
        intervalId = setInterval(setIntervalFunction, 1000);
        stopBtn.disabled = !stopBtn.disabled;
        startBtn.disabled = !startBtn.disabled;
    }

    function stopTimer() {
        clearInterval(intervalId);       

        stopBtn.disabled = !stopBtn.disabled;
        startBtn.disabled = !startBtn.disabled;
        time.textContent = '00:00';
    }
    
    function setIntervalFunction() {
        counter++;
        let seconds = Math.trunc(counter % 60).toString().padStart(2, '0');
        let minutes = Math.trunc(counter / 60).toString().padStart(2, '0');

        time.textContent = minutes + ':' + seconds;
    }
}