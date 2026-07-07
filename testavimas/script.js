// išjungti right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// išjungti f12, ctrl+shift+i, ctrl+shift+j, ctrl+u (inspect tool)
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

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

function testLt(){
    document.getElementById('loading').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '1';
        document.getElementById('loader').style.animation = 'spin 0.8s linear infinite';
    }, 10);
    setTimeout(() => {
        location.replace("lietuviu-kalba-1/index.html")
    }, 1000);
}



function login(){
    document.getElementById('loginBtn').style.pointerEvents = 'none';
    document.getElementById('username').style.pointerEvents = 'none';
    document.getElementById('password').style.pointerEvents = 'none';
    document.getElementById('status').innerHTML = 'Tikrinami prisijungimo duomenys...';
    document.getElementById('username').style.borderColor = '#F5F5DC';
    document.getElementById('password').style.borderColor = '#F5F5DC';
    document.getElementById('status').style.opacity = '1';
    document.getElementById('status').style.color = '#F5F5DC';
    document.getElementById('loginBtn').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('loader3').style.display = 'block';
    }, 100);
    setTimeout(() => {
        document.getElementById('loader3').style.opacity = '1';
    }, 110);

    setTimeout(() => {
        if(document.getElementById("username").value == "RfykyCvo" && document.getElementById("password").value == "g3P$7iF%"){
            document.getElementById('status').innerHTML = 'Prisijungiama...';
            setTimeout(() => {
                location.replace("selection.html");
            }, 2000);
        }
        else if(document.getElementById("username").value == ""){
            document.getElementById('loginBtn').style.pointerEvents = 'all';
            document.getElementById('username').style.pointerEvents = 'all';
            document.getElementById('password').style.pointerEvents = 'all';
            document.getElementById('status').style.transition = 'none';
            document.getElementById('status').style.color = 'darkorange';
            document.getElementById('status').innerHTML = 'Neįvestas prisijungimo vardas';
            document.getElementById('username').style.borderColor = 'darkorange';
            document.getElementById('loader3').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('status').style.transition = '0.2s';
                document.getElementById('loader3').style.display = 'none';
                document.getElementById('loginBtn').style.opacity = '1';
            }, 100);
        }
        else if(document.getElementById("password").value == ""){
            document.getElementById('loginBtn').style.pointerEvents = 'all';
            document.getElementById('username').style.pointerEvents = 'all';
            document.getElementById('password').style.pointerEvents = 'all';
            document.getElementById('status').style.transition = 'none';
            document.getElementById('status').style.color = 'darkorange';
            document.getElementById('status').innerHTML = 'Neįvestas slaptažodis';
            document.getElementById('password').style.borderColor = 'darkorange';
            document.getElementById('loader3').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('status').style.transition = '0.2s';
                document.getElementById('loader3').style.display = 'none';
                document.getElementById('loginBtn').style.opacity = '1';
            }, 100);
        }
        else{
            document.getElementById('loginBtn').style.pointerEvents = 'all';
            document.getElementById('username').style.pointerEvents = 'all';
            document.getElementById('password').style.pointerEvents = 'all';
            document.getElementById('status').style.transition = 'none';
            document.getElementById('status').style.color = 'red';
            document.getElementById('status').innerHTML = 'Neteisingi prisijungimo duomenys';
            document.getElementById('username').style.borderColor = 'red';
            document.getElementById('password').style.borderColor = 'red';
            document.getElementById('loader3').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('status').style.transition = '0.2s';
                document.getElementById('loader3').style.display = 'none';
                document.getElementById('loginBtn').style.opacity = '1';
            }, 100);
        }
    }, 3000);
}