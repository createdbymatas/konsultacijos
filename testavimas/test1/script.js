function loaded(){
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('loader').style.animation = 'none';
    }, 1200);
}



if (document.addEventListener)
{
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler()
{
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
    {
        document.getElementById("fullScreenWarning").style.display = "flex";
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "10 sekundžių")
            {
                document.getElementById("warningTime").innerHTML = "9 sekundžių";
            }
            else{

            }
        }, 1000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "9 sekundžių")
            {
                document.getElementById("warningTime").innerHTML = "8 sekundžių";
            }
            else{

            }
        }, 2000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "8 sekundžių")
            {
        document.getElementById("warningTime").innerHTML = "7 sekundžių";
            }
            else{

            }
        }, 3000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "7 sekundžių")
                {
                document.getElementById("warningTime").innerHTML = "6 sekundžių";
            }
            else{

            }
        }, 4000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "6 sekundžių")
            {
                document.getElementById("warningTime").innerHTML = "5 sekundžių";
            }
            else{

            }
        }, 5000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "5 sekundžių")
            {
                document.getElementById("warningTime").innerHTML = "4 sekundžių";
            }
            else{

            }
        }, 6000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "4 sekundžių")
            {
                document.getElementById("warningTime").innerHTML = "3 sekundžių";
            }
            else{

            }
        }, 7000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "3 sekundžių")
            {
                document.getElementById("warningTime").innerHTML = "2 sekundžių";
            }
            else{

            }
        }, 8000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "2 sekundžių")
            {
                document.getElementById("warningTime").innerHTML = "1 sekundės";
            }
            else{

            }
        }, 9000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "1 sekundės")
            {
                document.getElementById("warningTime").innerHTML = "0 sekundžių";
            }
            else{

            }
        }, 10000);
        setTimeout(() => {
            if (document.getElementById("fullScreenWarning").style.display === "flex" && document.getElementById("warningTime").innerHTML === "0 sekundžių")
            {
                document.getElementById("fullScreenWarning").style.display = "none";
                document.getElementById("warningTime").innerHTML = "10 sekundžių";
                finish();
                backToFullscreen();
            }
            else{

            }
        }, 11000);
    }
}
function backToFullscreen(){
    let puslapis = document.documentElement;

    if (puslapis.requestFullscreen) {
        puslapis.requestFullscreen();
    } else if (puslapis.webkitRequestFullscreen) { /* Safari */
        puslapis.webkitRequestFullscreen();
    } else if (puslapis.msRequestFullscreen) { /* IE11 */
        puslapis.msRequestFullscreen();
    }
    setTimeout(() => {
        document.getElementById("fullScreenWarning").style.display = "none";
    }, 100);
    setTimeout(() => {
        document.getElementById("warningTime").innerHTML = "10 sekundžių";
    }, 110);
}



function start(){
    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('continue1').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('start').style.display = 'none';
        document.getElementById('infoWindow').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('continue1').style.display = 'none';
        document.getElementById('continue2').style.display = 'block';
    }, 2200);
}
function toImportantInfo(){
    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('continue2').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('infoWindow').style.display = 'none';
        document.getElementById('infoWindow2').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('continue2').style.display = 'none';
        document.getElementById('continue3').style.display = 'block';
    }, 2200);
}
function begin(){
    let puslapis = document.documentElement;

    if (puslapis.requestFullscreen) {
        puslapis.requestFullscreen();
    } else if (puslapis.webkitRequestFullscreen) { /* Safari */
        puslapis.webkitRequestFullscreen();
    } else if (puslapis.msRequestFullscreen) { /* IE11 */
        puslapis.msRequestFullscreen();
    }

    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('continue3').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('infoWindow2').style.display = 'none';
        document.getElementById('listeningInfo').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('continue3').style.display = 'none';
        document.getElementById('continue4').style.display = 'block';
        document.getElementById('timeListening').style.display = 'block';
        document.getElementById('timeRemainingListening').innerHTML = '25:00';
    }, 2200);
}
function startListening(){
    document.getElementById('audio1').play();
    setTimeout(() => {
        document.getElementById('audio1').pause();
    }, 1);
    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('continue4').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
        document.getElementById('continue4').style.display = 'none';
        const startingMinutes = 25;
        let time = startingMinutes * 60; //minutes * 60 seconds
        let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

        function updateCountdown() {
            const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds; 
            const countdownElement = document.getElementById("timeRemainingListening"); 
            countdownElement.innerHTML = `${minutes}:${seconds}`;

            time--;

            if (time < 0) { //stop the setInterval when time = 0 for avoid negative time
                clearInterval(refreshIntervalId);
            }
        }
    }, 10);
    setTimeout(() => {
        document.getElementById('listeningInfo').style.display = 'none';
        document.getElementById('listeningPart1').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
    }, 2200);
    setTimeout(() => {
        document.getElementById('audio1').play();
    }, 3000);
}

document.getElementById('audio1').addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progress = document.getElementById('playProgress1');
    let progressWidth = (currentTime / duration) * 100;
    progress.style.width = `${progressWidth}%`;

    let musicCurrentTime = document.getElementById("timePlayed1");

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});
document.getElementById('audio1').onended = function() {
    document.getElementById('audio2').play();
    setTimeout(() => {
        document.getElementById('audio2').pause();
    }, 1);
    document.getElementById('loading2').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('listeningPart1').style.display = 'none';
        document.getElementById('listeningPart2').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
    }, 2200);
    setTimeout(() => {
        document.getElementById('audio2').play();
    }, 3000);
}
document.getElementById('audio2').addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progress = document.getElementById('playProgress2');
    let progressWidth = (currentTime / duration) * 100;
    progress.style.width = `${progressWidth}%`;

    let musicCurrentTime = document.getElementById("timePlayed2");

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});
document.getElementById('audio2').onended = function() {
    document.getElementById('audio3').play();
    setTimeout(() => {
        document.getElementById('audio3').pause();
    }, 1);
    document.getElementById('loading2').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('listeningPart2').style.display = 'none';
        document.getElementById('listeningPart3').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
    }, 2200);
    setTimeout(() => {
        document.getElementById('audio3').play();
    }, 3000);
}
document.getElementById('audio3').addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progress = document.getElementById('playProgress3');
    let progressWidth = (currentTime / duration) * 100;
    progress.style.width = `${progressWidth}%`;

    let musicCurrentTime = document.getElementById("timePlayed3");

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});
document.getElementById('audio3').onended = function() {
    document.getElementById('loading2').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
        document.getElementById('timeListening').style.display = 'none';
    }, 10);
    setTimeout(() => {
        document.getElementById('listeningPart3').style.display = 'none';
        document.getElementById('speakingInfo').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('continue5').style.display = 'block';
        document.getElementById('timeSpeaking').style.display = 'block';
        document.getElementById('timeRemainingSpeaking').innerHTML = '25:00';
    }, 2200);
}

