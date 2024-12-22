let points;
let liv;
let randPos;
let speed;
let delay;
const odder1container = document.querySelector("#odder_container1");
const odder2container = document.querySelector("#odder_container2");
const odder3container = document.querySelector("#odder_container3");
const odder4container = document.querySelector("#odder_container4");
const skildpadde1container = document.querySelector("#skildpadde_container1");
const skildpadde2container = document.querySelector("#skildpadde_container2");
const skildpadde3container = document.querySelector("#skildpadde_container3");
const skildpadde4container = document.querySelector("#skildpadde_container4");
const egg1container = document.querySelector("#egg_container1");
const egg2container = document.querySelector("#egg_container2");
const eggtime = document.querySelector("#egg_time1_container");

const lvlComScreen = document.querySelector("#level_complete");
const GameOverScreen = document.querySelector("#game_over");
const genStart1 = document.querySelector("#genstart_container1");
const GameOverPoints = document.querySelector("#game_over_points");
const startScreen = document.querySelector("#start");
const startKnap = document.querySelector("#start_container1");
const genStart2 = document.querySelector("#genstart_container2");
const LvlComPoints = document.querySelector("#level_complete_points");
const infoScreen = document.querySelector("#infoscreen");
const liv1 = document.querySelector("#liv1");
const liv2 = document.querySelector("#liv2");
const liv3 = document.querySelector("#liv3");
const liv4 = document.querySelector("#liv4");

const soundSwitch = document.querySelector("#sound_switch");

const bang = document.querySelector('#sound_bang');
const horn = document.querySelector('#sound_horn');
const klokke = document.querySelector('#sound_klokke');
const vandfald = document.querySelector('#sound_vandfald');
const buu = document.querySelector('#sound_buu');
const klappeJuhu = document.querySelector('#sound_klappe_juhu');
const taber = document.querySelector('#sound_taber');
const vinder = document.querySelector('#sound_vinder');


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    //skjul andre skræme
    document.querySelector("#game").classList.add("hide");
    GameOverScreen.classList.add("hide");
    lvlComScreen.classList.add("hide");
    infoScreen.classList.add("hide");

    //klik på button_start_container
    //startKnap.addEventListener("mousedown", startSpil);
    startKnap.addEventListener("mousedown", infoBox);

    //Starter spillet uden at klikke på knappen
    //startSpil();

    //mute al lyd
    soundMute();
}

function soundUnmute() {
    console.log("soundUnmute");
    soundSwitch.removeEventListener("click", soundUnmute);

    //skift til "ikke muted" - billede
    soundSwitch.classList.add("unmute");

    //unmute al lyd
    bang.muted = false;
    horn.muted = false;
    klokke.muted = false;
    vandfald.muted = false;
    music_feels.muted = false;
    taber.muted = false;
    buu.muted = false;
    vinder.muted = false;
    klappeJuhu.muted = false;

    soundSwitch.addEventListener("click", soundMute);
}

function soundMute() {
    console.log("soundMute");
    soundSwitch.removeEventListener("click", soundMute);

    //skift til "ikke muted" - billede
    soundSwitch.classList = "";

    //unmute al lyd
    bang.muted = true;
    horn.muted = true;
    klokke.muted = true;
    vandfald.muted = true;
    music_feels.muted = true;
    taber.muted = true;
    buu.muted = true;
    vinder.muted = true;
    klappeJuhu.muted = true;

    soundSwitch.addEventListener("click", soundUnmute);
}

function infoBox() {
    console.log("infoBox");

    startKnap.removeEventListener("mousedown", infoBox);
    infoScreen.classList.remove("hide");
    infoScreen.classList.add("fade_out_info");
    startKnap.removeEventListener("mousedown", infoBox);
    infoScreen.addEventListener("animationend", startSpil);

    document.querySelector("#luk_knap").addEventListener("mousedown", startSpil);
}

