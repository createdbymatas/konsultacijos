function loaded(){
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('loader').style.animation = 'none';
    }, 1200);
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

    document.getElementById('saving').style.display = 'block';
    document.getElementById('notSaved').style.display = 'none';
    setTimeout(() => {
        document.getElementById('saving').style.display = 'none';
        document.getElementById('notSaved').style.display = 'block';
    }, 3000);
    setInterval(function () {
        document.getElementById('saving').style.display = 'block';
        document.getElementById('notSaved').style.display = 'none';
        setTimeout(() => {
            document.getElementById('saving').style.display = 'none';
            document.getElementById('notSaved').style.display = 'block';
        }, 3000);
    }, 10000);

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
        document.getElementById('timeRemainingListening').innerHTML = '30:00';
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
        const startingMinutes = 25.6;
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
        document.getElementById('readingInfo').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('continue5').style.display = 'block';
        document.getElementById('timeReading').style.display = 'block';
        document.getElementById('timeRemainingReading').innerHTML = '30:00';
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
    document.getElementById('p2q1a4').style.backgroundColor = '#202020';
    document.getElementById('p2q1a4').style.color = '#F5F5DC';
    document.getElementById('p2q1').value = 'a1';
}
function p2q1a2(){
    document.getElementById('p2q1a1').style.backgroundColor = '#202020';
    document.getElementById('p2q1a1').style.color = '#F5F5DC';
    document.getElementById('p2q1a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q1a2').style.color = '#202020';
    document.getElementById('p2q1a3').style.backgroundColor = '#202020';
    document.getElementById('p2q1a3').style.color = '#F5F5DC';
    document.getElementById('p2q1a4').style.backgroundColor = '#202020';
    document.getElementById('p2q1a4').style.color = '#F5F5DC';
    document.getElementById('p2q1').value = 'a2';
}
function p2q1a3(){
    document.getElementById('p2q1a1').style.backgroundColor = '#202020';
    document.getElementById('p2q1a1').style.color = '#F5F5DC';
    document.getElementById('p2q1a2').style.backgroundColor = '#202020';
    document.getElementById('p2q1a2').style.color = '#F5F5DC';
    document.getElementById('p2q1a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q1a3').style.color = '#202020';
    document.getElementById('p2q1a4').style.backgroundColor = '#202020';
    document.getElementById('p2q1a4').style.color = '#F5F5DC';
    document.getElementById('p2q1').value = 'a3';
}
function p2q1a4(){
    document.getElementById('p2q1a1').style.backgroundColor = '#202020';
    document.getElementById('p2q1a1').style.color = '#F5F5DC';
    document.getElementById('p2q1a2').style.backgroundColor = '#202020';
    document.getElementById('p2q1a2').style.color = '#F5F5DC';
    document.getElementById('p2q1a3').style.backgroundColor = '#202020';
    document.getElementById('p2q1a3').style.color = '#F5F5DC';
    document.getElementById('p2q1a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q1a4').style.color = '#202020';
    document.getElementById('p2q1').value = 'a4';
}

function p2q2a1(){
    document.getElementById('p2q2a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q2a1').style.color = '#202020';
    document.getElementById('p2q2a2').style.backgroundColor = '#202020';
    document.getElementById('p2q2a2').style.color = '#F5F5DC';
    document.getElementById('p2q2a3').style.backgroundColor = '#202020';
    document.getElementById('p2q2a3').style.color = '#F5F5DC';
    document.getElementById('p2q2a4').style.backgroundColor = '#202020';
    document.getElementById('p2q2a4').style.color = '#F5F5DC';
    document.getElementById('p2q2').value = 'a1';
}
function p2q2a2(){
    document.getElementById('p2q2a1').style.backgroundColor = '#202020';
    document.getElementById('p2q2a1').style.color = '#F5F5DC';
    document.getElementById('p2q2a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q2a2').style.color = '#202020';
    document.getElementById('p2q2a3').style.backgroundColor = '#202020';
    document.getElementById('p2q2a3').style.color = '#F5F5DC';
    document.getElementById('p2q2a4').style.backgroundColor = '#202020';
    document.getElementById('p2q2a4').style.color = '#F5F5DC';
    document.getElementById('p2q2').value = 'a2';
}
function p2q2a3(){
    document.getElementById('p2q2a1').style.backgroundColor = '#202020';
    document.getElementById('p2q2a1').style.color = '#F5F5DC';
    document.getElementById('p2q2a2').style.backgroundColor = '#202020';
    document.getElementById('p2q2a2').style.color = '#F5F5DC';
    document.getElementById('p2q2a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q2a3').style.color = '#202020';
    document.getElementById('p2q2a4').style.backgroundColor = '#202020';
    document.getElementById('p2q2a4').style.color = '#F5F5DC';
    document.getElementById('p2q2').value = 'a3';
}
function p2q2a4(){
    document.getElementById('p2q2a1').style.backgroundColor = '#202020';
    document.getElementById('p2q2a1').style.color = '#F5F5DC';
    document.getElementById('p2q2a2').style.backgroundColor = '#202020';
    document.getElementById('p2q2a2').style.color = '#F5F5DC';
    document.getElementById('p2q2a3').style.backgroundColor = '#202020';
    document.getElementById('p2q2a3').style.color = '#F5F5DC';
    document.getElementById('p2q2a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q2a4').style.color = '#202020';
    document.getElementById('p2q2').value = 'a4';
}

function p2q3a1(){
    document.getElementById('p2q3a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q3a1').style.color = '#202020';
    document.getElementById('p2q3a2').style.backgroundColor = '#202020';
    document.getElementById('p2q3a2').style.color = '#F5F5DC';
    document.getElementById('p2q3a3').style.backgroundColor = '#202020';
    document.getElementById('p2q3a3').style.color = '#F5F5DC';
    document.getElementById('p2q3a4').style.backgroundColor = '#202020';
    document.getElementById('p2q3a4').style.color = '#F5F5DC';
    document.getElementById('p2q3').value = 'a1';
}
function p2q3a2(){
    document.getElementById('p2q3a1').style.backgroundColor = '#202020';
    document.getElementById('p2q3a1').style.color = '#F5F5DC';
    document.getElementById('p2q3a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q3a2').style.color = '#202020';
    document.getElementById('p2q3a3').style.backgroundColor = '#202020';
    document.getElementById('p2q3a3').style.color = '#F5F5DC';
    document.getElementById('p2q3a4').style.backgroundColor = '#202020';
    document.getElementById('p2q3a4').style.color = '#F5F5DC';
    document.getElementById('p2q3').value = 'a2';
}
function p2q3a3(){
    document.getElementById('p2q3a1').style.backgroundColor = '#202020';
    document.getElementById('p2q3a1').style.color = '#F5F5DC';
    document.getElementById('p2q3a2').style.backgroundColor = '#202020';
    document.getElementById('p2q3a2').style.color = '#F5F5DC';
    document.getElementById('p2q3a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q3a3').style.color = '#202020';
    document.getElementById('p2q3a4').style.backgroundColor = '#202020';
    document.getElementById('p2q3a4').style.color = '#F5F5DC';
    document.getElementById('p2q3').value = 'a3';
}
function p2q3a4(){
    document.getElementById('p2q3a1').style.backgroundColor = '#202020';
    document.getElementById('p2q3a1').style.color = '#F5F5DC';
    document.getElementById('p2q3a2').style.backgroundColor = '#202020';
    document.getElementById('p2q3a2').style.color = '#F5F5DC';
    document.getElementById('p2q3a3').style.backgroundColor = '#202020';
    document.getElementById('p2q3a3').style.color = '#F5F5DC';
    document.getElementById('p2q3a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q3a4').style.color = '#202020';
    document.getElementById('p2q3').value = 'a4';
}

