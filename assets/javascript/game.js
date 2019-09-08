
$(document).ready(function () {


    var correctAns = 0;
    var incorrectAns = 0;
    var unAns = 0;
    var timer;
    var counter = 45


    clearInterval(timer);

    function timeUp() {
        clearInterval(timer);
        results();
    }

    function countDown() {
        counter--;

        $("#timer").text("Time remaining: " + counter + " seconds");

        if (counter === 0) {
            timeUp();
        }
    }


    function startGame() {
        // Show #quiz-container
        $("#quiz-container").removeClass('hidden');

        //Remove the start-div
        $('#start-div').addClass('hidden');


        //wait 30 seconds to run the results function
        timer = setInterval(countDown, 1000);

        countDown();

    }




    //Load questions
    $("#start").on("click", function () {

        // Show #quiz-container
        $("#quiz-container").removeClass('hidden');

        //Remove the start-div
        $('#start-div').addClass('hidden');


        //wait 30 seconds to run the results function
        timer = setInterval(countDown, 1000);

        countDown();
    })



    //Function to run results

    function results() {


        var question1 = $("input[name='question1']:checked").val()
        var question2 = $("input[name='question2']:checked").val()
        var question3 = $("input[name='question3']:checked").val()
        var question4 = $("input[name='question4']:checked").val()
        var question5 = $("input[name='question5']:checked").val()
        var question6 = $("input[name='question6']:checked").val()


        //Question 1
        if (question1 === "Christina Applegate") {
            correctAns++;
        }

        else if (question1 == undefined ) {
             unAns++;
           }

         else {
           incorrectAns++;
          }



        //Question 2
        if ( question2 === "Carol") {
            correctAns++;
         }

        else if (question2 == undefined) {
            unAns++;
        }

         else {
          incorrectAns++;

         }

        //Question 3

         if ( question3 === "Chandler" ) {
            correctAns++;
        }

        else if (question3 == undefined) {
            unAns++;
        }

         else {
             incorrectAns++;

         }

        //Question 4
         if ( question4 === "IT Procurements Manager") {
            correctAns++;
         }

        else if (question4 == undefined) {
            unAns++;
        }

         else {
            incorrectAns++;

         }


        //Question 5
         if (question5 === "Hugsy") {
             correctAns++;
         }

        else if (question5 == undefined) {
            unAns++;
        }

         else {
             incorrectAns++;

         }


        //Question 6
         if ( question6 === "5") {
             correctAns++;
         }

        else if (question6 == undefined) {
            unAns++;
        }

        else {
             incorrectAns++;

         }


        var messages = ["I might have to unfriend you!!", "Alright..You can do a little better", "Holy Moly!! You are basically part of the Friends' Gang!"]

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
        $('#results-container').removeClass('hidden');
        $("#message").text(messages[score]);
        $("#cor-ans").text("Correct Answers: " + correctAns);
        $("#inc-ans").text("Incorrect Answers: " + incorrectAns);
        $("#un-ans").text("Unanswered: " + unAns);
        $('#try-again').removeClass('hidden');
        $("#gifs").html("<img src=" + gifs[score] + ">")

        console.log(question1)
        clearInterval(timer);
    }



    $("#results").on("click", function () {

        results();


    })

    $("#try-again").on("click", function () {
        clearInterval(timer);
        $('#results-container').addClass('hidden');
        counter = 45;
        correctAns = 0;
        unAns = 0;
        incorrectAns = 0;
        question1 = "";
        question2 = "";
        question3 = "";
        question4 = "";
        question5 = "";
        question6 = "";
        timer;
        startGame();

    })

})