document.addEventListener("DOMContentLoaded",() => {
    
    const dropDate = new Date('2025-07-08T09:00:00');

    function updateCounter(){

        const now = new Date;
        const timeDifference = dropDate - now;
        // return in ms

        // convert ms in days, hours, mins and secs + math.floor to round 
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('counter').innerHTML = `drop in ${days}d:${hours}h:${minutes}m:${seconds}s`;
    }

    setInterval(updateCounter, 1000);

    updateCounter();
});