function p1q1a1(){
    document.getElementById('p1q1a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q1a1').style.color = '#202020';
    document.getElementById('p1q1a2').style.backgroundColor = '#202020';
    document.getElementById('p1q1a2').style.color = '#F5F5DC';
    document.getElementById('p1q1a3').style.backgroundColor = '#202020';
    document.getElementById('p1q1a3').style.color = '#F5F5DC';
    document.getElementById('p1q1').value = 'a1';
}
function p1q1a2(){
    document.getElementById('p1q1a1').style.backgroundColor = '#202020';
    document.getElementById('p1q1a1').style.color = '#F5F5DC';
    document.getElementById('p1q1a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q1a2').style.color = '#202020';
    document.getElementById('p1q1a3').style.backgroundColor = '#202020';
    document.getElementById('p1q1a3').style.color = '#F5F5DC';
    document.getElementById('p1q1').value = 'a2';
}
function p1q1a3(){
    document.getElementById('p1q1a1').style.backgroundColor = '#202020';
    document.getElementById('p1q1a1').style.color = '#F5F5DC';
    document.getElementById('p1q1a2').style.backgroundColor = '#202020';
    document.getElementById('p1q1a2').style.color = '#F5F5DC';
    document.getElementById('p1q1a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q1a3').style.color = '#202020';
    document.getElementById('p1q1').value = 'a3';
}

function p1q2a1(){
    document.getElementById('p1q2a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q2a1').style.color = '#202020';
    document.getElementById('p1q2a2').style.backgroundColor = '#202020';
    document.getElementById('p1q2a2').style.color = '#F5F5DC';
    document.getElementById('p1q2a3').style.backgroundColor = '#202020';
    document.getElementById('p1q2a3').style.color = '#F5F5DC';
    document.getElementById('p1q2').value = 'a1';
}
function p1q2a2(){
    document.getElementById('p1q2a1').style.backgroundColor = '#202020';
    document.getElementById('p1q2a1').style.color = '#F5F5DC';
    document.getElementById('p1q2a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q2a2').style.color = '#202020';
    document.getElementById('p1q2a3').style.backgroundColor = '#202020';
    document.getElementById('p1q2a3').style.color = '#F5F5DC';
    document.getElementById('p1q2').value = 'a2';
}
function p1q2a3(){
    document.getElementById('p1q2a1').style.backgroundColor = '#202020';
    document.getElementById('p1q2a1').style.color = '#F5F5DC';
    document.getElementById('p1q2a2').style.backgroundColor = '#202020';
    document.getElementById('p1q2a2').style.color = '#F5F5DC';
    document.getElementById('p1q2a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q2a3').style.color = '#202020';
    document.getElementById('p1q2').value = 'a3';
}

function p1q3a1(){
    document.getElementById('p1q3a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q3a1').style.color = '#202020';
    document.getElementById('p1q3a2').style.backgroundColor = '#202020';
    document.getElementById('p1q3a2').style.color = '#F5F5DC';
    document.getElementById('p1q3a3').style.backgroundColor = '#202020';
    document.getElementById('p1q3a3').style.color = '#F5F5DC';
    document.getElementById('p1q3').value = 'a1';
}
function p1q3a2(){
    document.getElementById('p1q3a1').style.backgroundColor = '#202020';
    document.getElementById('p1q3a1').style.color = '#F5F5DC';
    document.getElementById('p1q3a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q3a2').style.color = '#202020';
    document.getElementById('p1q3a3').style.backgroundColor = '#202020';
    document.getElementById('p1q3a3').style.color = '#F5F5DC';
    document.getElementById('p1q3').value = 'a2';
}
function p1q3a3(){
    document.getElementById('p1q3a1').style.backgroundColor = '#202020';
    document.getElementById('p1q3a1').style.color = '#F5F5DC';
    document.getElementById('p1q3a2').style.backgroundColor = '#202020';
    document.getElementById('p1q3a2').style.color = '#F5F5DC';
    document.getElementById('p1q3a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q3a3').style.color = '#202020';
    document.getElementById('p1q3').value = 'a3';
}

function p1q4a1(){
    document.getElementById('p1q4a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q4a1').style.color = '#202020';
    document.getElementById('p1q4a2').style.backgroundColor = '#202020';
    document.getElementById('p1q4a2').style.color = '#F5F5DC';
    document.getElementById('p1q4a3').style.backgroundColor = '#202020';
    document.getElementById('p1q4a3').style.color = '#F5F5DC';
    document.getElementById('p1q4').value = 'a1';
}
function p1q4a2(){
    document.getElementById('p1q4a1').style.backgroundColor = '#202020';
    document.getElementById('p1q4a1').style.color = '#F5F5DC';
    document.getElementById('p1q4a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q4a2').style.color = '#202020';
    document.getElementById('p1q4a3').style.backgroundColor = '#202020';
    document.getElementById('p1q4a3').style.color = '#F5F5DC';
    document.getElementById('p1q4').value = 'a2';
}
function p1q4a3(){
    document.getElementById('p1q4a1').style.backgroundColor = '#202020';
    document.getElementById('p1q4a1').style.color = '#F5F5DC';
    document.getElementById('p1q4a2').style.backgroundColor = '#202020';
    document.getElementById('p1q4a2').style.color = '#F5F5DC';
    document.getElementById('p1q4a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q4a3').style.color = '#202020';
    document.getElementById('p1q4').value = 'a3';
}

