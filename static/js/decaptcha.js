(function($) {
    $(document).ready(function(){

        var de_question = $("#decaptcha-question");
        var de_response = $("#decaptcha-response");
        var de_result = $('input[name="decaptcha-result"]:hidden');

        var de_current_question;
        
        $.getJSON("./media/questions.json", function (data) {

            questionIndex = getRandomInt(data.questions.length);              
            de_current_question = data.questions[questionIndex];          

            })
            .done(function() {
               de_question.text(de_current_question["content"]);
            });       

        $("#decaptcha-submit").on("click", function() {

            var de_answer = $("#decaptcha-answer");
            var userAnswer = $.md5(de_answer.val().toLowerCase());

                if(de_result.val() != 1)
                {
                    if(userAnswer == de_current_question["answer"].toLowerCase())
                    {
                        de_response.text("OK");
                        de_response.addClass("decaptcha-response-success");
                        de_result.val("1");
                        de_answer.prop('readonly', true);

                    }
                    else
                    {
                        de_response.text("FAIL");
                        de_response.addClass("decaptcha-response-error");
                        de_result.val("0");
                    }
                }
        });
    
        
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    })
})(jQuery);
