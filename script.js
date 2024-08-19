let clicks = 0;
let coins = 0;
let coinMult = 1;
let clickMult = 1;

let buyed = false;
let enabled = false;
let autoclickerSpeed = 2000;

let now_cost = 50;
let now_added = 1;

button = document.getElementById("button")
coinInd = document.getElementById("coinIndicator")
clickCounter = document.getElementById("clickCounter")

coinMultBtn = document.getElementById("coinMultBtn")
clickMultBtn = document.getElementById("clickMultBtn")
autoclickerBtn = document.getElementById("autoclickerBtn")
autoclickerSpeedBtn = document.getElementById("autoclickerSpeedBtn")

coinMultInfo = document.getElementById("coinMultInfo")
clickMultInfo = document.getElementById("clickMultInfo")
autoclickerStateInfo = document.getElementById("autoclickerStateInfo")
autoclickerSpeedInfo = document.getElementById("autoclickerSpeedInfo")


function update(){
    coinIndicator.textContent = Math.round(coins);
    clickCounter.textContent = `You clicked me ${clicks} times!`;

    coinMultInfo.textContent = `Coins per click: ${coinMult}`;
    clickMultInfo.textContent = `Click multiplier: ${clickMult}`;

    if (enabled){
        autoclickerStateInfo.textContent = `AutoClicker state: Active`;
    }else{
        autoclickerStateInfo.textContent = `AutoClicker state: Not active`;
    }

    if (buyed){
        autoclickerSpeedInfo.textContent = `AutoClicker Speed: ${Math.round(1 / (autoclickerSpeed / 1000) * 100) / 100} clicks/s`;
    }
    else{
        autoclickerSpeedInfo.textContent = `AutoClicker Speed: 0 clicks/s`;
    }

    if (coins < 500){
        now_added = 1;
        now_cost = 50;
        coinMultBtn.textContent = "Coins per click + 1: 50c";
    }
    if(coins >= 500){
        now_added = 10;
        now_cost = 500;
        coinMultBtn.textContent = "Coins per click + 10: 500c";
    }
    if(coins >= 5000){
        now_added = 100;
        now_cost = 5000;
        coinMultBtn.textContent = "Coins per click + 100: 5000c";
    }
    if(coins >= 10000){
        now_added = 250;
        now_cost = 10000;
        coinMultBtn.textContent = "Coins per click + 250: 10000c";
    }
    if(coins >= 20000){
        now_added = 500;
        now_cost = 20000;
        coinMultBtn.textContent = "Coins per click + 500: 20000c";
    }
    if(coins >= 50000){
        now_added = 1000;
        now_cost = 50000;
        coinMultBtn.textContent = "Coins per click + 1000: 50000c";
    }
    if(coins >= 1000000){
        now_added = 1000000;
        now_cost = 1000000;
        coinMultBtn.textContent = "Coins per click + 1000000: 1000000c";
    }

    if (clickMult === 1){
        clickMultBtn.onclick = function(){add_clicks(2000, 1.2)};
    }
    else if (clickMult === 1.2){
        clickMultBtn.onclick = function(){add_clicks(10000, 1.5)};
        clickMultBtn.textContent = "Click x 1.5: 10000c";
    }  
    else if (clickMult === 1.5){
        clickMultBtn.onclick = function(){add_clicks(20000, 2)};
        clickMultBtn.textContent = "Click x 2: 20000c";
    }
    else if (clickMult === 2){
        clickMultBtn.onclick = function(){add_clicks(100000, 5)};
        clickMultBtn.textContent = "Click x 5: 100000c";
    }
    else if (clickMult === 5){
        clickMultBtn.onclick = function(){add_clicks(250000, 10)};
        clickMultBtn.textContent = "Click x 10: 250000c";
    }
    else if (clickMult === 10){
        clickMultBtn.onclick = function(){add_clicks(1000000, 50)};
        clickMultBtn.textContent = "Click x 50: 1000000c";
    }
    else if (clickMult === 50){
        clickMultBtn.onclick = function(){add_clicks(10000000, 500)};
        clickMultBtn.textContent = "Click x 500: 10000000c";
    }
    else if (clickMult === 500){
        clickMultBtn.onclick = null;
        clickMultBtn.textContent = "Max";
    }

    if (autoclickerSpeed == 1000){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (1.25 clicks/s): 75000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(75000, 750)};
    }
    if (autoclickerSpeed == 750){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (1.5 clicks/s): 100000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(100000, 666)};
    }
    if (autoclickerSpeed == 666){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (2 clicks/s): 150000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(150000, 500)};
    }
    if (autoclickerSpeed == 500){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (5 clicks/s): 500000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(500000, 200)};
    }
    if (autoclickerSpeed == 200){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (10 click/s): 1000000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(1000000, 100)};
    }
    if (autoclickerSpeed == 100){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (50 click/s): 2000000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(2000000, 20)};
    }
    if (autoclickerSpeed == 20){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (100 click/s): 5000000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(5000000, 10)};
    }
    if (autoclickerSpeed == 10){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (500 click/s): 7500000c";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(7500000, 5)};
    }
    if (autoclickerSpeed == 5){
        autoclickerSpeedBtn.textContent = "AutoClicker Speed (1000 click/s): 10000000";
        autoclickerSpeedBtn.onclick = function(){changeSpeed(10000000, 1)};
    }
    if (autoclickerSpeed == 1){
        autoclickerSpeedBtn.textContent = "Max"
        autoclickerSpeedBtn.onclick = null
    }
}

function click(){
    clicks++;
    coins += clickMult * coinMult;
    update();
}

function add_coins(cost, added){
    if (coins >= cost){
        coinMult += added
        coins -= cost
        update()
    }
}

function add_clicks(cost, newMult){
    if (coins >= cost){
        clickMult = newMult
        coins -= cost
        update()
    }
}

function autoclicker(){
    if (!buyed){
        if (coins >= 30000){
            coins -= 30000
            buyed = true
            autoclickerBtn.textContent = "Autoclicker: Deactivate"
        }
    }
    if (buyed){
        if (!enabled){
            enabled = true
            autoclickerBtn.textContent = "Autoclicker: Deactivate"
            autoclick()
        } else{
            enabled = false
            autoclickerBtn.textContent = "Autoclicker: Activate"
        }
        update()
    }
}

function autoclick(){
    if (enabled){
        click()
        setTimeout(autoclick, autoclickerSpeed)
    }
}

function changeSpeed(cost, speed){
    if (coins >= cost && buyed){
        autoclickerSpeed = speed
        update()
    }
}

function handle_keypress(event){
    if (event.key === "f"){add_coins(now_cost, now_added)}
    if (event.key === " "){click()}
    if (event.key === "e"){autoclicker()}
}

setInterval(20, update)

document.addEventListener("keydown", handle_keypress)

autoclickerSpeedBtn.onclick = function(){changeSpeed(50000, 1000)}
autoclickerBtn.onclick = autoclicker
coinMultBtn.onclick = function(){add_coins(now_cost, now_added)}
button.onclick = click;