function p1q5a1(){
    document.getElementById('p1q5a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q5a1').style.color = '#202020';
    document.getElementById('p1q5a2').style.backgroundColor = '#202020';
    document.getElementById('p1q5a2').style.color = '#F5F5DC';
    document.getElementById('p1q5a3').style.backgroundColor = '#202020';
    document.getElementById('p1q5a3').style.color = '#F5F5DC';
    document.getElementById('p1q5').value = 'a1';
}
function p1q5a2(){
    document.getElementById('p1q5a1').style.backgroundColor = '#202020';
    document.getElementById('p1q5a1').style.color = '#F5F5DC';
    document.getElementById('p1q5a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q5a2').style.color = '#202020';
    document.getElementById('p1q5a3').style.backgroundColor = '#202020';
    document.getElementById('p1q5a3').style.color = '#F5F5DC';
    document.getElementById('p1q5').value = 'a2';
}
function p1q5a3(){
    document.getElementById('p1q5a1').style.backgroundColor = '#202020';
    document.getElementById('p1q5a1').style.color = '#F5F5DC';
    document.getElementById('p1q5a2').style.backgroundColor = '#202020';
    document.getElementById('p1q5a2').style.color = '#F5F5DC';
    document.getElementById('p1q5a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q5a3').style.color = '#202020';
    document.getElementById('p1q5').value = 'a3';
}

function p1q6a1(){
    document.getElementById('p1q6a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q6a1').style.color = '#202020';
    document.getElementById('p1q6a2').style.backgroundColor = '#202020';
    document.getElementById('p1q6a2').style.color = '#F5F5DC';
    document.getElementById('p1q6a3').style.backgroundColor = '#202020';
    document.getElementById('p1q6a3').style.color = '#F5F5DC';
    document.getElementById('p1q6').value = 'a1';
}
function p1q6a2(){
    document.getElementById('p1q6a1').style.backgroundColor = '#202020';
    document.getElementById('p1q6a1').style.color = '#F5F5DC';
    document.getElementById('p1q6a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q6a2').style.color = '#202020';
    document.getElementById('p1q6a3').style.backgroundColor = '#202020';
    document.getElementById('p1q6a3').style.color = '#F5F5DC';
    document.getElementById('p1q6').value = 'a2';
}
function p1q6a3(){
    document.getElementById('p1q6a1').style.backgroundColor = '#202020';
    document.getElementById('p1q6a1').style.color = '#F5F5DC';
    document.getElementById('p1q6a2').style.backgroundColor = '#202020';
    document.getElementById('p1q6a2').style.color = '#F5F5DC';
    document.getElementById('p1q6a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p1q6a3').style.color = '#202020';
    document.getElementById('p1q6').value = 'a3';
}



function p2q1a1(){
    document.getElementById('p2q1a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q1a1').style.color = '#202020';
    document.getElementById('p2q1a2').style.backgroundColor = '#202020';
    document.getElementById('p2q1a2').style.color = '#F5F5DC';
    document.getElementById('p2q1a3').style.backgroundColor = '#202020';
    document.getElementById('p2q1a3').style.color = '#F5F5DC';
    document.getElementById('p2q1').value = 'a1';
}
function p2q1a2(){
    document.getElementById('p2q1a1').style.backgroundColor = '#202020';
    document.getElementById('p2q1a1').style.color = '#F5F5DC';
    document.getElementById('p2q1a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q1a2').style.color = '#202020';
    document.getElementById('p2q1a3').style.backgroundColor = '#202020';
    document.getElementById('p2q1a3').style.color = '#F5F5DC';
    document.getElementById('p2q1').value = 'a2';
}
function p2q1a3(){
    document.getElementById('p2q1a1').style.backgroundColor = '#202020';
    document.getElementById('p2q1a1').style.color = '#F5F5DC';
    document.getElementById('p2q1a2').style.backgroundColor = '#202020';
    document.getElementById('p2q1a2').style.color = '#F5F5DC';
    document.getElementById('p2q1a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q1a3').style.color = '#202020';
    document.getElementById('p2q1').value = 'a3';
}

function p2q2a1(){
    document.getElementById('p2q2a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q2a1').style.color = '#202020';
    document.getElementById('p2q2a2').style.backgroundColor = '#202020';
    document.getElementById('p2q2a2').style.color = '#F5F5DC';
    document.getElementById('p2q2a3').style.backgroundColor = '#202020';
    document.getElementById('p2q2a3').style.color = '#F5F5DC';
    document.getElementById('p2q2').value = 'a1';
}
function p2q2a2(){
    document.getElementById('p2q2a1').style.backgroundColor = '#202020';
    document.getElementById('p2q2a1').style.color = '#F5F5DC';
    document.getElementById('p2q2a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q2a2').style.color = '#202020';
    document.getElementById('p2q2a3').style.backgroundColor = '#202020';
    document.getElementById('p2q2a3').style.color = '#F5F5DC';
    document.getElementById('p2q2').value = 'a2';
}
function p2q2a3(){
    document.getElementById('p2q2a1').style.backgroundColor = '#202020';
    document.getElementById('p2q2a1').style.color = '#F5F5DC';
    document.getElementById('p2q2a2').style.backgroundColor = '#202020';
    document.getElementById('p2q2a2').style.color = '#F5F5DC';
    document.getElementById('p2q2a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q2a3').style.color = '#202020';
    document.getElementById('p2q2').value = 'a3';
}

