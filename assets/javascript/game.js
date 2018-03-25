var wins = 0;
var loss = 0;

var Score = 0;

var redScore = 0;
var blueScore = 0;
var greenScore = 0;
var yellowScore = 0;

var randomEmer = 0;
var randomRuby = 0;
var randomSapp = 0;
var randomYell = 0;

var randomNum = (Math.floor(19 + Math.random()*101));

$("#random").html(randomNum);
$("#score").html(Score);


function game() {

$("#blue").on("click", addBlue);
$("#red").on("click", addRed);
$("#green").on("click", addGreen);
$("#yellow").on("click", addYellow);

function addBlue() {
    randomSapp = (Math.floor(1 + Math.random()*12));
    Score = Score + randomSapp;
    $("#score").text(Score);


    if (Score === randomNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        restart();
    }

    if (Score > randomNum) {
        loss++;
        $("#losses").html("Losses: " + loss);  
        restart();  
    }

}

function addRed() {
    randomRuby = (Math.floor(1 + Math.random()*12));
    Score = Score + randomRuby;
    $("#score").text(Score);


    if (Score === randomNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        restart();
    }

    else if (Score > randomNum){
        loss++;
        $("#losses").html("Losses: " + loss);  
        restart();  
    }

}

function addGreen() {
    randomEmer = (Math.floor(1 + Math.random()*12));
    Score = Score + randomEmer;
    $("#score").text(Score);


    if (Score === randomNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        restart();
    }

    else if (Score > randomNum){
        loss++;
        $("#losses").html("Losses: " + loss);  
        restart();  
    }

}

function addYellow() {
    randomYell = (Math.floor(1 + Math.random()*12));
    Score = Score + randomYell;
    $("#score").text(Score);


    if (Score === randomNum){
        wins++;
        $("#wins").html("Wins: " + wins);
        restart();
    }

    else if (Score > randomNum){
        loss++;
        $("#losses").html("Losses: " + loss);  
        restart();  
    }

}

}

function restart() {

    var redScore = 0;
    var blueScore = 0;
    var greenScore = 0;
    var yellowScore = 0;

    var randomEmer = 0;
    var randomRuby = 0;
    var randomSapp = 0;
    var randomYell = 0;
    
    Score = 0;
    
    randomNum = (Math.floor(19 + Math.random()*101));
    
    $("#random").text(randomNum);
    $("#score").text(Score);
}

game();