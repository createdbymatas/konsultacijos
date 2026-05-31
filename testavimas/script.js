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
function test3(){
    document.getElementById('loading').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loader').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        location.replace("test3/english-practise-bandymas-anglu-k-testas-nr-3.html")
    }, 1000);
}



function login(){
    document.getElementById('loginBtn').style.pointerEvents = 'none';
    document.getElementById('username').style.pointerEvents = 'none';
    document.getElementById('password').style.pointerEvents = 'none';
    document.getElementById('status').innerHTML = 'Tikrinami prisijungimo duomenys...';
    document.getElementById('status').style.opacity = '1';
    document.getElementById('status').style.color = '#F5F5DC';

    setTimeout(() => {
        if(document.getElementById("username").value == "RfykyCvo" && document.getElementById("password").value == "g3P$7iF%"){
            document.getElementById('status').innerHTML = 'Prisijungiama...';
            setTimeout(() => {
                location.replace("selection.html")
            }, 2000);
        }
        else if(document.getElementById("username").value == ""){
            document.getElementById('loginBtn').style.pointerEvents = 'all';
            document.getElementById('username').style.pointerEvents = 'all';
            document.getElementById('password').style.pointerEvents = 'all';
            document.getElementById('status').style.transition = 'none';
            document.getElementById('status').style.color = 'red';
            document.getElementById('status').innerHTML = 'Neįvestas prisijungimo vardas';
            setTimeout(() => {
                document.getElementById('status').style.transition = '0.2s';
            }, 100);
        }
        else if(document.getElementById("password").value == ""){
            document.getElementById('loginBtn').style.pointerEvents = 'all';
            document.getElementById('username').style.pointerEvents = 'all';
            document.getElementById('password').style.pointerEvents = 'all';
            document.getElementById('status').style.transition = 'none';
            document.getElementById('status').style.color = 'red';
            document.getElementById('status').innerHTML = 'Neįvestas slaptažodis';
            setTimeout(() => {
                document.getElementById('status').style.transition = '0.2s';
            }, 100);
        }
        else{
            document.getElementById('loginBtn').style.pointerEvents = 'all';
            document.getElementById('username').style.pointerEvents = 'all';
            document.getElementById('password').style.pointerEvents = 'all';
            document.getElementById('status').style.transition = 'none';
            document.getElementById('status').style.color = 'red';
            document.getElementById('status').innerHTML = 'Neteisingi prisijungimo duomenys';
            setTimeout(() => {
                document.getElementById('status').style.transition = '0.2s';
            }, 100);
        }
    }, 3000);
}