function p2q3a1(){
    document.getElementById('p2q3a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q3a1').style.color = '#202020';
    document.getElementById('p2q3a2').style.backgroundColor = '#202020';
    document.getElementById('p2q3a2').style.color = '#F5F5DC';
    document.getElementById('p2q3a3').style.backgroundColor = '#202020';
    document.getElementById('p2q3a3').style.color = '#F5F5DC';
    document.getElementById('p2q3').value = 'a1';
}
function p2q3a2(){
    document.getElementById('p2q3a1').style.backgroundColor = '#202020';
    document.getElementById('p2q3a1').style.color = '#F5F5DC';
    document.getElementById('p2q3a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q3a2').style.color = '#202020';
    document.getElementById('p2q3a3').style.backgroundColor = '#202020';
    document.getElementById('p2q3a3').style.color = '#F5F5DC';
    document.getElementById('p2q3').value = 'a2';
}
function p2q3a3(){
    document.getElementById('p2q3a1').style.backgroundColor = '#202020';
    document.getElementById('p2q3a1').style.color = '#F5F5DC';
    document.getElementById('p2q3a2').style.backgroundColor = '#202020';
    document.getElementById('p2q3a2').style.color = '#F5F5DC';
    document.getElementById('p2q3a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q3a3').style.color = '#202020';
    document.getElementById('p2q3').value = 'a3';
}

function p2q4a1(){
    document.getElementById('p2q4a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q4a1').style.color = '#202020';
    document.getElementById('p2q4a2').style.backgroundColor = '#202020';
    document.getElementById('p2q4a2').style.color = '#F5F5DC';
    document.getElementById('p2q4a3').style.backgroundColor = '#202020';
    document.getElementById('p2q4a3').style.color = '#F5F5DC';
    document.getElementById('p2q4').value = 'a1';
}
function p2q4a2(){
    document.getElementById('p2q4a1').style.backgroundColor = '#202020';
    document.getElementById('p2q4a1').style.color = '#F5F5DC';
    document.getElementById('p2q4a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q4a2').style.color = '#202020';
    document.getElementById('p2q4a3').style.backgroundColor = '#202020';
    document.getElementById('p2q4a3').style.color = '#F5F5DC';
    document.getElementById('p2q4').value = 'a2';
}
function p2q4a3(){
    document.getElementById('p2q4a1').style.backgroundColor = '#202020';
    document.getElementById('p2q4a1').style.color = '#F5F5DC';
    document.getElementById('p2q4a2').style.backgroundColor = '#202020';
    document.getElementById('p2q4a2').style.color = '#F5F5DC';
    document.getElementById('p2q4a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q4a3').style.color = '#202020';
    document.getElementById('p2q4').value = 'a3';
}

function p2q5a1(){
    document.getElementById('p2q5a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q5a1').style.color = '#202020';
    document.getElementById('p2q5a2').style.backgroundColor = '#202020';
    document.getElementById('p2q5a2').style.color = '#F5F5DC';
    document.getElementById('p2q5a3').style.backgroundColor = '#202020';
    document.getElementById('p2q5a3').style.color = '#F5F5DC';
    document.getElementById('p2q5').value = 'a1';
}
function p2q5a2(){
    document.getElementById('p2q5a1').style.backgroundColor = '#202020';
    document.getElementById('p2q5a1').style.color = '#F5F5DC';
    document.getElementById('p2q5a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q5a2').style.color = '#202020';
    document.getElementById('p2q5a3').style.backgroundColor = '#202020';
    document.getElementById('p2q5a3').style.color = '#F5F5DC';
    document.getElementById('p2q5').value = 'a2';
}
function p2q5a3(){
    document.getElementById('p2q5a1').style.backgroundColor = '#202020';
    document.getElementById('p2q5a1').style.color = '#F5F5DC';
    document.getElementById('p2q5a2').style.backgroundColor = '#202020';
    document.getElementById('p2q5a2').style.color = '#F5F5DC';
    document.getElementById('p2q5a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q5a3').style.color = '#202020';
    document.getElementById('p2q5').value = 'a3';
}

function p2q6a1(){
    document.getElementById('p2q6a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q6a1').style.color = '#202020';
    document.getElementById('p2q6a2').style.backgroundColor = '#202020';
    document.getElementById('p2q6a2').style.color = '#F5F5DC';
    document.getElementById('p2q6a3').style.backgroundColor = '#202020';
    document.getElementById('p2q6a3').style.color = '#F5F5DC';
    document.getElementById('p2q6').value = 'a1';
}
function p2q6a2(){
    document.getElementById('p2q6a1').style.backgroundColor = '#202020';
    document.getElementById('p2q6a1').style.color = '#F5F5DC';
    document.getElementById('p2q6a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q6a2').style.color = '#202020';
    document.getElementById('p2q6a3').style.backgroundColor = '#202020';
    document.getElementById('p2q6a3').style.color = '#F5F5DC';
    document.getElementById('p2q6').value = 'a2';
}
function p2q6a3(){
    document.getElementById('p2q6a1').style.backgroundColor = '#202020';
    document.getElementById('p2q6a1').style.color = '#F5F5DC';
    document.getElementById('p2q6a2').style.backgroundColor = '#202020';
    document.getElementById('p2q6a2').style.color = '#F5F5DC';
    document.getElementById('p2q6a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q6a3').style.color = '#202020';
    document.getElementById('p2q6').value = 'a3';
}

function p2q7a1(){
    document.getElementById('p2q7a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q7a1').style.color = '#202020';
    document.getElementById('p2q7a2').style.backgroundColor = '#202020';
    document.getElementById('p2q7a2').style.color = '#F5F5DC';
    document.getElementById('p2q7a3').style.backgroundColor = '#202020';
    document.getElementById('p2q7a3').style.color = '#F5F5DC';
    document.getElementById('p2q7').value = 'a1';
}
function p2q7a2(){
    document.getElementById('p2q7a1').style.backgroundColor = '#202020';
    document.getElementById('p2q7a1').style.color = '#F5F5DC';
    document.getElementById('p2q7a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q7a2').style.color = '#202020';
    document.getElementById('p2q7a3').style.backgroundColor = '#202020';
    document.getElementById('p2q7a3').style.color = '#F5F5DC';
    document.getElementById('p2q7').value = 'a2';
}
function p2q7a3(){
    document.getElementById('p2q7a1').style.backgroundColor = '#202020';
    document.getElementById('p2q7a1').style.color = '#F5F5DC';
    document.getElementById('p2q7a2').style.backgroundColor = '#202020';
    document.getElementById('p2q7a2').style.color = '#F5F5DC';
    document.getElementById('p2q7a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q7a3').style.color = '#202020';
    document.getElementById('p2q7').value = 'a3';
}