function p2q4a1(){
    document.getElementById('p2q4a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q4a1').style.color = '#202020';
    document.getElementById('p2q4a2').style.backgroundColor = '#202020';
    document.getElementById('p2q4a2').style.color = '#F5F5DC';
    document.getElementById('p2q4a3').style.backgroundColor = '#202020';
    document.getElementById('p2q4a3').style.color = '#F5F5DC';
    document.getElementById('p2q4a4').style.backgroundColor = '#202020';
    document.getElementById('p2q4a4').style.color = '#F5F5DC';
    document.getElementById('p2q4').value = 'a1';
}
function p2q4a2(){
    document.getElementById('p2q4a1').style.backgroundColor = '#202020';
    document.getElementById('p2q4a1').style.color = '#F5F5DC';
    document.getElementById('p2q4a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q4a2').style.color = '#202020';
    document.getElementById('p2q4a3').style.backgroundColor = '#202020';
    document.getElementById('p2q4a3').style.color = '#F5F5DC';
    document.getElementById('p2q4a4').style.backgroundColor = '#202020';
    document.getElementById('p2q4a4').style.color = '#F5F5DC';
    document.getElementById('p2q4').value = 'a2';
}
function p2q4a3(){
    document.getElementById('p2q4a1').style.backgroundColor = '#202020';
    document.getElementById('p2q4a1').style.color = '#F5F5DC';
    document.getElementById('p2q4a2').style.backgroundColor = '#202020';
    document.getElementById('p2q4a2').style.color = '#F5F5DC';
    document.getElementById('p2q4a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q4a3').style.color = '#202020';
    document.getElementById('p2q4a4').style.backgroundColor = '#202020';
    document.getElementById('p2q4a4').style.color = '#F5F5DC';
    document.getElementById('p2q4').value = 'a3';
}
function p2q4a4(){
    document.getElementById('p2q4a1').style.backgroundColor = '#202020';
    document.getElementById('p2q4a1').style.color = '#F5F5DC';
    document.getElementById('p2q4a2').style.backgroundColor = '#202020';
    document.getElementById('p2q4a2').style.color = '#F5F5DC';
    document.getElementById('p2q4a3').style.backgroundColor = '#202020';
    document.getElementById('p2q4a3').style.color = '#F5F5DC';
    document.getElementById('p2q4a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q4a4').style.color = '#202020';
    document.getElementById('p2q4').value = 'a4';
}

function p2q5a1(){
    document.getElementById('p2q5a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q5a1').style.color = '#202020';
    document.getElementById('p2q5a2').style.backgroundColor = '#202020';
    document.getElementById('p2q5a2').style.color = '#F5F5DC';
    document.getElementById('p2q5a3').style.backgroundColor = '#202020';
    document.getElementById('p2q5a3').style.color = '#F5F5DC';
    document.getElementById('p2q5a4').style.backgroundColor = '#202020';
    document.getElementById('p2q5a4').style.color = '#F5F5DC';
    document.getElementById('p2q5').value = 'a1';
}
function p2q5a2(){
    document.getElementById('p2q5a1').style.backgroundColor = '#202020';
    document.getElementById('p2q5a1').style.color = '#F5F5DC';
    document.getElementById('p2q5a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q5a2').style.color = '#202020';
    document.getElementById('p2q5a3').style.backgroundColor = '#202020';
    document.getElementById('p2q5a3').style.color = '#F5F5DC';
    document.getElementById('p2q5a4').style.backgroundColor = '#202020';
    document.getElementById('p2q5a4').style.color = '#F5F5DC';
    document.getElementById('p2q5').value = 'a2';
}
function p2q5a3(){
    document.getElementById('p2q5a1').style.backgroundColor = '#202020';
    document.getElementById('p2q5a1').style.color = '#F5F5DC';
    document.getElementById('p2q5a2').style.backgroundColor = '#202020';
    document.getElementById('p2q5a2').style.color = '#F5F5DC';
    document.getElementById('p2q5a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q5a3').style.color = '#202020';
    document.getElementById('p2q5a4').style.backgroundColor = '#202020';
    document.getElementById('p2q5a4').style.color = '#F5F5DC';
    document.getElementById('p2q5').value = 'a3';
}
function p2q5a4(){
    document.getElementById('p2q5a1').style.backgroundColor = '#202020';
    document.getElementById('p2q5a1').style.color = '#F5F5DC';
    document.getElementById('p2q5a2').style.backgroundColor = '#202020';
    document.getElementById('p2q5a2').style.color = '#F5F5DC';
    document.getElementById('p2q5a3').style.backgroundColor = '#202020';
    document.getElementById('p2q5a3').style.color = '#F5F5DC';
    document.getElementById('p2q5a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q5a4').style.color = '#202020';
    document.getElementById('p2q5').value = 'a4';
}

function p2q6a1(){
    document.getElementById('p2q6a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q6a1').style.color = '#202020';
    document.getElementById('p2q6a2').style.backgroundColor = '#202020';
    document.getElementById('p2q6a2').style.color = '#F5F5DC';
    document.getElementById('p2q6a3').style.backgroundColor = '#202020';
    document.getElementById('p2q6a3').style.color = '#F5F5DC';
    document.getElementById('p2q6a4').style.backgroundColor = '#202020';
    document.getElementById('p2q6a4').style.color = '#F5F5DC';
    document.getElementById('p2q6').value = 'a1';
}
function p2q6a2(){
    document.getElementById('p2q6a1').style.backgroundColor = '#202020';
    document.getElementById('p2q6a1').style.color = '#F5F5DC';
    document.getElementById('p2q6a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q6a2').style.color = '#202020';
    document.getElementById('p2q6a3').style.backgroundColor = '#202020';
    document.getElementById('p2q6a3').style.color = '#F5F5DC';
    document.getElementById('p2q6a4').style.backgroundColor = '#202020';
    document.getElementById('p2q6a4').style.color = '#F5F5DC';
    document.getElementById('p2q6').value = 'a2';
}
function p2q6a3(){
    document.getElementById('p2q6a1').style.backgroundColor = '#202020';
    document.getElementById('p2q6a1').style.color = '#F5F5DC';
    document.getElementById('p2q6a2').style.backgroundColor = '#202020';
    document.getElementById('p2q6a2').style.color = '#F5F5DC';
    document.getElementById('p2q6a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q6a3').style.color = '#202020';
    document.getElementById('p2q6a4').style.backgroundColor = '#202020';
    document.getElementById('p2q6a4').style.color = '#F5F5DC';
    document.getElementById('p2q6').value = 'a3';
}
function p2q6a4(){
    document.getElementById('p2q6a1').style.backgroundColor = '#202020';
    document.getElementById('p2q6a1').style.color = '#F5F5DC';
    document.getElementById('p2q6a2').style.backgroundColor = '#202020';
    document.getElementById('p2q6a2').style.color = '#F5F5DC';
    document.getElementById('p2q6a3').style.backgroundColor = '#202020';
    document.getElementById('p2q6a3').style.color = '#F5F5DC';
    document.getElementById('p2q6a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q6a4').style.color = '#202020';
    document.getElementById('p2q6').value = 'a4';
}

