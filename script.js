var timer = document.getElementById("countdown")


function countdown() {
    var secondsLeft = 10;
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds till quiz is over.";
        if(secondsLeft === 0 ){
            clearInterval(timeInterval);
        }
    }, 1000); 
}

countdown();