window.onload = function() {
    function updateClock() {
        const hoursElement = document.querySelector(".hours");
        const minutesElement = document.querySelector(".minutes");
        const secondsElement = document.querySelector(".seconds");

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    setInterval(updateClock, 1000); 
    updateClock(); 
};