function startSpil() {
    console.log("startSpil");

    //skjul andre skærme
    GameOverScreen.classList.add("hide");
    lvlComScreen.classList.add("hide");
    startScreen.classList.add("hide");
    infoScreen.classList.add("hide");

    infoScreen.removeEventListener("animationend", startSpil);
    document.querySelector("#luk_knap").removeEventListener("mousedown", startSpil);

    //finder de skjule skærme frem jeg skal bruge
    document.querySelector("#game").classList.remove("hide");

    //Nulstile points og liv
    points = 0;
    liv = 4;
    liv1.classList.remove("gray");
    liv2.classList.remove("gray");
    liv3.classList.remove("gray");
    liv4.classList.remove("gray");

    //Nulstil speed
    speed = 1;
    delay = 0;

    //Skriv point ud
    console.log(points);
    document.querySelector("#score_board_points").innerHTML = points;

    //Vis alle liv
    console.log(liv);

    //Start timer-animation
    eggtime.firstElementChild.classList.add("timer");

    //Random position og random delay og start falling-animationer på elementer

    //odder1
    randPos = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    odder1container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    odder1container.classList.add("falling");
    odder1container.addEventListener("mousedown", clickOdder);
    odder1container.addEventListener("animationiteration", odderFallingReset);

    //odder2
    randPos = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    odder2container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    odder2container.classList.add("falling");
    odder2container.addEventListener("mousedown", clickOdder);
    odder2container.addEventListener("animationiteration", odderFallingReset);

    //odder3
    randPos = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    odder3container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    odder3container.classList.add("falling");
    odder3container.addEventListener("mousedown", clickOdder);
    odder3container.addEventListener("animationiteration", odderFallingReset);

    //odder4
    randPos = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    odder4container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    odder4container.classList.add("falling");
    odder4container.addEventListener("mousedown", clickOdder);
    odder4container.addEventListener("animationiteration", odderFallingReset);


    //skildpadde1
    myRand = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    skildpadde1container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    skildpadde1container.classList.add("falling");
    skildpadde1container.addEventListener("mousedown", clickSkildpadde);
    skildpadde1container.addEventListener("animationiteration", skildpaddeReset);

    //skildpadde2
    myRand = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    skildpadde2container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    skildpadde2container.classList.add("falling");
    skildpadde2container.addEventListener("mousedown", clickSkildpadde);
    skildpadde2container.addEventListener("animationiteration", skildpaddeReset);

    //skildpadde3
    myRand = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    skildpadde3container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    skildpadde3container.classList.add("falling");
    skildpadde3container.addEventListener("mousedown", clickSkildpadde);
    skildpadde3container.addEventListener("animationiteration", skildpaddeReset);

    //skildpadde4
    myRand = Math.floor(Math.random() * 6) + 1;
    delay = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    skildpadde4container.classList.add("pos" + randPos, "delay" + delay, "speed" + speed);
    skildpadde4container.classList.add("falling");
    skildpadde4container.addEventListener("mousedown", clickSkildpadde);
    skildpadde4container.addEventListener("animationiteration", skildpaddeReset);


    //egg1
    randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    egg1container.classList.add("pos" + randPos, "delay1", "speed4");
    egg1container.classList.add("falling");
    egg1container.addEventListener("mousedown", clickEgg);
    egg1container.addEventListener("animationiteration", eggClickReset);

    //egg2
    randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    egg2container.classList.add("pos" + randPos, "delay6", "speed4");
    egg2container.classList.add("falling");
    egg2container.addEventListener("mousedown", clickEgg);
    egg2container.addEventListener("animationiteration", eggClickReset);

    //timer-animation slut
    eggtime.firstElementChild.addEventListener("animationend", stopSpillet);

    //lyd vandfald
    vandfald.currentTime = 0;
    vandfald.volume = 0.005;
    vandfald.play();

    //lyd vandfald
    music_feels.currentTime = 0;
    music_feels.volume = 0.05;
    music_feels.play();
}

function clickOdder() {
    console.log("clickOdder");

    this.removeEventListener("mousedown", clickOdder);
    //Få 1 point
    points += 1;

    //Skriv det ud
    document.querySelector("#score_board_points").innerHTML = points;

    //Ændre speed når der er hvis points
    if (points >= 8) {
        console.log("points >= 8");
        speed = 3;
    } else if (points >= 4) {
        console.log("points >= 4");
        speed = 2;
    }

    //Genstart odderForsvind-animation
    this.classList.add("pause");
    this.firstElementChild.classList.add("rotation");
    this.addEventListener("animationend", odderClickReset);

    //lyd bang
    bang.currentTime = 0;
    bang.volume = 0.3;
    bang.play();

    //lyd klokke
    klokke.currentTime = 0;
    klokke.volume = 0.3;
    klokke.play();

}

function odderClickReset() {
    console.log("odderClickReset");

    //Vis elementet igen
    this.firstElementChild.classList = "";
    this.classList = "";
    this.removeEventListener("animationend", odderClickReset);

    //Ny random position
    this.offsetHeight;

    randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    this.classList.add("pos" + randPos);

    //Genstart falling-animation
    this.classList.add("falling");
    this.classList.add("speed" + speed);

    //Lyt efter klik på element
    this.addEventListener("mousedown", clickOdder);
}