function p2q7a1(){
    document.getElementById('p2q7a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q7a1').style.color = '#202020';
    document.getElementById('p2q7a2').style.backgroundColor = '#202020';
    document.getElementById('p2q7a2').style.color = '#F5F5DC';
    document.getElementById('p2q7a3').style.backgroundColor = '#202020';
    document.getElementById('p2q7a3').style.color = '#F5F5DC';
    document.getElementById('p2q7a4').style.backgroundColor = '#202020';
    document.getElementById('p2q7a4').style.color = '#F5F5DC';
    document.getElementById('p2q7').value = 'a1';
}
function p2q7a2(){
    document.getElementById('p2q7a1').style.backgroundColor = '#202020';
    document.getElementById('p2q7a1').style.color = '#F5F5DC';
    document.getElementById('p2q7a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q7a2').style.color = '#202020';
    document.getElementById('p2q7a3').style.backgroundColor = '#202020';
    document.getElementById('p2q7a3').style.color = '#F5F5DC';
    document.getElementById('p2q7a4').style.backgroundColor = '#202020';
    document.getElementById('p2q7a4').style.color = '#F5F5DC';
    document.getElementById('p2q7').value = 'a2';
}
function p2q7a3(){
    document.getElementById('p2q7a1').style.backgroundColor = '#202020';
    document.getElementById('p2q7a1').style.color = '#F5F5DC';
    document.getElementById('p2q7a2').style.backgroundColor = '#202020';
    document.getElementById('p2q7a2').style.color = '#F5F5DC';
    document.getElementById('p2q7a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q7a3').style.color = '#202020';
    document.getElementById('p2q7a4').style.backgroundColor = '#202020';
    document.getElementById('p2q7a4').style.color = '#F5F5DC';
    document.getElementById('p2q7').value = 'a3';
}
function p2q7a4(){
    document.getElementById('p2q7a1').style.backgroundColor = '#202020';
    document.getElementById('p2q7a1').style.color = '#F5F5DC';
    document.getElementById('p2q7a2').style.backgroundColor = '#202020';
    document.getElementById('p2q7a2').style.color = '#F5F5DC';
    document.getElementById('p2q7a3').style.backgroundColor = '#202020';
    document.getElementById('p2q7a3').style.color = '#F5F5DC';
    document.getElementById('p2q7a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('p2q7a4').style.color = '#202020';
    document.getElementById('p2q7').value = 'a4';
}



function p3q1a1(){
    document.getElementById('p3q1a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q1a1').style.color = '#202020';
    document.getElementById('p3q1a2').style.backgroundColor = '#202020';
    document.getElementById('p3q1a2').style.color = '#F5F5DC';
    document.getElementById('p3q1a3').style.backgroundColor = '#202020';
    document.getElementById('p3q1a3').style.color = '#F5F5DC';
    document.getElementById('p3q1').value = 'a1';
}
function p3q1a2(){
    document.getElementById('p3q1a1').style.backgroundColor = '#202020';
    document.getElementById('p3q1a1').style.color = '#F5F5DC';
    document.getElementById('p3q1a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q1a2').style.color = '#202020';
    document.getElementById('p3q1a3').style.backgroundColor = '#202020';
    document.getElementById('p3q1a3').style.color = '#F5F5DC';
    document.getElementById('p3q1').value = 'a2';
}
function p3q1a3(){
    document.getElementById('p3q1a1').style.backgroundColor = '#202020';
    document.getElementById('p3q1a1').style.color = '#F5F5DC';
    document.getElementById('p3q1a2').style.backgroundColor = '#202020';
    document.getElementById('p3q1a2').style.color = '#F5F5DC';
    document.getElementById('p3q1a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q1a3').style.color = '#202020';
    document.getElementById('p3q1').value = 'a3';
}

function p3q2a1(){
    document.getElementById('p3q2a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q2a1').style.color = '#202020';
    document.getElementById('p3q2a2').style.backgroundColor = '#202020';
    document.getElementById('p3q2a2').style.color = '#F5F5DC';
    document.getElementById('p3q2a3').style.backgroundColor = '#202020';
    document.getElementById('p3q2a3').style.color = '#F5F5DC';
    document.getElementById('p3q2').value = 'a1';
}
function p3q2a2(){
    document.getElementById('p3q2a1').style.backgroundColor = '#202020';
    document.getElementById('p3q2a1').style.color = '#F5F5DC';
    document.getElementById('p3q2a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q2a2').style.color = '#202020';
    document.getElementById('p3q2a3').style.backgroundColor = '#202020';
    document.getElementById('p3q2a3').style.color = '#F5F5DC';
    document.getElementById('p3q2').value = 'a2';
}
function p3q2a3(){
    document.getElementById('p3q2a1').style.backgroundColor = '#202020';
    document.getElementById('p3q2a1').style.color = '#F5F5DC';
    document.getElementById('p3q2a2').style.backgroundColor = '#202020';
    document.getElementById('p3q2a2').style.color = '#F5F5DC';
    document.getElementById('p3q2a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q2a3').style.color = '#202020';
    document.getElementById('p3q2').value = 'a3';
}

function p3q3a1(){
    document.getElementById('p3q3a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q3a1').style.color = '#202020';
    document.getElementById('p3q3a2').style.backgroundColor = '#202020';
    document.getElementById('p3q3a2').style.color = '#F5F5DC';
    document.getElementById('p3q3a3').style.backgroundColor = '#202020';
    document.getElementById('p3q3a3').style.color = '#F5F5DC';
    document.getElementById('p3q3').value = 'a1';
}
function p3q3a2(){
    document.getElementById('p3q3a1').style.backgroundColor = '#202020';
    document.getElementById('p3q3a1').style.color = '#F5F5DC';
    document.getElementById('p3q3a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q3a2').style.color = '#202020';
    document.getElementById('p3q3a3').style.backgroundColor = '#202020';
    document.getElementById('p3q3a3').style.color = '#F5F5DC';
    document.getElementById('p3q3').value = 'a2';
}
function p3q3a3(){
    document.getElementById('p3q3a1').style.backgroundColor = '#202020';
    document.getElementById('p3q3a1').style.color = '#F5F5DC';
    document.getElementById('p3q3a2').style.backgroundColor = '#202020';
    document.getElementById('p3q3a2').style.color = '#F5F5DC';
    document.getElementById('p3q3a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q3a3').style.color = '#202020';
    document.getElementById('p3q3').value = 'a3';
}

function p3q4a1(){
    document.getElementById('p3q4a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q4a1').style.color = '#202020';
    document.getElementById('p3q4a2').style.backgroundColor = '#202020';
    document.getElementById('p3q4a2').style.color = '#F5F5DC';
    document.getElementById('p3q4a3').style.backgroundColor = '#202020';
    document.getElementById('p3q4a3').style.color = '#F5F5DC';
    document.getElementById('p3q4').value = 'a1';
}
function p3q4a2(){
    document.getElementById('p3q4a1').style.backgroundColor = '#202020';
    document.getElementById('p3q4a1').style.color = '#F5F5DC';
    document.getElementById('p3q4a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q4a2').style.color = '#202020';
    document.getElementById('p3q4a3').style.backgroundColor = '#202020';
    document.getElementById('p3q4a3').style.color = '#F5F5DC';
    document.getElementById('p3q4').value = 'a2';
}
function p3q4a3(){
    document.getElementById('p3q4a1').style.backgroundColor = '#202020';
    document.getElementById('p3q4a1').style.color = '#F5F5DC';
    document.getElementById('p3q4a2').style.backgroundColor = '#202020';
    document.getElementById('p3q4a2').style.color = '#F5F5DC';
    document.getElementById('p3q4a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q4a3').style.color = '#202020';
    document.getElementById('p3q4').value = 'a3';
}

function p3q5a1(){
    document.getElementById('p3q5a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q5a1').style.color = '#202020';
    document.getElementById('p3q5a2').style.backgroundColor = '#202020';
    document.getElementById('p3q5a2').style.color = '#F5F5DC';
    document.getElementById('p3q5a3').style.backgroundColor = '#202020';
    document.getElementById('p3q5a3').style.color = '#F5F5DC';
    document.getElementById('p3q5').value = 'a1';
}
function p3q5a2(){
    document.getElementById('p3q5a1').style.backgroundColor = '#202020';
    document.getElementById('p3q5a1').style.color = '#F5F5DC';
    document.getElementById('p3q5a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q5a2').style.color = '#202020';
    document.getElementById('p3q5a3').style.backgroundColor = '#202020';
    document.getElementById('p3q5a3').style.color = '#F5F5DC';
    document.getElementById('p3q5').value = 'a2';
}
function p3q5a3(){
    document.getElementById('p3q5a1').style.backgroundColor = '#202020';
    document.getElementById('p3q5a1').style.color = '#F5F5DC';
    document.getElementById('p3q5a2').style.backgroundColor = '#202020';
    document.getElementById('p3q5a2').style.color = '#F5F5DC';
    document.getElementById('p3q5a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q5a3').style.color = '#202020';
    document.getElementById('p3q5').value = 'a3';
}

function p3q6a1(){
    document.getElementById('p3q6a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q6a1').style.color = '#202020';
    document.getElementById('p3q6a2').style.backgroundColor = '#202020';
    document.getElementById('p3q6a2').style.color = '#F5F5DC';
    document.getElementById('p3q6a3').style.backgroundColor = '#202020';
    document.getElementById('p3q6a3').style.color = '#F5F5DC';
    document.getElementById('p3q6').value = 'a1';
}
function p3q6a2(){
    document.getElementById('p3q6a1').style.backgroundColor = '#202020';
    document.getElementById('p3q6a1').style.color = '#F5F5DC';
    document.getElementById('p3q6a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q6a2').style.color = '#202020';
    document.getElementById('p3q6a3').style.backgroundColor = '#202020';
    document.getElementById('p3q6a3').style.color = '#F5F5DC';
    document.getElementById('p3q6').value = 'a2';
}
function p3q6a3(){
    document.getElementById('p3q6a1').style.backgroundColor = '#202020';
    document.getElementById('p3q6a1').style.color = '#F5F5DC';
    document.getElementById('p3q6a2').style.backgroundColor = '#202020';
    document.getElementById('p3q6a2').style.color = '#F5F5DC';
    document.getElementById('p3q6a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q6a3').style.color = '#202020';
    document.getElementById('p3q6').value = 'a3';
}

function p3q7a1(){
    document.getElementById('p3q7a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q7a1').style.color = '#202020';
    document.getElementById('p3q7a2').style.backgroundColor = '#202020';
    document.getElementById('p3q7a2').style.color = '#F5F5DC';
    document.getElementById('p3q7a3').style.backgroundColor = '#202020';
    document.getElementById('p3q7a3').style.color = '#F5F5DC';
    document.getElementById('p3q7').value = 'a1';
}
function p3q7a2(){
    document.getElementById('p3q7a1').style.backgroundColor = '#202020';
    document.getElementById('p3q7a1').style.color = '#F5F5DC';
    document.getElementById('p3q7a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q7a2').style.color = '#202020';
    document.getElementById('p3q7a3').style.backgroundColor = '#202020';
    document.getElementById('p3q7a3').style.color = '#F5F5DC';
    document.getElementById('p3q7').value = 'a2';
}
function p3q7a3(){
    document.getElementById('p3q7a1').style.backgroundColor = '#202020';
    document.getElementById('p3q7a1').style.color = '#F5F5DC';
    document.getElementById('p3q7a2').style.backgroundColor = '#202020';
    document.getElementById('p3q7a2').style.color = '#F5F5DC';
    document.getElementById('p3q7a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('p3q7a3').style.color = '#202020';
    document.getElementById('p3q7').value = 'a3';
}



function Rp1q1a1(){
    document.getElementById('Rp1q1a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q1a1').style.color = '#202020';
    document.getElementById('Rp1q1a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q1').value = 'a1';
}
function Rp1q1a2(){
    document.getElementById('Rp1q1a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q1a2').style.color = '#202020';
    document.getElementById('Rp1q1a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q1').value = 'a2';
}
function Rp1q1a3(){
    document.getElementById('Rp1q1a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q1a3').style.color = '#202020';
    document.getElementById('Rp1q1a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q1').value = 'a3';
}
function Rp1q1a4(){
    document.getElementById('Rp1q1a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q1a4').style.color = '#202020';
    document.getElementById('Rp1q1a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q1').value = 'a4';
}
function Rp1q1a5(){
    document.getElementById('Rp1q1a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q1a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q1a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q1a5').style.color = '#202020';
    document.getElementById('Rp1q1').value = 'a5';
}

function Rp1q2a1(){
    document.getElementById('Rp1q2a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q2a1').style.color = '#202020';
    document.getElementById('Rp1q2a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q2').value = 'a1';
}
function Rp1q2a2(){
    document.getElementById('Rp1q2a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q2a2').style.color = '#202020';
    document.getElementById('Rp1q2a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q2').value = 'a2';
}
function Rp1q2a3(){
    document.getElementById('Rp1q2a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q2a3').style.color = '#202020';
    document.getElementById('Rp1q2a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q2').value = 'a3';
}
function Rp1q2a4(){
    document.getElementById('Rp1q2a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q2a4').style.color = '#202020';
    document.getElementById('Rp1q2a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q2').value = 'a4';
}
function Rp1q2a5(){
    document.getElementById('Rp1q2a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q2a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q2a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q2a5').style.color = '#202020';
    document.getElementById('Rp1q2').value = 'a5';
}

function Rp1q3a1(){
    document.getElementById('Rp1q3a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q3a1').style.color = '#202020';
    document.getElementById('Rp1q3a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q3').value = 'a1';
}
function Rp1q3a2(){
    document.getElementById('Rp1q3a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q3a2').style.color = '#202020';
    document.getElementById('Rp1q3a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q3').value = 'a2';
}
function Rp1q3a3(){
    document.getElementById('Rp1q3a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q3a3').style.color = '#202020';
    document.getElementById('Rp1q3a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q3').value = 'a3';
}
function Rp1q3a4(){
    document.getElementById('Rp1q3a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q3a4').style.color = '#202020';
    document.getElementById('Rp1q3a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q3').value = 'a4';
}
function Rp1q3a5(){
    document.getElementById('Rp1q3a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q3a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q3a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q3a5').style.color = '#202020';
    document.getElementById('Rp1q3').value = 'a5';
}

function Rp1q4a1(){
    document.getElementById('Rp1q4a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q4a1').style.color = '#202020';
    document.getElementById('Rp1q4a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q4').value = 'a1';
}
function Rp1q4a2(){
    document.getElementById('Rp1q4a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q4a2').style.color = '#202020';
    document.getElementById('Rp1q4a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q4').value = 'a2';
}
function Rp1q4a3(){
    document.getElementById('Rp1q4a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q4a3').style.color = '#202020';
    document.getElementById('Rp1q4a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q4').value = 'a3';
}
function Rp1q4a4(){
    document.getElementById('Rp1q4a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q4a4').style.color = '#202020';
    document.getElementById('Rp1q4a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q4').value = 'a4';
}
function Rp1q4a5(){
    document.getElementById('Rp1q4a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q4a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q4a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q4a5').style.color = '#202020';
    document.getElementById('Rp1q4').value = 'a5';
}

function Rp1q5a1(){
    document.getElementById('Rp1q5a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q5a1').style.color = '#202020';
    document.getElementById('Rp1q5a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q5').value = 'a1';
}
function Rp1q5a2(){
    document.getElementById('Rp1q5a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q5a2').style.color = '#202020';
    document.getElementById('Rp1q5a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q5').value = 'a2';
}
function Rp1q5a3(){
    document.getElementById('Rp1q5a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q5a3').style.color = '#202020';
    document.getElementById('Rp1q5a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q5').value = 'a3';
}
function Rp1q5a4(){
    document.getElementById('Rp1q5a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q5a4').style.color = '#202020';
    document.getElementById('Rp1q5a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q5').value = 'a4';
}
function Rp1q5a5(){
    document.getElementById('Rp1q5a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q5a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q5a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q5a5').style.color = '#202020';
    document.getElementById('Rp1q5').value = 'a5';
}

function Rp1q6a1(){
    document.getElementById('Rp1q6a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q6a1').style.color = '#202020';
    document.getElementById('Rp1q6a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q6').value = 'a1';
}
function Rp1q6a2(){
    document.getElementById('Rp1q6a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q6a2').style.color = '#202020';
    document.getElementById('Rp1q6a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q6').value = 'a2';
}
function Rp1q6a3(){
    document.getElementById('Rp1q6a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q6a3').style.color = '#202020';
    document.getElementById('Rp1q6a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q6').value = 'a3';
}
function Rp1q6a4(){
    document.getElementById('Rp1q6a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q6a4').style.color = '#202020';
    document.getElementById('Rp1q6a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q6').value = 'a4';
}
function Rp1q6a5(){
    document.getElementById('Rp1q6a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q6a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q6a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q6a5').style.color = '#202020';
    document.getElementById('Rp1q6').value = 'a5';
}

function Rp1q7a1(){
    document.getElementById('Rp1q7a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q7a1').style.color = '#202020';
    document.getElementById('Rp1q7a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q7').value = 'a1';
}
function Rp1q7a2(){
    document.getElementById('Rp1q7a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q7a2').style.color = '#202020';
    document.getElementById('Rp1q7a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q7').value = 'a2';
}
function Rp1q7a3(){
    document.getElementById('Rp1q7a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q7a3').style.color = '#202020';
    document.getElementById('Rp1q7a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q7').value = 'a3';
}
function Rp1q7a4(){
    document.getElementById('Rp1q7a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q7a4').style.color = '#202020';
    document.getElementById('Rp1q7a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q7').value = 'a4';
}
function Rp1q7a5(){
    document.getElementById('Rp1q7a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q7a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q7a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q7a5').style.color = '#202020';
    document.getElementById('Rp1q7').value = 'a5';
}

function Rp1q8a1(){
    document.getElementById('Rp1q8a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q8a1').style.color = '#202020';
    document.getElementById('Rp1q8a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q8').value = 'a1';
}
function Rp1q8a2(){
    document.getElementById('Rp1q8a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q8a2').style.color = '#202020';
    document.getElementById('Rp1q8a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q8').value = 'a2';
}
function Rp1q8a3(){
    document.getElementById('Rp1q8a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q8a3').style.color = '#202020';
    document.getElementById('Rp1q8a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q8').value = 'a3';
}
function Rp1q8a4(){
    document.getElementById('Rp1q8a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q8a4').style.color = '#202020';
    document.getElementById('Rp1q8a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q8').value = 'a4';
}
function Rp1q8a5(){
    document.getElementById('Rp1q8a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q8a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q8a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q8a5').style.color = '#202020';
    document.getElementById('Rp1q8').value = 'a5';
}

function Rp1q9a1(){
    document.getElementById('Rp1q9a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q9a1').style.color = '#202020';
    document.getElementById('Rp1q9a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q9').value = 'a1';
}
function Rp1q9a2(){
    document.getElementById('Rp1q9a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q9a2').style.color = '#202020';
    document.getElementById('Rp1q9a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q9').value = 'a2';
}
function Rp1q9a3(){
    document.getElementById('Rp1q9a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q9a3').style.color = '#202020';
    document.getElementById('Rp1q9a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q9').value = 'a3';
}
function Rp1q9a4(){
    document.getElementById('Rp1q9a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q9a4').style.color = '#202020';
    document.getElementById('Rp1q9a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q9').value = 'a4';
}
function Rp1q9a5(){
    document.getElementById('Rp1q9a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q9a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q9a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q9a5').style.color = '#202020';
    document.getElementById('Rp1q9').value = 'a5';
}

function Rp1q10a1(){
    document.getElementById('Rp1q10a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q10a1').style.color = '#202020';
    document.getElementById('Rp1q10a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q10').value = 'a1';
}
function Rp1q10a2(){
    document.getElementById('Rp1q10a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q10a2').style.color = '#202020';
    document.getElementById('Rp1q10a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q10').value = 'a2';
}
function Rp1q10a3(){
    document.getElementById('Rp1q10a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a3').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q10a3').style.color = '#202020';
    document.getElementById('Rp1q10a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q10').value = 'a3';
}
function Rp1q10a4(){
    document.getElementById('Rp1q10a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a4').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q10a4').style.color = '#202020';
    document.getElementById('Rp1q10a5').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a5').style.color = '#F5F5DC';
    document.getElementById('Rp1q10').value = 'a4';
}
function Rp1q10a5(){
    document.getElementById('Rp1q10a1').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a1').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a2').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a2').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a3').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a3').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a4').style.backgroundColor = '#202020';
    document.getElementById('Rp1q10a4').style.color = '#F5F5DC';
    document.getElementById('Rp1q10a5').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp1q10a5').style.color = '#202020';
    document.getElementById('Rp1q10').value = 'a5';
}