function p3q1a1(){
    document.getElementById('p3q1a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q1a1').style.color = '#202020';
    document.getElementById('p3q1a2').style.backgroundColor = '#202020';
    document.getElementById('p3q1a2').style.color = '#F5F5DC';
    document.getElementById('p3q1').value = 'a1';
}
function p3q1a2(){
    document.getElementById('p3q1a1').style.backgroundColor = '#202020';
    document.getElementById('p3q1a1').style.color = '#F5F5DC';
    document.getElementById('p3q1a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q1a2').style.color = '#202020';
    document.getElementById('p3q1').value = 'a2';
}
function p3q1a3(){
    document.getElementById('p3q1a1').style.backgroundColor = '#202020';
    document.getElementById('p3q1a1').style.color = '#F5F5DC';
    document.getElementById('p3q1a2').style.backgroundColor = '#202020';
    document.getElementById('p3q1a2').style.color = '#F5F5DC';
    document.getElementById('p3q1').value = 'a3';
}

function p3q2a1(){
    document.getElementById('p3q2a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q2a1').style.color = '#202020';
    document.getElementById('p3q2a2').style.backgroundColor = '#202020';
    document.getElementById('p3q2a2').style.color = '#F5F5DC';
    document.getElementById('p3q2').value = 'a1';
}
function p3q2a2(){
    document.getElementById('p3q2a1').style.backgroundColor = '#202020';
    document.getElementById('p3q2a1').style.color = '#F5F5DC';
    document.getElementById('p3q2a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q2a2').style.color = '#202020';
    document.getElementById('p3q2').value = 'a2';
}
function p3q2a3(){
    document.getElementById('p3q2a1').style.backgroundColor = '#202020';
    document.getElementById('p3q2a1').style.color = '#F5F5DC';
    document.getElementById('p3q2a2').style.backgroundColor = '#202020';
    document.getElementById('p3q2a2').style.color = '#F5F5DC';
    document.getElementById('p3q2').value = 'a3';
}

function p3q3a1(){
    document.getElementById('p3q3a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q3a1').style.color = '#202020';
    document.getElementById('p3q3a2').style.backgroundColor = '#202020';
    document.getElementById('p3q3a2').style.color = '#F5F5DC';
    document.getElementById('p3q3').value = 'a1';
}
function p3q3a2(){
    document.getElementById('p3q3a1').style.backgroundColor = '#202020';
    document.getElementById('p3q3a1').style.color = '#F5F5DC';
    document.getElementById('p3q3a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q3a2').style.color = '#202020';
    document.getElementById('p3q3').value = 'a2';
}
function p3q3a3(){
    document.getElementById('p3q3a1').style.backgroundColor = '#202020';
    document.getElementById('p3q3a1').style.color = '#F5F5DC';
    document.getElementById('p3q3a2').style.backgroundColor = '#202020';
    document.getElementById('p3q3a2').style.color = '#F5F5DC';
    document.getElementById('p3q3').value = 'a3';
}

function p3q4a1(){
    document.getElementById('p3q4a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q4a1').style.color = '#202020';
    document.getElementById('p3q4a2').style.backgroundColor = '#202020';
    document.getElementById('p3q4a2').style.color = '#F5F5DC';
    document.getElementById('p3q4').value = 'a1';
}
function p3q4a2(){
    document.getElementById('p3q4a1').style.backgroundColor = '#202020';
    document.getElementById('p3q4a1').style.color = '#F5F5DC';
    document.getElementById('p3q4a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q4a2').style.color = '#202020';
    document.getElementById('p3q4').value = 'a2';
}
function p3q4a3(){
    document.getElementById('p3q4a1').style.backgroundColor = '#202020';
    document.getElementById('p3q4a1').style.color = '#F5F5DC';
    document.getElementById('p3q4a2').style.backgroundColor = '#202020';
    document.getElementById('p3q4a2').style.color = '#F5F5DC';
    document.getElementById('p3q4').value = 'a3';
}

function p3q5a1(){
    document.getElementById('p3q5a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q5a1').style.color = '#202020';
    document.getElementById('p3q5a2').style.backgroundColor = '#202020';
    document.getElementById('p3q5a2').style.color = '#F5F5DC';
    document.getElementById('p3q5').value = 'a1';
}
function p3q5a2(){
    document.getElementById('p3q5a1').style.backgroundColor = '#202020';
    document.getElementById('p3q5a1').style.color = '#F5F5DC';
    document.getElementById('p3q5a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q5a2').style.color = '#202020';
    document.getElementById('p3q5').value = 'a2';
}
function p3q5a3(){
    document.getElementById('p3q5a1').style.backgroundColor = '#202020';
    document.getElementById('p3q5a1').style.color = '#F5F5DC';
    document.getElementById('p3q5a2').style.backgroundColor = '#202020';
    document.getElementById('p3q5a2').style.color = '#F5F5DC';
    document.getElementById('p3q5').value = 'a3';
}

