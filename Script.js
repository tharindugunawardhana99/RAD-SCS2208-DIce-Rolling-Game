const dice = document.getElementById("dice_btn")
const dice1 = document.getElementById("start")
var score_1 = 0
var score_2 = 0
var count = 0
var numberOfRolls = 0

var playerOne
var playerTwo

function addPlayers(){
    
    var names = location.search.substring(1)
    playerOne=names.substring(names.indexOf("=")+1,names.indexOf("&"))
    playerTwo=names.substring(names.lastIndexOf("=")+1)
    document.getElementById("playerOne").innerHTML=playerOne
    document.getElementById("playerTwo").innerHTML=playerTwo
    console.log(playerOne)
    console.log(playerTwo)

}

function diceGame(){
    
    var randomDice = Math.floor((Math.random()*6)+1)    
    var diceLocation = "Images/"+"dice_"+randomDice+".png"
    var img1 = document.querySelectorAll("img")[0]  //retuens all the elements in the doc that matches a specified CSS selector.
    img1.setAttribute("src",diceLocation)   //The setAttribute() method is used to set or add an attribute to a particular element and provides a value to it.

    var randomDice2 = Math.floor((Math.random()*6)+1)
    var diceLocation2 = "Images/"+"dice_"+randomDice2+".png"
    var img2 = document.querySelectorAll("img")[1]
    img2.setAttribute("src",diceLocation2) 

    if(count % 2 == 0){

        if((randomDice == randomDice2) && (randomDice != 1)){
            score_1 = score_1 + randomDice + randomDice2
            numberOfRolls++

        }
        else if((randomDice == randomDice2) && (randomDice == 1)){
            score_1 = 0
            count++
            numberOfRolls++
        }
        else{
            score_1 = score_1 + randomDice + randomDice2
            count++
            numberOfRolls++
        }
    }
    else{
        if((randomDice == randomDice2) && (randomDice != 1)){
            score_2 = score_2 + randomDice + randomDice2
            numberOfRolls++
        }
        else if((randomDice == randomDice2) && (randomDice == 1)){
            score_2 = 0
            count++
            numberOfRolls++
        }
        else{
            score_2 = score_2 + randomDice + randomDice2
            count++
            numberOfRolls++
        }
    }

    if((score_1 >= 100) || (score_2 >= 100)){
        if(score_1 >= 100){
            document.getElementById("win").innerHTML = playerOne + " WON!"
            score_1 = score_2 = 0
            count = 0
            numberOfRolls = 0
            
        }
        else{
            document.getElementById("win").innerHTML = playerTwo + " WON!"
            score_1 = score_2 = 0
            count = 0
            numberOfRolls = 0
           
        }
    }

    if(count == 0){

        document.getElementById("dice_btn").innerHTML = "Start Again"
    }
    else {
        document.getElementById("dice_btn").innerHTML = "Roll the Dice"
        document.getElementById("win").innerHTML = " "
    }

    document.getElementById("score1").innerHTML = score_1
    document.getElementById("score2").innerHTML = score_2
    document.getElementById("count").innerHTML = "Roll Count : " + numberOfRolls

}

