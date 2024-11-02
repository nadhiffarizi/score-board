// select dropdown
const btnMaxScore = document.querySelector(".dropdown-center > button");
let maxScoreSetting = btnMaxScore.innerText;

const selectOptions = document.querySelectorAll("li > a");
const selectOption3 = selectOptions[0];
const selectOption10 = selectOptions[1];
const selectOption15 = selectOptions[2];

selectOption3.onclick = ()=>{
    maxScoreSetting = selectOption3.innerHTML;
    btnMaxScore.innerHTML = maxScoreSetting;
}

selectOption10.onclick = ()=>{
    maxScoreSetting = selectOption10.innerHTML;
    btnMaxScore.innerHTML = maxScoreSetting;
}

selectOption15.onclick = ()=>{
    maxScoreSetting = selectOption15.innerHTML;
    btnMaxScore.innerHTML = maxScoreSetting;
}


// onclick button add score HOME
const btnAddScoreHome = document.querySelector("#btn-addscore-home");
const homeScore = document.querySelector("#home-score");
let homeScoreInt = parseInt(homeScore.innerHTML);

btnAddScoreHome.onclick = ()=>{
    homeScoreInt +=1
    homeScore.innerHTML = homeScoreInt;
    let status = checkMaxScore(homeScoreInt, maxScoreSetting);
    if (status.includes("done")){
        console.log("Player Home Wins");
    }
}

// onclick button add score GUEST
const btnAddScoreGuest = document.querySelector("#btn-addscore-guest");
const guestScore = document.querySelector("#guest-score");
let guestScoreInt = parseInt(homeScore.innerHTML);

btnAddScoreGuest.onclick = ()=>{
    guestScoreInt +=1
    guestScore.innerHTML = guestScoreInt;
    let status =  checkMaxScore(guestScoreInt, maxScoreSetting);
    if (status.includes("done")){
        console.log("Player Guest Wins");
    }
}

// onclick reset button
const btnReset = document.querySelector("#btn-reset");

btnReset.onclick = function reset(){
    btnMaxScore.innerHTML = "Maximum Score";
    homeScoreInt = 0;
    guestScoreInt = 0;
    homeScore.innerHTML = 0;
    guestScore.innerHTML = 0;
}


function checkMaxScore(score, max){
    switch (true) {
        case (score === 3 && parseInt(max) === 3):
            return "done";

        case (score === 10 && parseInt(max) === 10):
            return "done";

        case (score === 15 && parseInt(max) === 15):
            return "done";

        default:
            return "";
    }
}