function p3q6a1(){
    document.getElementById('p3q6a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q6a1').style.color = '#202020';
    document.getElementById('p3q6a2').style.backgroundColor = '#202020';
    document.getElementById('p3q6a2').style.color = '#F5F5DC';
    document.getElementById('p3q6').value = 'a1';
}
function p3q6a2(){
    document.getElementById('p3q6a1').style.backgroundColor = '#202020';
    document.getElementById('p3q6a1').style.color = '#F5F5DC';
    document.getElementById('p3q6a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q6a2').style.color = '#202020';
    document.getElementById('p3q6').value = 'a2';
}
function p3q6a3(){
    document.getElementById('p3q6a1').style.backgroundColor = '#202020';
    document.getElementById('p3q6a1').style.color = '#F5F5DC';
    document.getElementById('p3q6a2').style.backgroundColor = '#202020';
    document.getElementById('p3q6a2').style.color = '#F5F5DC';
    document.getElementById('p3q6').value = 'a3';
}

function p3q7a1(){
    document.getElementById('p3q7a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q7a1').style.color = '#202020';
    document.getElementById('p3q7a2').style.backgroundColor = '#202020';
    document.getElementById('p3q7a2').style.color = '#F5F5DC';
    document.getElementById('p3q7').value = 'a1';
}
function p3q7a2(){
    document.getElementById('p3q7a1').style.backgroundColor = '#202020';
    document.getElementById('p3q7a1').style.color = '#F5F5DC';
    document.getElementById('p3q7a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q7a2').style.color = '#202020';
    document.getElementById('p3q7').value = 'a2';
}
function p3q7a3(){
    document.getElementById('p3q7a1').style.backgroundColor = '#202020';
    document.getElementById('p3q7a1').style.color = '#F5F5DC';
    document.getElementById('p3q7a2').style.backgroundColor = '#202020';
    document.getElementById('p3q7a2').style.color = '#F5F5DC';
    document.getElementById('p3q7').value = 'a3';
}