function Rp2q1a1(){
    document.getElementById('Rp2q1a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q1a1').style.color = '#202020';
    document.getElementById('Rp2q1a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q1a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q1').value = 'a1';
}
function Rp2q1a2(){
    document.getElementById('Rp2q1a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q1a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q1a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q1a2').style.color = '#202020';
    document.getElementById('Rp2q1').value = 'a2';
}

function Rp2q2a1(){
    document.getElementById('Rp2q2a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q2a1').style.color = '#202020';
    document.getElementById('Rp2q2a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q2a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q2').value = 'a1';
}
function Rp2q2a2(){
    document.getElementById('Rp2q2a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q2a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q2a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q2a2').style.color = '#202020';
    document.getElementById('Rp2q2').value = 'a2';
}

function Rp2q3a1(){
    document.getElementById('Rp2q3a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q3a1').style.color = '#202020';
    document.getElementById('Rp2q3a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q3a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q3').value = 'a1';
}
function Rp2q3a2(){
    document.getElementById('Rp2q3a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q3a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q3a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q3a2').style.color = '#202020';
    document.getElementById('Rp2q3').value = 'a2';
}

function Rp2q4a1(){
    document.getElementById('Rp2q4a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q4a1').style.color = '#202020';
    document.getElementById('Rp2q4a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q4a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q4').value = 'a1';
}
function Rp2q4a2(){
    document.getElementById('Rp2q4a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q4a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q4a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q4a2').style.color = '#202020';
    document.getElementById('Rp2q4').value = 'a2';
}

