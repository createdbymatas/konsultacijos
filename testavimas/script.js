function loaded(){
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
    }, 1000);
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('loader').style.animation = 'none';
    }, 1200);
}
function test1(){
    document.getElementById('loading').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loader').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        location.replace("test1/english-practise-bandymas-anglu-k-testas-nr-1.html")
    }, 1000);
}
function test2(){
    document.getElementById('loading').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loader').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        location.replace("test2/english-practise-bandymas-anglu-k-testas-nr-2.html")
    }, 1000);
}