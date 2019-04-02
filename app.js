let ball = document.getElementById('ball');
let idSetInterval;


ball.addEventListener('click', () => {

    setInterval(bounce, 500);

    function bounce() {
        ball.style.animation = 'bounce 1s';
        ball.style.animationIterationCount = '10';
    }

});