function odderFallingReset() {
    console.log("odderFallingReset");

    //Mist et liv
    //console.log("Liv = " + liv);
    //document.querySelector("#liv" + liv).classList.add("gray");
    //liv -= 1;

    //Vis antal liv
    //console.log("Liv er nu = " + liv);

    //Vis elementet igen
    this.firstElementChild.classList = "";
    this.classList = "";
    this.removeEventListener("animationiteration", odderFallingReset);

    //Ny random position
    this.offsetHeight;

    randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    this.classList.add("pos" + randPos);

    //Genstart speed
    this.classList.add("speed" + speed);

    //Genstart falling-animation
    this.classList.add("falling");
    this.addEventListener("animationiteration", odderFallingReset);

    //liv er nul
    //if (liv <= 0) {
    //console.log("liv <= 0");
    //stopSpillet();
    //}
}

function clickSkildpadde() {
    console.log("clickSkildpadde");

    this.removeEventListener("mousedown", clickSkildpadde);

    //Mist et liv
    console.log("Liv = " + liv);
    document.querySelector("#liv" + liv).classList.add("gray");
    liv -= 1;

    //Vis antal liv
    console.log("Liv er nu = " + liv);

    //Start skildpaddeForsvind-animation
    this.classList.add("pause");
    this.firstElementChild.classList.add("zoom_out");
    this.addEventListener("animationend", skildpaddeReset);

    //liv er nul
    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();
    }

    //lyd bang
    bang.currentTime = 0;
    bang.volume = 0.3;
    bang.play();

    //lyd horn
    horn.currentTime = 0;
    horn.volume = 0.03;
    horn.play();

}

function skildpaddeReset() {
    console.log("skildpaddeReset");

    //Vis elementet igen
    this.firstElementChild.classList = "";
    this.classList = "";
    this.removeEventListener("animationend", skildpaddeReset);

    //Ny random position
    this.offsetHeight;

    myRand = Math.floor(Math.random() * 6) + 1;
    console.log(myRand);
    this.classList.add("pos" + randPos);

    //Genstart speed
    this.classList.add("speed" + speed);

    //Genstart falling-animation
    this.classList.add("falling");

    //Lyt efter klik på element
    this.addEventListener("mousedown", clickSkildpadde);
    this.removeEventListener("animationiteration", skildpaddeReset);
    this.addEventListener("animationiteration", skildpaddeReset);
}

function clickEgg() {
    console.log("clickEgg");

    this.removeEventListener("mousedown", clickEgg);
    //Få 3 points
    points += 3;

    //Få et liv
    if (liv <= 3) {
        console.log("liv <= 3");
        liv += 1;
        document.querySelector("#liv" + liv).classList.remove("gray");
    } else {
        console.log("Du har fuld liv");
    }

    console.log("Liv = " + liv);

    //Skriv det ud
    document.querySelector("#score_board_points").innerHTML = points;

    //Ændre speed når der er hvis points
    if (points >= 8) {
        console.log("points >= 8");
        speed = 3;
    } else if (points >= 4) {
        console.log("points >= 4");
        speed = 2;
    }

    //Start eggForsvind-animation
    this.firstElementChild.classList.add("fade_out");
    this.addEventListener("animationend", eggClickReset);

    //lyd klokke
    klokke.currentTime = 0;
    klokke.volume = 0.3;
    klokke.play();
}

function eggClickReset() {
    console.log("eggClickReset");

    //Vis elementet igen
    this.firstElementChild.classList = "";
    this.classList = "";
    this.removeEventListener("animationiteration", odderFallingReset);

    //Ny random position
    this.offsetHeight;

    randPos = Math.floor(Math.random() * 6) + 1;
    console.log(randPos);
    this.classList.add("pos" + randPos);

    //Genstart speed
    this.classList.add("speed4");

    //Genstart falling-animation
    this.classList.add("falling");
    this.addEventListener("mousedown", clickEgg);
}


