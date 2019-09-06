
//Start Button that starts the time countdown

// Need to create a form input for each question

//Need to provide asnwers for each question


//Pick gifs or images for getting everything correct
// Happy: https://media.giphy.com/media/YnBntKOgnUSBkV7bQH/giphy.gif
// Average: https://media.giphy.com/media/eJS4WUQ7MkNKx3qxPN/giphy.gif
// Bad: https://media.giphy.com/media/Js1ur5v1vmaj4mRxyq/giphy.gif




$(document).ready(function () {


    $("#start").on("click", function() {
        
        // Show #quiz-container
        $("#quiz-container").removeClass('hidden');

    
        //Start the timer

       


    })
    

    $(".question1").change(function () {
        $('.question1').not(this).prop('checked', false);
     });

     $(".question2").change(function () {
        $('.question2').not(this).prop('checked', false);
     });

     $(".question3").change(function () {
        $('.question3').not(this).prop('checked', false);
     });

     $(".question4").change(function () {
        $('.question4').not(this).prop('checked', false);
     });

     $(".question5").change(function () {
        $('.question5').not(this).prop('checked', false);
     });

     $(".question6").change(function () {
        $('.question6').not(this).prop('checked', false);
     });


    $("#results").on("click", function () {

        //creating variables to store each question's answers
        
        
        var question1 = $("input#mc.question1").val();
       
        var question2 = $("input#mc.question2").val();
        
        var question3 = $("input#mc.question3").val();
        
        var question4 = $("input#mc.question4").val();
        
        var question5 = $("input#mc.question5").val();
        
        var question6 = $("input#mc.question6").val();
       
        console.log(question1,question2, question3, question4, question5, question6);

        var correctAns = 0
        var incorrectAns = 6 - correctAns;
        var unAns = 6 - correctAns - incorrectAns;

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

        var messages = ["I might have to unfriend you!!", "Alright..You can do a little better", "Holy Moly!! You are basically part of the Friends Gang!"]

        var gifs = ["https://media.giphy.com/media/Js1ur5v1vmaj4mRxyq/giphy.gif", "https://media.giphy.com/media/eJS4WUQ7MkNKx3qxPN/giphy.gif", "https://media.giphy.com/media/YnBntKOgnUSBkV7bQH/giphy.gif"]

        var score;
        if (correctAns <= 1) {
            score = 0;
        }
        if (correctAns > 1 && correctAns <= 3) {
            score = 1;
        }
        if (correctAns >= 4) {
            score = 2;
        }


        $('#quiz-container').addClass('hidden');
        $("#message").text(messages[score]);
        $("#cor-ans").text("Correct: " + correctAns);
        $("#inc-ans").text("Incorrect: " + incorrectAns);
        $("#un-ans").text("Unaswered: " + unAns);
        $("#gifs").html("<img src="+gifs[score]+">")
    })






}
)
//TODO LIST

//Create a function that resets the game