function Rp2q5a1(){
    document.getElementById('Rp2q5a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q5a1').style.color = '#202020';
    document.getElementById('Rp2q5a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q5a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q5').value = 'a1';
}
function Rp2q5a2(){
    document.getElementById('Rp2q5a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q5a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q5a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q5a2').style.color = '#202020';
    document.getElementById('Rp2q5').value = 'a2';
}

function Rp2q6a1(){
    document.getElementById('Rp2q6a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q6a1').style.color = '#202020';
    document.getElementById('Rp2q6a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q6a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q6').value = 'a1';
}
function Rp2q6a2(){
    document.getElementById('Rp2q6a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q6a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q6a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q6a2').style.color = '#202020';
    document.getElementById('Rp2q6').value = 'a2';
}

function Rp2q7a1(){
    document.getElementById('Rp2q7a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q7a1').style.color = '#202020';
    document.getElementById('Rp2q7a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q7a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q7').value = 'a1';
}
function Rp2q7a2(){
    document.getElementById('Rp2q7a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q7a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q7a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q7a2').style.color = '#202020';
    document.getElementById('Rp2q7').value = 'a2';
}

function Rp2q8a1(){
    document.getElementById('Rp2q8a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q8a1').style.color = '#202020';
    document.getElementById('Rp2q8a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q8a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q8').value = 'a1';
}
function Rp2q8a2(){
    document.getElementById('Rp2q8a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q8a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q8a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q8a2').style.color = '#202020';
    document.getElementById('Rp2q8').value = 'a2';
}

function Rp2q9a1(){
    document.getElementById('Rp2q9a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q9a1').style.color = '#202020';
    document.getElementById('Rp2q9a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q9a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q9').value = 'a1';
}
function Rp2q9a2(){
    document.getElementById('Rp2q9a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q9a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q9a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q9a2').style.color = '#202020';
    document.getElementById('Rp2q9').value = 'a2';
}

function Rp2q10a1(){
    document.getElementById('Rp2q10a1').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q10a1').style.color = '#202020';
    document.getElementById('Rp2q10a2').style.backgroundColor = '#202020';
    document.getElementById('Rp2q10a2').style.color = '#F5F5DC';
    document.getElementById('Rp2q10').value = 'a1';
}
function Rp2q10a2(){
    document.getElementById('Rp2q10a1').style.backgroundColor = '#202020';
    document.getElementById('Rp2q10a1').style.color = '#F5F5DC';
    document.getElementById('Rp2q10a2').style.backgroundColor = '#F5F5DC';
    document.getElementById('Rp2q10a2').style.color = '#202020';
    document.getElementById('Rp2q10').value = 'a2';
}