function stopSpillet() {
    console.log("stopSpillet");

    //Stop alle animationer
    //odder1
    odder1container.firstElementChild.classList = "";
    odder1container.classList = "";

    //odder2
    odder2container.firstElementChild.classList = "";
    odder2container.classList = "";

    //odder3
    odder3container.firstElementChild.classList = "";
    odder3container.classList = "";

    //odder4
    odder4container.firstElementChild.classList = "";
    odder4container.classList = "";

    //skildpadde1
    skildpadde1container.firstElementChild.classList = "";
    skildpadde1container.classList = "";

    //skildpadde2
    skildpadde2container.firstElementChild.classList = "";
    skildpadde2container.classList = "";

    //skildpadde3
    skildpadde3container.firstElementChild.classList = "";
    skildpadde3container.classList = "";

    //skildpadde4
    skildpadde4container.firstElementChild.classList = "";
    skildpadde4container.classList = "";

    //egg1
    egg1container.firstElementChild.classList = "";
    egg1container.classList = "";

    //egg2
    egg2container.firstElementChild.classList = "";
    egg2container.classList = "";

    //Fjern alle eventListerner
    //odder1
    odder1container.removeEventListener("mousedown", clickOdder);
    odder1container.removeEventListener("animationiteration", odderFallingReset);
    odder1container.removeEventListener("animationend", odderClickReset);

    //odder2
    odder2container.removeEventListener("mousedown", clickOdder);
    odder2container.removeEventListener("animationiteration", odderFallingReset);
    odder2container.removeEventListener("animationend", odderClickReset);

    //odder3
    odder3container.removeEventListener("mousedown", clickOdder);
    odder3container.removeEventListener("animationiteration", odderFallingReset);
    odder3container.removeEventListener("animationend", odderClickReset);

    //odder4
    odder4container.removeEventListener("mousedown", clickOdder);
    odder4container.removeEventListener("animationiteration", odderFallingReset);
    odder4container.removeEventListener("animationend", odderClickReset);


    //skildpadde1
    skildpadde1container.removeEventListener("mousedown", clickSkildpadde);
    skildpadde1container.removeEventListener("animationiteration", skildpaddeReset);
    skildpadde1container.removeEventListener("animationend", skildpaddeReset);

    //skildpadde2
    skildpadde2container.removeEventListener("mousedown", clickSkildpadde);
    skildpadde2container.removeEventListener("animationiteration", skildpaddeReset);
    skildpadde2container.removeEventListener("animationend", skildpaddeReset);

    //skildpadde3
    skildpadde3container.removeEventListener("mousedown", clickSkildpadde);
    skildpadde3container.removeEventListener("animationiteration", skildpaddeReset);
    skildpadde3container.removeEventListener("animationend", skildpaddeReset);

    //skildpadde4
    skildpadde4container.removeEventListener("mousedown", clickSkildpadde);
    skildpadde4container.removeEventListener("animationiteration", skildpaddeReset);
    skildpadde4container.removeEventListener("animationend", skildpaddeReset);


    //egg1
    egg1container.removeEventListener("mousedown", clickEgg);
    egg1container.removeEventListener("animationiteration", eggClickReset);
    egg1container.removeEventListener("animationend", eggClickReset);

    //egg2
    egg2container.removeEventListener("mousedown", clickEgg);
    egg2container.removeEventListener("animationiteration", eggClickReset);
    egg2container.removeEventListener("animationend", eggClickReset);


    //Nulstil timer
    eggtime.firstElementChild.classList = "";


    //lyden stoppes
    vandfald.pause();

    music_feels.pause();

    //Vis levelComplete hvis point > 10, eller vis gameOver
    if (liv <= 0) {
        console.log("liv <= 0");
        gameOver();
    } else if (points >= 10) {
        levelComplete();
    } else {
        gameOver();
    }
}

function gameOver() {
    console.log("gameOver");

    GameOverScreen.classList.remove("hide");

    //taber lyde
    taber.currentTime = 0;
    taber.volume = 0.5;
    taber.play();

    buu.currentTime = 0;
    buu.volume = 0.3;
    buu.play();

    genStart1.addEventListener("mousedown", startSpil);

    //Vis points
    GameOverPoints.innerHTML = "Du fik " + points + " Points";
}

function levelComplete() {
    console.log("levelComplete");

    lvlComScreen.classList.remove("hide");

    //vinder lyde
    vinder.currentTime = 0;
    vinder.volume = 0.5;
    vinder.play();

    klappeJuhu.currentTime = 0;
    klappeJuhu.volume = 0.3;
    klappeJuhu.play();

    genStart2.addEventListener("mousedown", startSpil);

    //Vis points
    LvlComPoints.innerHTML = "Du fik " + points + " Points";
}






//