function checkResults(){
    let all = 0;
    if(document.getElementById('p1q1').value == 'a1'){
        all = all+1;
        document.getElementById('p1q1a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q2').value == 'a3'){
        all = all+1;
        document.getElementById('p1q2a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q3').value == 'a2'){
        all = all+1;
        document.getElementById('p1q3a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q4').value == 'a3'){
        all = all+1;
        document.getElementById('p1q4a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q5').value == 'a1'){
        all = all+1;
        document.getElementById('p1q5a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q6').value == 'a1'){
        all = all+1;
        document.getElementById('p1q6a1r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q1').value == 'a1'){
        all = all+1;
        document.getElementById('p2q1a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q2').value == 'a3'){
        all = all+1;
        document.getElementById('p2q2a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q3').value == 'a1'){
        all = all+1;
        document.getElementById('p2q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q4').value == 'a3'){
        all = all+1;
        document.getElementById('p2q4a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q5').value == 'a2'){
        all = all+1;
        document.getElementById('p2q5a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q6').value == 'a1'){
        all = all+1;
        document.getElementById('p2q6a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q7').value == 'a3'){
        all = all+1;
        document.getElementById('p2q7a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q1').value == 'a2'){
        all = all+1;
        document.getElementById('p3q1a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q2').value == 'a2'){
        all = all+1;
        document.getElementById('p3q2a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q3').value == 'a1'){
        all = all+1;
        document.getElementById('p3q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q4').value == 'a2'){
        all = all+1;
        document.getElementById('p3q4a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q5').value == 'a2'){
        all = all+1;
        document.getElementById('p3q5a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q6').value == 'a1'){
        all = all+1;
        document.getElementById('p3q6a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q7').value == 'a1'){
        all = all+1;
        document.getElementById('p3q7a1r').style.backgroundColor = "#F5F5DC";
    }

    document.getElementById('totalPoints').innerHTML = all;
    document.getElementById('totalPercentage').innerHTML = (all*100)/20 + ' %';

    document.getElementById('totalPoints2').innerHTML = all;
    document.getElementById('totalPercentage2').innerHTML = (all*100)/20 + ' %';
}
function checkWrongResults(){
    if(document.getElementById('p1q1').value == 'a2'){
        document.getElementById('p1q1a2r').style.borderColor = "red";
        document.getElementById('p1q1a2r').style.color = "red";
        document.getElementById('p1q1a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q1').value == 'a3'){
        document.getElementById('p1q1a3r').style.borderColor = "red";
        document.getElementById('p1q1a3r').style.color = "red";
        document.getElementById('p1q1a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p1q2').value == 'a1'){
        document.getElementById('p1q2a1r').style.borderColor = "red";
        document.getElementById('p1q2a1r').style.color = "red";
        document.getElementById('p1q2a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q2').value == 'a2'){
        document.getElementById('p1q2a2r').style.borderColor = "red";
        document.getElementById('p1q2a2r').style.color = "red";
        document.getElementById('p1q2a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p1q3').value == 'a1'){
        document.getElementById('p1q3a1r').style.borderColor = "red";
        document.getElementById('p1q3a1r').style.color = "red";
        document.getElementById('p1q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q3').value == 'a3'){
        document.getElementById('p1q3a3r').style.borderColor = "red";
        document.getElementById('p1q3a3r').style.color = "red";
        document.getElementById('p1q3a3r').style.backgroundColor = "#F5F5DC";
    }

    
    if(document.getElementById('p1q4').value == 'a1'){
        document.getElementById('p1q4a1r').style.borderColor = "red";
        document.getElementById('p1q4a1r').style.color = "red";
        document.getElementById('p1q4a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q4').value == 'a2'){
        document.getElementById('p1q4a2r').style.borderColor = "red";
        document.getElementById('p1q4a2r').style.color = "red";
        document.getElementById('p1q4a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p1q5').value == 'a2'){
        document.getElementById('p1q5a2r').style.borderColor = "red";
        document.getElementById('p1q5a2r').style.color = "red";
        document.getElementById('p1q5a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q5').value == 'a3'){
        document.getElementById('p1q5a3r').style.borderColor = "red";
        document.getElementById('p1q5a3r').style.color = "red";
        document.getElementById('p1q5a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p1q6').value == 'a2'){
        document.getElementById('p1q6a2r').style.borderColor = "red";
        document.getElementById('p1q6a2r').style.color = "red";
        document.getElementById('p1q6a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q6').value == 'a3'){
        document.getElementById('p1q6a3r').style.borderColor = "red";
        document.getElementById('p1q6a3r').style.color = "red";
        document.getElementById('p1q6a3r').style.backgroundColor = "#F5F5DC";
    }


    if(document.getElementById('p2q1').value == 'a2'){
        document.getElementById('p2q1a2r').style.borderColor = "red";
        document.getElementById('p2q1a2r').style.color = "red";
        document.getElementById('p2q1a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q1').value == 'a3'){
        document.getElementById('p2q1a3r').style.borderColor = "red";
        document.getElementById('p2q1a3r').style.color = "red";
        document.getElementById('p2q1a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q2').value == 'a1'){
        document.getElementById('p2q2a1r').style.borderColor = "red";
        document.getElementById('p2q2a1r').style.color = "red";
        document.getElementById('p2q2a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q2').value == 'a2'){
        document.getElementById('p2q2a2r').style.borderColor = "red";
        document.getElementById('p2q2a2r').style.color = "red";
        document.getElementById('p2q2a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q3').value == 'a2'){
        document.getElementById('p2q3a2r').style.borderColor = "red";
        document.getElementById('p2q3a2r').style.color = "red";
        document.getElementById('p2q3a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q3').value == 'a3'){
        document.getElementById('p2q3a3r').style.borderColor = "red";
        document.getElementById('p2q3a3r').style.color = "red";
        document.getElementById('p2q3a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q4').value == 'a1'){
        document.getElementById('p2q4a1r').style.borderColor = "red";
        document.getElementById('p2q4a1r').style.color = "red";
        document.getElementById('p2q4a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q4').value == 'a2'){
        document.getElementById('p2q4a2r').style.borderColor = "red";
        document.getElementById('p2q4a2r').style.color = "red";
        document.getElementById('p2q4a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q5').value == 'a1'){
        document.getElementById('p2q5a1r').style.borderColor = "red";
        document.getElementById('p2q5a1r').style.color = "red";
        document.getElementById('p2q5a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q5').value == 'a3'){
        document.getElementById('p2q5a3r').style.borderColor = "red";
        document.getElementById('p2q5a3r').style.color = "red";
        document.getElementById('p2q5a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q6').value == 'a2'){
        document.getElementById('p2q6a2r').style.borderColor = "red";
        document.getElementById('p2q6a2r').style.color = "red";
        document.getElementById('p2q6a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q6').value == 'a3'){
        document.getElementById('p2q6a3r').style.borderColor = "red";
        document.getElementById('p2q6a3r').style.color = "red";
        document.getElementById('p2q6a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q7').value == 'a1'){
        document.getElementById('p2q6a1r').style.borderColor = "red";
        document.getElementById('p2q6a1r').style.color = "red";
        document.getElementById('p2q6a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q7').value == 'a2'){
        document.getElementById('p2q6a2r').style.borderColor = "red";
        document.getElementById('p2q6a2r').style.color = "red";
        document.getElementById('p2q6a2r').style.backgroundColor = "#F5F5DC";
    }


    if(document.getElementById('p3q1').value == 'a1'){
        document.getElementById('p3q1a1r').style.borderColor = "red";
        document.getElementById('p3q1a1r').style.color = "red";
        document.getElementById('p3q1a1r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q2').value == 'a1'){
        document.getElementById('p3q2a1r').style.borderColor = "red";
        document.getElementById('p3q2a1r').style.color = "red";
        document.getElementById('p3q2a1r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q3').value == 'a2'){
        document.getElementById('p3q3a2r').style.borderColor = "red";
        document.getElementById('p3q3a2r').style.color = "red";
        document.getElementById('p3q3a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q4').value == 'a1'){
        document.getElementById('p3q4a1r').style.borderColor = "red";
        document.getElementById('p3q4a1r').style.color = "red";
        document.getElementById('p3q4a1r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q5').value == 'a1'){
        document.getElementById('p3q5a1r').style.borderColor = "red";
        document.getElementById('p3q5a1r').style.color = "red";
        document.getElementById('p3q5a1r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q6').value == 'a2'){
        document.getElementById('p3q6a2r').style.borderColor = "red";
        document.getElementById('p3q6a2r').style.color = "red";
        document.getElementById('p3q6a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q7').value == 'a2'){
        document.getElementById('p3q7a2r').style.borderColor = "red";
        document.getElementById('p3q7a2r').style.color = "red";
        document.getElementById('p3q7a2r').style.backgroundColor = "#F5F5DC";
    }
}

