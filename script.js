document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to
    // IMPORTANT: Set your event date and time here!
    // Example: October 27, 2024, 7:00 PM (24-hour format)
    const eventDate = new Date("September 5, 2025 22:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the event date
        const distance = eventDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        if (document.getElementById("days")) {
            document.getElementById("days").innerHTML = String(days).padStart(2, '0');
            document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
        }


        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(x);
            if (document.getElementById("countdown")) {
                document.getElementById("countdown").innerHTML = '<p class="event-started">The event has started! Head to Kush Park!</p>';
                document.getElementById("countdown").style.display = 'block'; // Ensure it's visible
            }
        }
    }, 1000);
});