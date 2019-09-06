
//Start Button that starts the time countdown

// Need to create a form input for each question

//Need to provide asnwers for each question


//Pick gifs or images for getting everything correct
// Happy: https://media.giphy.com/media/YnBntKOgnUSBkV7bQH/giphy.gif
// Average: https://media.giphy.com/media/eJS4WUQ7MkNKx3qxPN/giphy.gif
// Bad: https://media.giphy.com/media/Js1ur5v1vmaj4mRxyq/giphy.gif




$(document).ready(function () {

    $("#button").on("click", function () {
   
        //creating variables to store each question's answers
    var question1 = document.quiz.question1.value
    var question2 = document.quiz.question2.value
    var question3 = document.quiz.question3.value
    var question4 = document.quiz.question4.value
    var question5 = document.quiz.question5.value
    var question6 = document.quiz.question6.value


    var correctAns = 0
    var incorrectAns = 6-correctAns;
    var unAns = 6-correctAns-incorrectAns;

        if (question1 === "Christina Applegate") {
            correctAns++;
        }
        if (question2 === "Carol") {
            correctAns++;
        }
        if (question3 === "Chandler") {
            correctAns++;
        }
        if (question4 === "IT Procurements Manager") {
            correctAns++;
        }
        if (question5 === "Hugsy") {
            correctAns++
        }
        if (question6 === "5") {
            correctAns++
        }
    
    var messages=["I might have to unfriend you", "Alright..You can do a little better", "Holy Moly!! You are basically part of the Friends Gang!"]
    
    var gifs=["https://media.giphy.com/media/Js1ur5v1vmaj4mRxyq/giphy.gif","https://media.giphy.com/media/eJS4WUQ7MkNKx3qxPN/giphy.gif","https://media.giphy.com/media/YnBntKOgnUSBkV7bQH/giphy.gif"]
    
    var score;
        if (correctAns <=1) {
            score=1;
        }
        if (correctAns >1 && correctAns <=3) {
            score=2;
        }
        if (correctAns >=4) {
            score=3;
        }


$("#message").text(message[score]);
$("#cor-ans").text("Correct: " + correctAns);
$("#inc-ans").text("Incorrect: " + incorrectAns);
$("#un-ans").text("Unaswered: " + unAns);
$("#gifs").html("<img src=[gifs[score]]>")

$("#button").on("click", function () {


}

})
    

//TODO LIST
//Create an action for the start button to show the questions
//Create an action for the submit answers button to load results
//
    