function startSpeaking(){
    document.getElementById('timeSpeaking').style.display = 'block';
    document.getElementById('timeRemainingSpeaking').innerHTML = '25:00';
    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('continue5').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
        const startingMinutes = 25;
        let time = startingMinutes * 60; //minutes * 60 seconds
        let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

        function updateCountdown() {
            const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds; 
            const countdownElement = document.getElementById("timeRemainingSpeaking"); 
            countdownElement.innerHTML = `${minutes}:${seconds}`;

            time--;

            if (time < 0) { //stop the setInterval when time = 0 for avoid negative time
                clearInterval(refreshIntervalId);
            }
        }
    }, 10);
    setTimeout(() => {
        document.getElementById('speakingInfo').style.display = 'none';
        document.getElementById('speakingWindow').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('continue5').style.display = 'none';
        document.getElementById('planBtn').style.display = 'block';
        document.getElementById('gradingBtn').style.display = 'block';
        document.getElementById('dummyBtn').style.display = 'none';
    }, 2200);
    setTimeout(() => {
        speakNow();
    }, 1502200);
}
function speakNow(){
    document.getElementById('planI').classList.remove("fa-xmark");
    document.getElementById('planI').classList.add("fa-clipboard-list");
    document.getElementById('speechPlanBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('speechPlanBg').style.display = 'none';
    }, 300);
    document.getElementById('gradingI').classList.remove("fa-xmark");
    document.getElementById('gradingI').classList.add("fa-graduation-cap");
    document.getElementById('gradingCriteriaBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('gradingCriteriaBg').style.display = 'none';
    }, 300);
    document.getElementById('planBtn').style.display = 'none';
    document.getElementById('gradingBtn').style.display = 'none';
    document.getElementById('dummyBtn').style.display = 'block';


    document.getElementById('audioSpeaking').play();
    setTimeout(() => {
        document.getElementById('audioSpeaking').pause();
    }, 1);
    document.getElementById('loading2').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('timeSpeaking').style.display = 'none';
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('speakingWindow').style.display = 'none';
        document.getElementById('speechWindow').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('timeSpeech').style.display = 'block';
        document.getElementById('timeRemainingSpeech').innerHTML = '4:00';
    }, 2200);
    setTimeout(() => {
        document.getElementById('audioSpeaking').play();
    }, 3000);
}
document.getElementById('audioSpeaking').onended = function() {
    document.getElementById('audioEnd').play();
    setTimeout(() => {
        document.getElementById('audioEnd').pause();
    }, 1);
    const startingMinutes = 4;
    let time = startingMinutes * 60; //minutes * 60 seconds
    let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

    function updateCountdown() {
        const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds; 
        const countdownElement = document.getElementById("timeRemainingSpeech"); 
        countdownElement.innerHTML = `${minutes}:${seconds}`;

        time--;

        if (time < 0) { //stop the setInterval when time = 0 for avoid negative time
            clearInterval(refreshIntervalId);
        }
    }
    stopwatch();
    document.getElementById('recordingSpeech').style.display = 'block';
    document.getElementById('recordingIcon').style.animation = 'recording 1s linear infinite';
    setTimeout(() => {
        document.getElementById('audioEnd').play();
        document.getElementById('recordingSpeech').style.display = 'none';
        document.getElementById('recordingIcon').style.animation = 'none';
        document.getElementById('speechRecorded').style.display = 'block';
    }, 242000);
}
function stopwatch(){
    let time = 0;
    setInterval(updateStopwatch, 1000);

    function updateStopwatch() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        const countdownElement = document.getElementById("speechTime");
        countdownElement.innerHTML = `${minutes}:${seconds}`;

        time++;
    }
}

document.getElementById('audioEnd').onended = function() {
    setTimeout(() => {
        finish();
    }, 2000);
}

function finish(){
    document.getElementById('planI').classList.remove("fa-xmark");
    document.getElementById('planI').classList.add("fa-clipboard-list");
    document.getElementById('speechPlanBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('speechPlanBg').style.display = 'none';
    }, 300);
    document.getElementById('gradingI').classList.remove("fa-xmark");
    document.getElementById('gradingI').classList.add("fa-graduation-cap");
    document.getElementById('gradingCriteriaBg').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('gradingCriteriaBg').style.display = 'none';
    }, 300);
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audioSpeaking').pause();
    document.getElementById('audioEnd').pause();
    document.getElementById('timeListening').style.display = 'none';
    document.getElementById('timeSpeaking').style.display = 'none';
    document.getElementById('timeSpeech').style.display = 'none';

    document.getElementById('loading2').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('timeSpeech').style.display = 'none';
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('start').style.display = 'none';
        document.getElementById('infoWindow').style.display = 'none';
        document.getElementById('infoWindow2').style.display = 'none';
        document.getElementById('listeningInfo').style.display = 'none';
        document.getElementById('listeningPart1').style.display = 'none';
        document.getElementById('listeningPart2').style.display = 'none';
        document.getElementById('listeningPart3').style.display = 'none';
        document.getElementById('speakingInfo').style.display = 'none';
        document.getElementById('speakingWindow').style.display = 'none';
        document.getElementById('start').style.display = 'none';
        document.getElementById('continue1').style.display = 'none';
        document.getElementById('continue2').style.display = 'none';
        document.getElementById('continue3').style.display = 'none';
        document.getElementById('continue4').style.display = 'none';
        document.getElementById('continue5').style.display = 'none';
        document.getElementById('planBtn').style.display = 'none';
        document.getElementById('gradingBtn').style.display = 'none';
        document.getElementById('dummyBtn').style.display = 'block';

        document.getElementById('speechWindow').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        checkResults();
        checkWrongResults();
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
        document.getElementById('continue6').style.display = 'block';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
    }, 2200);
}

function openClosePlan(){
    if(document.getElementById('planI').classList.contains("fa-clipboard-list")){
        document.getElementById('planI').classList.remove("fa-clipboard-list");
        document.getElementById('planI').classList.add("fa-xmark");
        document.getElementById('speechPlanBg').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('speechPlanBg').style.opacity = '1';
        }, 10);
    }
    else{
        document.getElementById('planI').classList.remove("fa-xmark");
        document.getElementById('planI').classList.add("fa-clipboard-list");
        document.getElementById('speechPlanBg').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('speechPlanBg').style.display = 'none';
        }, 300);
    }
}
function openCloseGrading(){
    if(document.getElementById('gradingI').classList.contains("fa-graduation-cap")){
        document.getElementById('gradingI').classList.remove("fa-graduation-cap");
        document.getElementById('gradingI').classList.add("fa-xmark");
        document.getElementById('gradingCriteriaBg').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('gradingCriteriaBg').style.opacity = '1';
        }, 10);
    }
    else{
        document.getElementById('gradingI').classList.remove("fa-xmark");
        document.getElementById('gradingI').classList.add("fa-graduation-cap");
        document.getElementById('gradingCriteriaBg').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('gradingCriteriaBg').style.display = 'none';
        }, 300);
    }
}

function toOverview(){
    document.getElementById('loading2').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
        document.getElementById('continue6').style.display = 'none';
    }, 10);
    setTimeout(() => {
        document.getElementById('results').style.display = 'none';
        document.getElementById('overview').style.display = 'block';
        checkResults();
        checkWrongResults();
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
    }, 2200);
}