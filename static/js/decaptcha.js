(function($) {
    $(document).ready(function(){

        var de_question = $("#decaptcha-question").text("");
        var de_response = $("#decaptcha-response").text(" \n ");
        var de_result = $('input[name="decaptcha-result"]:hidden');

        var de_current_question;
        
        $.getJSON("./media/questions.json", function (data) {

            for (let index = 0; index < data.questions.length; index++) {                
            }

            questionIndex = getRandomInt(data.questions.length);              
            de_current_question = data.questions[questionIndex];          

            })
            .done(function() {
               de_question.text(de_current_question["content"]);
            });       

        $("#decaptcha-submit").on("click", function() {

            var userAnswer = $.md5($("#decaptcha-answer").val().toLowerCase());

            if(userAnswer == de_current_question["answer"].toLowerCase())
            {
                de_response.text("Ответ правильный");
                de_response.addClass("decaptcha-response-success");
                de_result.val("1");

            }
            else
            {
                de_response.text("Ответ неправильный!");
                de_response.addClass("decaptcha-response-error");
                de_result.val("0");
            }
        });
    
        
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    })
})(jQuery);
