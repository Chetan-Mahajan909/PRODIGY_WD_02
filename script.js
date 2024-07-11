
        let startTime;
        let updatedTime;
        let difference;
        let tInterval;
        let running = false;
        let lapCount = 0;

        const displayElement = document.getElementById('display');
        const lapsElement = document.getElementById('laps');

        function startStopwatch() {
            if (!running) {
                startTime = new Date().getTime() - difference;
                tInterval = setInterval(updateTime, 1);
                running = true;
            }
        }

        function pauseStopwatch() {
            if (running) {
                clearInterval(tInterval);
                difference = new Date().getTime() - startTime;
                running = false;
            }
        }

        function resetStopwatch() {
            clearInterval(tInterval);
            running = false;
            difference = 0;
            displayElement.textContent = '00:00:00';
            lapsElement.innerHTML = '';
            lapCount = 0;
        }

        function updateTime() {
            updatedTime = new Date().getTime() - startTime;
            const seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);
            const minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
            const hours = Math.floor((updatedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            displayElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        }

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        function recordLap() {
            if (running) {
                lapCount++;
                const lapTime = displayElement.textContent;
                const lapElement = document.createElement('div');
                lapElement.classList.add('lap');
                lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
                lapsElement.appendChild(lapElement);
            }
        }
 