document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const statusText = document.getElementById('status');
    const restartButton = document.getElementById('restartButton');

    let totalCircles = 0;
    let accurateCircles = 0;

    restartButton.addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        totalCircles = 0;
        accurateCircles = 0;
        updateStatus();
    });

    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        context.beginPath();
        const radius = Math.random() * 50 + 10; // Random radius between 10 and 60
        const color = getRandomColor();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();

        totalCircles++;
        if (isCircle(x, y, radius)) {
            accurateCircles++;
        }

        updateStatus();
    });

    function isCircle(x, y, radius) {
        // Simulate a simple circle detection function
        // You can replace this with a more accurate algorithm if needed
        const isCircle = Math.random() > 0.5; // 50% accuracy simulation
        return isCircle;
    }

    function updateStatus() {
        const accuracy = totalCircles === 0 ? 0 : Math.round((accurateCircles / totalCircles) * 100);
        statusText.textContent = `Yuvarlak çizme doğruluğu: ${accuracy}% (${accurateCircles}/${totalCircles})`;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