function checkResults(){
    let all = 0;
    let list = 0;
    let read = 0;

    if(document.getElementById('p1q1').value == 'a2'){
        all = all+1;
        list = list+1;
        document.getElementById('p1q1a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q2').value == 'a1'){
        all = all+1;
        list = list+1;
        document.getElementById('p1q2a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q3').value == 'a3'){
        all = all+1;
        list = list+1;
        document.getElementById('p1q3a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q4').value == 'a2'){
        all = all+1;
        list = list+1;
        document.getElementById('p1q4a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q5').value == 'a3'){
        all = all+1;
        list = list+1;
        document.getElementById('p1q5a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q6').value == 'a1'){
        all = all+1;
        list = list+1;
        document.getElementById('p1q6a1r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q1').value == 'a1'){
        all = all+1;
        list = list+1;
        document.getElementById('p2q1a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q2').value == 'a3'){
        all = all+1;
        list = list+1;
        document.getElementById('p2q2a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q3').value == 'a2'){
        all = all+1;
        list = list+1;
        document.getElementById('p2q3a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q4').value == 'a1'){
        all = all+1;
        list = list+1;
        document.getElementById('p2q4a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q5').value == 'a4'){
        all = all+1;
        list = list+1;
        document.getElementById('p2q5a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q6').value == 'a2'){
        all = all+1;
        list = list+1;
        document.getElementById('p2q6a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q7').value == 'a3'){
        all = all+1;
        list = list+1;
        document.getElementById('p2q7a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q1').value == 'a3'){
        all = all+1;
        list = list+1;
        document.getElementById('p3q1a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q2').value == 'a2'){
        all = all+1;
        list = list+1;
        document.getElementById('p3q2a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q3').value == 'a2'){
        all = all+1;
        list = list+1;
        document.getElementById('p3q3a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q4').value == 'a2'){
        all = all+1;
        list = list+1;
        document.getElementById('p3q4a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q5').value == 'a1'){
        all = all+1;
        list = list+1;
        document.getElementById('p3q5a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q6').value == 'a3'){
        all = all+1;
        list = list+1;
        document.getElementById('p3q6a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q7').value == 'a3'){
        all = all+1;
        list = list+1;
        document.getElementById('p3q7a3r').style.backgroundColor = "#F5F5DC";
    }



    if(document.getElementById('Rp1q1').value == 'a4'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q1a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q2').value == 'a1'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q2a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q3').value == 'a3'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q3a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q4').value == 'a2'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q4a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q5').value == 'a4'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q5a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q6').value == 'a5'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q6a5r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q7').value == 'a2'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q7a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q8').value == 'a5'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q8a5r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q9').value == 'a3'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q9a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q10').value == 'a1'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp1q10a1r').style.backgroundColor = "#F5F5DC";
    }


    if(document.getElementById('Rp2q1').value == 'a2'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q1a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q2').value == 'a2'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q2a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q3').value == 'a1'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q4').value == 'a1'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q4a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q5').value == 'a2'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q5a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q6').value == 'a1'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q6a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q7').value == 'a1'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q7a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q8').value == 'a2'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q8a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q9').value == 'a2'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q9a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q10').value == 'a1'){
        all = all+1;
        read = read+1;
        document.getElementById('Rp2q10a1r').style.backgroundColor = "#F5F5DC";
    }

    document.getElementById('totalPoints').innerHTML = all;
    document.getElementById('totalPercentage').innerHTML = (all*100)/40 + ' %';
    document.getElementById('listeningPoints').innerHTML = list;
    document.getElementById('listeningPercentage').innerHTML = (list*100)/20 + ' %';
    document.getElementById('readingPoints').innerHTML = read;
    document.getElementById('readingPercentage').innerHTML = (read*100)/20 + ' %';

    document.getElementById('totalPoints2').innerHTML = all;
    document.getElementById('totalPercentage2').innerHTML = (all*100)/40 + ' %';
    document.getElementById('listeningPoints2').innerHTML = list;
    document.getElementById('listeningPercentage2').innerHTML = (list*100)/20 + ' %';
    document.getElementById('readingPoints2').innerHTML = read;
    document.getElementById('readingPercentage2').innerHTML = (read*100)/20 + ' %';
}
function checkWrongResults(){
    if(document.getElementById('p1q1').value == 'a1'){
        document.getElementById('p1q1a1r').style.borderColor = "red";
        document.getElementById('p1q1a1r').style.color = "red";
        document.getElementById('p1q1a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q1').value == 'a3'){
        document.getElementById('p1q1a3r').style.borderColor = "red";
        document.getElementById('p1q1a3r').style.color = "red";
        document.getElementById('p1q1a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p1q2').value == 'a2'){
        document.getElementById('p1q2a2r').style.borderColor = "red";
        document.getElementById('p1q2a2r').style.color = "red";
        document.getElementById('p1q2a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q2').value == 'a3'){
        document.getElementById('p1q2a3r').style.borderColor = "red";
        document.getElementById('p1q2a3r').style.color = "red";
        document.getElementById('p1q2a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p1q3').value == 'a1'){
        document.getElementById('p1q3a1r').style.borderColor = "red";
        document.getElementById('p1q3a1r').style.color = "red";
        document.getElementById('p1q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q3').value == 'a2'){
        document.getElementById('p1q3a2r').style.borderColor = "red";
        document.getElementById('p1q3a2r').style.color = "red";
        document.getElementById('p1q3a2r').style.backgroundColor = "#F5F5DC";
    }

    
    if(document.getElementById('p1q4').value == 'a1'){
        document.getElementById('p1q4a1r').style.borderColor = "red";
        document.getElementById('p1q4a1r').style.color = "red";
        document.getElementById('p1q4a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q4').value == 'a3'){
        document.getElementById('p1q4a3r').style.borderColor = "red";
        document.getElementById('p1q4a3r').style.color = "red";
        document.getElementById('p1q4a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p1q5').value == 'a1'){
        document.getElementById('p1q5a1r').style.borderColor = "red";
        document.getElementById('p1q5a1r').style.color = "red";
        document.getElementById('p1q5a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p1q5').value == 'a2'){
        document.getElementById('p1q5a2r').style.borderColor = "red";
        document.getElementById('p1q5a2r').style.color = "red";
        document.getElementById('p1q5a2r').style.backgroundColor = "#F5F5DC";
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
    if(document.getElementById('p2q1').value == 'a4'){
        document.getElementById('p2q1a4r').style.borderColor = "red";
        document.getElementById('p2q1a4r').style.color = "red";
        document.getElementById('p2q1a4r').style.backgroundColor = "#F5F5DC";
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
    if(document.getElementById('p2q2').value == 'a4'){
        document.getElementById('p2q2a4r').style.borderColor = "red";
        document.getElementById('p2q2a4r').style.color = "red";
        document.getElementById('p2q2a4r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q3').value == 'a1'){
        document.getElementById('p2q3a1r').style.borderColor = "red";
        document.getElementById('p2q3a1r').style.color = "red";
        document.getElementById('p2q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q3').value == 'a3'){
        document.getElementById('p2q3a3r').style.borderColor = "red";
        document.getElementById('p2q3a3r').style.color = "red";
        document.getElementById('p2q3a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q3').value == 'a4'){
        document.getElementById('p2q3a4r').style.borderColor = "red";
        document.getElementById('p2q3a4r').style.color = "red";
        document.getElementById('p2q3a4r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q4').value == 'a2'){
        document.getElementById('p2q4a2r').style.borderColor = "red";
        document.getElementById('p2q4a2r').style.color = "red";
        document.getElementById('p2q4a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q4').value == 'a3'){
        document.getElementById('p2q4a3r').style.borderColor = "red";
        document.getElementById('p2q4a3r').style.color = "red";
        document.getElementById('p2q4a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q4').value == 'a4'){
        document.getElementById('p2q4a4r').style.borderColor = "red";
        document.getElementById('p2q4a4r').style.color = "red";
        document.getElementById('p2q4a4r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q5').value == 'a1'){
        document.getElementById('p2q5a1r').style.borderColor = "red";
        document.getElementById('p2q5a1r').style.color = "red";
        document.getElementById('p2q5a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q5').value == 'a2'){
        document.getElementById('p2q5a2r').style.borderColor = "red";
        document.getElementById('p2q5a2r').style.color = "red";
        document.getElementById('p2q5a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q5').value == 'a3'){
        document.getElementById('p2q5a3r').style.borderColor = "red";
        document.getElementById('p2q5a3r').style.color = "red";
        document.getElementById('p2q5a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p2q6').value == 'a1'){
        document.getElementById('p2q6a1r').style.borderColor = "red";
        document.getElementById('p2q6a1r').style.color = "red";
        document.getElementById('p2q6a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q6').value == 'a3'){
        document.getElementById('p2q6a3r').style.borderColor = "red";
        document.getElementById('p2q6a3r').style.color = "red";
        document.getElementById('p2q6a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p2q6').value == 'a4'){
        document.getElementById('p2q6a4r').style.borderColor = "red";
        document.getElementById('p2q6a4r').style.color = "red";
        document.getElementById('p2q6a4r').style.backgroundColor = "#F5F5DC";
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
    if(document.getElementById('p2q7').value == 'a4'){
        document.getElementById('p2q6a4r').style.borderColor = "red";
        document.getElementById('p2q6a4r').style.color = "red";
        document.getElementById('p2q6a4r').style.backgroundColor = "#F5F5DC";
    }


    if(document.getElementById('p3q1').value == 'a1'){
        document.getElementById('p3q1a1r').style.borderColor = "red";
        document.getElementById('p3q1a1r').style.color = "red";
        document.getElementById('p3q1a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q1').value == 'a2'){
        document.getElementById('p3q1a2r').style.borderColor = "red";
        document.getElementById('p3q1a2r').style.color = "red";
        document.getElementById('p3q1a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q2').value == 'a1'){
        document.getElementById('p3q2a1r').style.borderColor = "red";
        document.getElementById('p3q2a1r').style.color = "red";
        document.getElementById('p3q2a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q2').value == 'a3'){
        document.getElementById('p3q2a3r').style.borderColor = "red";
        document.getElementById('p3q2a3r').style.color = "red";
        document.getElementById('p3q2a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q3').value == 'a1'){
        document.getElementById('p3q3a1r').style.borderColor = "red";
        document.getElementById('p3q3a1r').style.color = "red";
        document.getElementById('p3q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q3').value == 'a3'){
        document.getElementById('p3q3a3r').style.borderColor = "red";
        document.getElementById('p3q3a3r').style.color = "red";
        document.getElementById('p3q3a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q4').value == 'a1'){
        document.getElementById('p3q4a1r').style.borderColor = "red";
        document.getElementById('p3q4a1r').style.color = "red";
        document.getElementById('p3q4a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q4').value == 'a3'){
        document.getElementById('p3q4a3r').style.borderColor = "red";
        document.getElementById('p3q4a3r').style.color = "red";
        document.getElementById('p3q4a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q5').value == 'a2'){
        document.getElementById('p3q5a2r').style.borderColor = "red";
        document.getElementById('p3q5a2r').style.color = "red";
        document.getElementById('p3q5a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q5').value == 'a3'){
        document.getElementById('p3q5a3r').style.borderColor = "red";
        document.getElementById('p3q5a3r').style.color = "red";
        document.getElementById('p3q5a3r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q6').value == 'a1'){
        document.getElementById('p3q6a1r').style.borderColor = "red";
        document.getElementById('p3q6a1r').style.color = "red";
        document.getElementById('p3q6a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q6').value == 'a2'){
        document.getElementById('p3q6a2r').style.borderColor = "red";
        document.getElementById('p3q6a2r').style.color = "red";
        document.getElementById('p3q6a2r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('p3q7').value == 'a1'){
        document.getElementById('p3q7a1r').style.borderColor = "red";
        document.getElementById('p3q7a1r').style.color = "red";
        document.getElementById('p3q7a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('p3q7').value == 'a2'){
        document.getElementById('p3q7a2r').style.borderColor = "red";
        document.getElementById('p3q7a2r').style.color = "red";
        document.getElementById('p3q7a2r').style.backgroundColor = "#F5F5DC";
    }



    if(document.getElementById('Rp1q1').value == 'a1'){
        document.getElementById('Rp1q1a1r').style.borderColor = "red";
        document.getElementById('Rp1q1a1r').style.color = "red";
        document.getElementById('Rp1q1a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q1').value == 'a2'){
        document.getElementById('Rp1q1a2r').style.borderColor = "red";
        document.getElementById('Rp1q1a2r').style.color = "red";
        document.getElementById('Rp1q1a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q1').value == 'a3'){
        document.getElementById('Rp1q1a3r').style.borderColor = "red";
        document.getElementById('Rp1q1a3r').style.color = "red";
        document.getElementById('Rp1q1a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q1').value == 'a5'){
        document.getElementById('Rp1q1a5r').style.borderColor = "red";
        document.getElementById('Rp1q1a5r').style.color = "red";
        document.getElementById('Rp1q1a5r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q2').value == 'a2'){
        document.getElementById('Rp1q2a2r').style.borderColor = "red";
        document.getElementById('Rp1q2a2r').style.color = "red";
        document.getElementById('Rp1q2a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q2').value == 'a3'){
        document.getElementById('Rp1q2a3r').style.borderColor = "red";
        document.getElementById('Rp1q2a3r').style.color = "red";
        document.getElementById('Rp1q2a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q2').value == 'a4'){
        document.getElementById('Rp1q2a4r').style.borderColor = "red";
        document.getElementById('Rp1q2a4r').style.color = "red";
        document.getElementById('Rp1q2a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q2').value == 'a5'){
        document.getElementById('Rp1q2a5r').style.borderColor = "red";
        document.getElementById('Rp1q2a5r').style.color = "red";
        document.getElementById('Rp1q2a5r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q3').value == 'a1'){
        document.getElementById('Rp1q3a1r').style.borderColor = "red";
        document.getElementById('Rp1q3a1r').style.color = "red";
        document.getElementById('Rp1q3a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q3').value == 'a2'){
        document.getElementById('Rp1q3a2r').style.borderColor = "red";
        document.getElementById('Rp1q3a2r').style.color = "red";
        document.getElementById('Rp1q3a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q3').value == 'a4'){
        document.getElementById('Rp1q3a4r').style.borderColor = "red";
        document.getElementById('Rp1q3a4r').style.color = "red";
        document.getElementById('Rp1q3a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q3').value == 'a5'){
        document.getElementById('Rp1q3a5r').style.borderColor = "red";
        document.getElementById('Rp1q3a5r').style.color = "red";
        document.getElementById('Rp1q3a5r').style.backgroundColor = "#F5F5DC";
    }
    
    if(document.getElementById('Rp1q4').value == 'a1'){
        document.getElementById('Rp1q4a1r').style.borderColor = "red";
        document.getElementById('Rp1q4a1r').style.color = "red";
        document.getElementById('Rp1q4a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q4').value == 'a3'){
        document.getElementById('Rp1q4a3r').style.borderColor = "red";
        document.getElementById('Rp1q4a3r').style.color = "red";
        document.getElementById('Rp1q4a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q4').value == 'a4'){
        document.getElementById('Rp1q4a4r').style.borderColor = "red";
        document.getElementById('Rp1q4a4r').style.color = "red";
        document.getElementById('Rp1q4a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q4').value == 'a5'){
        document.getElementById('Rp1q4a5r').style.borderColor = "red";
        document.getElementById('Rp1q4a5r').style.color = "red";
        document.getElementById('Rp1q4a5r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q5').value == 'a1'){
        document.getElementById('Rp1q5a1r').style.borderColor = "red";
        document.getElementById('Rp1q5a1r').style.color = "red";
        document.getElementById('Rp1q5a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q5').value == 'a2'){
        document.getElementById('Rp1q5a2r').style.borderColor = "red";
        document.getElementById('Rp1q5a2r').style.color = "red";
        document.getElementById('Rp1q5a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q5').value == 'a3'){
        document.getElementById('Rp1q5a3r').style.borderColor = "red";
        document.getElementById('Rp1q5a3r').style.color = "red";
        document.getElementById('Rp1q5a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q5').value == 'a5'){
        document.getElementById('Rp1q5a5r').style.borderColor = "red";
        document.getElementById('Rp1q5a5r').style.color = "red";
        document.getElementById('Rp1q5a5r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q6').value == 'a1'){
        document.getElementById('Rp1q6a1r').style.borderColor = "red";
        document.getElementById('Rp1q6a1r').style.color = "red";
        document.getElementById('Rp1q6a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q6').value == 'a2'){
        document.getElementById('Rp1q6a2r').style.borderColor = "red";
        document.getElementById('Rp1q6a2r').style.color = "red";
        document.getElementById('Rp1q6a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q6').value == 'a3'){
        document.getElementById('Rp1q6a3r').style.borderColor = "red";
        document.getElementById('Rp1q6a3r').style.color = "red";
        document.getElementById('Rp1q6a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q6').value == 'a4'){
        document.getElementById('Rp1q6a4r').style.borderColor = "red";
        document.getElementById('Rp1q6a4r').style.color = "red";
        document.getElementById('Rp1q6a4r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q7').value == 'a1'){
        document.getElementById('Rp1q7a1r').style.borderColor = "red";
        document.getElementById('Rp1q7a1r').style.color = "red";
        document.getElementById('Rp1q7a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q7').value == 'a3'){
        document.getElementById('Rp1q7a3r').style.borderColor = "red";
        document.getElementById('Rp1q7a3r').style.color = "red";
        document.getElementById('Rp1q7a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q7').value == 'a4'){
        document.getElementById('Rp1q7a4r').style.borderColor = "red";
        document.getElementById('Rp1q7a4r').style.color = "red";
        document.getElementById('Rp1q7a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q7').value == 'a5'){
        document.getElementById('Rp1q7a5r').style.borderColor = "red";
        document.getElementById('Rp1q7a5r').style.color = "red";
        document.getElementById('Rp1q7a5r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q8').value == 'a1'){
        document.getElementById('Rp1q8a1r').style.borderColor = "red";
        document.getElementById('Rp1q8a1r').style.color = "red";
        document.getElementById('Rp1q8a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q8').value == 'a2'){
        document.getElementById('Rp1q8a2r').style.borderColor = "red";
        document.getElementById('Rp1q8a2r').style.color = "red";
        document.getElementById('Rp1q8a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q8').value == 'a3'){
        document.getElementById('Rp1q8a3r').style.borderColor = "red";
        document.getElementById('Rp1q8a3r').style.color = "red";
        document.getElementById('Rp1q8a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q8').value == 'a4'){
        document.getElementById('Rp1q8a4r').style.borderColor = "red";
        document.getElementById('Rp1q8a4r').style.color = "red";
        document.getElementById('Rp1q8a4r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q9').value == 'a1'){
        document.getElementById('Rp1q9a1r').style.borderColor = "red";
        document.getElementById('Rp1q9a1r').style.color = "red";
        document.getElementById('Rp1q9a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q9').value == 'a2'){
        document.getElementById('Rp1q9a2r').style.borderColor = "red";
        document.getElementById('Rp1q9a2r').style.color = "red";
        document.getElementById('Rp1q9a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q9').value == 'a4'){
        document.getElementById('Rp1q9a4r').style.borderColor = "red";
        document.getElementById('Rp1q9a4r').style.color = "red";
        document.getElementById('Rp1q9a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q9').value == 'a5'){
        document.getElementById('Rp1q9a5r').style.borderColor = "red";
        document.getElementById('Rp1q9a5r').style.color = "red";
        document.getElementById('Rp1q9a5r').style.backgroundColor = "#F5F5DC";
    }

    if(document.getElementById('Rp1q10').value == 'a2'){
        document.getElementById('Rp1q10a2r').style.borderColor = "red";
        document.getElementById('Rp1q10a2r').style.color = "red";
        document.getElementById('Rp1q10a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q10').value == 'a3'){
        document.getElementById('Rp1q10a3r').style.borderColor = "red";
        document.getElementById('Rp1q10a3r').style.color = "red";
        document.getElementById('Rp1q10a3r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q10').value == 'a4'){
        document.getElementById('Rp1q10a4r').style.borderColor = "red";
        document.getElementById('Rp1q10a4r').style.color = "red";
        document.getElementById('Rp1q10a4r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp1q10').value == 'a5'){
        document.getElementById('Rp1q10a5r').style.borderColor = "red";
        document.getElementById('Rp1q10a5r').style.color = "red";
        document.getElementById('Rp1q10a5r').style.backgroundColor = "#F5F5DC";
    }


    if(document.getElementById('Rp2q1').value == 'a1'){
        document.getElementById('Rp2q1a1r').style.borderColor = "red";
        document.getElementById('Rp2q1a1r').style.color = "red";
        document.getElementById('Rp2q1a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q2').value == 'a1'){
        document.getElementById('Rp2q2a1r').style.borderColor = "red";
        document.getElementById('Rp2q2a1r').style.color = "red";
        document.getElementById('Rp2q2a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q3').value == 'a2'){
        document.getElementById('Rp2q3a2r').style.borderColor = "red";
        document.getElementById('Rp2q3a2r').style.color = "red";
        document.getElementById('Rp2q3a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q4').value == 'a2'){
        document.getElementById('Rp2q4a2r').style.borderColor = "red";
        document.getElementById('Rp2q4a2r').style.color = "red";
        document.getElementById('Rp2q4a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q5').value == 'a1'){
        document.getElementById('Rp2q5a1r').style.borderColor = "red";
        document.getElementById('Rp2q5a1r').style.color = "red";
        document.getElementById('Rp2q5a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q6').value == 'a2'){
        document.getElementById('Rp2q6a2r').style.borderColor = "red";
        document.getElementById('Rp2q6a2r').style.color = "red";
        document.getElementById('Rp2q6a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q7').value == 'a2'){
        document.getElementById('Rp2q7a2r').style.borderColor = "red";
        document.getElementById('Rp2q7a2r').style.color = "red";
        document.getElementById('Rp2q7a2r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q8').value == 'a1'){
        document.getElementById('Rp2q8a1r').style.borderColor = "red";
        document.getElementById('Rp2q8a1r').style.color = "red";
        document.getElementById('Rp2q8a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q9').value == 'a1'){
        document.getElementById('Rp2q9a1r').style.borderColor = "red";
        document.getElementById('Rp2q9a1r').style.color = "red";
        document.getElementById('Rp2q9a1r').style.backgroundColor = "#F5F5DC";
    }
    if(document.getElementById('Rp2q10').value == 'a2'){
        document.getElementById('Rp2q10a2r').style.borderColor = "red";
        document.getElementById('Rp2q10a2r').style.color = "red";
        document.getElementById('Rp2q10a2r').style.backgroundColor = "#F5F5DC";
    }
}

function startReading(){
    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('continue5').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
        const startingMinutes = 30;
        let time = startingMinutes * 60; //minutes * 60 seconds
        let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

        function updateCountdown() {
            const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds; 
            const countdownElement = document.getElementById("timeRemainingReading"); 
            countdownElement.innerHTML = `${minutes}:${seconds}`;

            time--;

            if (time < 0) { //stop the setInterval when time = 0 for avoid negative time
                clearInterval(refreshIntervalId);
                if(document.getElementById('results').style.display != 'block' && document.getElementById('overview').style.display != 'block'){
                    setTimeout(() => {
                        finish();
                    }, 1000);
                }
            }
        }
    }, 10);
    setTimeout(() => {
        document.getElementById('readingInfo').style.display = 'none';
        document.getElementById('readingPart1').style.display = 'flex';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('continue5').style.display = 'none';
        document.getElementById('goToPart2Btn').style.display = 'block';
    }, 2200);
}
function RgoToPart2(){
    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('goToPart2Btn').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('readingPart1').style.display = 'none';
        document.getElementById('readingPart2').style.display = 'flex';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('goToPart2Btn').style.display = 'none';
        document.getElementById('goToPart2Btn').style.pointerEvents = 'all';
        document.getElementById('dummyBtn').style.display = 'none';
        document.getElementById('backToPart1Btn').style.display = 'block';
        document.getElementById('submitBtn').style.display = 'block';
    }, 2200);
}
function RbackToPart1(){
    document.getElementById('loading2').style.display = 'flex';
    document.getElementById('backToPart1Btn').style.pointerEvents = 'none';
    document.getElementById('submitBtn').style.pointerEvents = 'none';
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '1';
        document.getElementById('loader2').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        document.getElementById('readingPart2').style.display = 'none';
        document.getElementById('readingPart1').style.display = 'flex';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
        document.getElementById('backToPart1Btn').style.display = 'none';
        document.getElementById('backToPart1Btn').style.pointerEvents = 'all';
        document.getElementById('dummyBtn').style.display = 'block';
        document.getElementById('goToPart2Btn').style.display = 'block';
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('submitBtn').style.pointerEvents = 'all';
    }, 2200);
}

function finish(){
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('timeListening').style.display = 'none';
    document.getElementById('timeReading').style.display = 'none';
    document.getElementById('backToPart1Btn').style.pointerEvents = 'none';
    document.getElementById('submitBtn').style.pointerEvents = 'none';

    document.getElementById('loading2').style.display = 'flex';
    setTimeout(() => {
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
        document.getElementById('readingInfo').style.display = 'none';
        document.getElementById('readingPart1').style.display = 'none';
        document.getElementById('readingPart2').style.display = 'none';
        document.getElementById('start').style.display = 'none';
        document.getElementById('continue1').style.display = 'none';
        document.getElementById('continue2').style.display = 'none';
        document.getElementById('continue3').style.display = 'none';
        document.getElementById('continue4').style.display = 'none';
        document.getElementById('continue5').style.display = 'none';
        document.getElementById('backToPart1Btn').style.display = 'none';
        document.getElementById('goToPart2Btn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('dummyBtn').style.display = 'block';

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
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading2').style.opacity = '0';
    }, 2000);
    setTimeout(() => {
        document.getElementById('loading2').style.display = 'none';
        document.getElementById('loader2').style.animation = 'none';
    }, 2200);
}