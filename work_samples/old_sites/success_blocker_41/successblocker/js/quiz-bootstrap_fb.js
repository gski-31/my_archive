function uncheckAnswers(n) {
    for (var i = 0; i <= n; i++) {
        document.getElementById('answer-' + i).checked = false;
    }
}

jQuery(function ($) {

    var submitUrl = '';

         var data = [
             [
                    {'question' : 'When someone compliments me'},
                    {'answers': 
                            [
                                    'I smile and appreciate it.',
                                    'I say thank you! I love compliments.',
                                    'I sometimes feel uncomfortable and don\u0027t know what to say.'
                            ]
                    },
                    {'trigger_answer' : [0, 0, 3]},
                    {'type':'not_worthy'}
             ],
             [
                    {'question' : 'When it comes to meeting new people'},
                    {'answers': 
                            [
                                    'I love it! I make instant friends with everyone!',
                                    'I like talking to new people.',
                                    'I find it difficult to talk to people I don\u0027t know.'
                            ]
                    },
                    {'trigger_answer' : [0, 0, 3]},
                    {'type':'rejected'}
             ],
             [
                    {'question' : 'When it comes to setting goals'},
                    {'answers': 
                            [
                                    'The bigger and crazier the better! I love to stretch myself.',
                                    'I set reasonable goals and achieve them.',
                                    'I never set a goal unless I know with 100% certainty that I\u0027ll achieve it.'
                            ]
                    },
                    {'trigger_answer' : [0, 0, 3]},
                    {'type':'ill_fail'}
             ],
                          [
                    {'question' : 'I feel confident asking for what I want.'},
                    {'answers': 
                            [
                                    'True! I\u0027m a lion, hear me roar!',
                                    'Most of the time. I regularly speak up and ask for what I want, and I usually get it.',
                                    'Not true. I have a hard time using my voice to ask for what I want.'
                            ]
                    },
                    {'trigger_answer' : [0, 0, 3]},
                    {'type':'rejected'}
             ],
             [
                    {'question' : 'I care about what other people think of me.'},
                    {'answers': 
                            [
                                    'Not true. I don\u0027t care what others think about me at all.',
                                    'Sometimes, but not all of the time.',
                                    'Very true. I constantly worry about what others think about what I say and do.'
                            ]
                    },
                    {'trigger_answer' : [0, 0, 3]},
                    {'type':'rejected'}
             ],
             [
                    {'question' : 'I expect myself to be perfect.'},
                    {'answers': 
                            [
                                    'No. I love and accept myself, faults and all.',
                                    'Not true. I like to do my best, but I know that it\u0027s ok if I fail sometimes.',
                                    'Yes! I constantly nitpick myself, finding the fault in everything I do.'
                            ]
                    },
                    {'trigger_answer' : [0, 0, 3]},
                    {'type':'ill_fail'}
             ],
             [
                    {'question' : 'When making decisions:'},
                    {'answers': 
                            [
                                    'They\u0027re a snap! No problem.',
                                    'I find it pretty easy to make up my mind, though I occasionally second guess myself.',
                                    'I have an extremely hard time making even the smallest decisions. It\u0027s a painful process.'
                            ]
                    },
                    {'trigger_answer' : [0, 0, 3]},
                    {'type':'not_worthy'}
             ],
             [
                    {'question' : 'Are you male or female?'},
                    {'answers': 
                            [
                                    'Male',
                                    'Female'
                            ]
                    },
                    {'trigger_answer' : [0, 0]},
                    {'type':'gender'}
             ]
        ];

    var number = 0;
    var answer_set = false;
    var maxAnswerNumber = $('input[name="answer"]:radio').length;
    var resultArray = [];
    var outcomeArray = [];
    var answered_questions = 0;

        var quiz = {
                number: 0,
                answer_set: false,
                init: function () {
                            quiz.clear();
                                $('#quiz-question').html(data[quiz.number][0]['question']);
                                for (var i in data[quiz.number][1]['answers']) {
                                    var answer = data[quiz.number][1]['answers'][i];
                                     $('#answer-' + i).next().html(answer);         
                                }
                                // If answer number is lower than max answer number
                                var answerNumber = parseInt(i);
                                if (maxAnswerNumber > (answerNumber+1)) {
                                    while(maxAnswerNumber > (answerNumber+1)) {
                                        answerNumber++;
                                        $('#answer-' + answerNumber).hide();
                                        $('#answer-' + answerNumber).next().hide();   
                                    }
                                }

 
                        $('input[name="answer"]:radio').click(function (e) {
                                var ans = $(this).attr('id');
                                if ($("#quiz-answers").hasClass("disabled")) {return false}
                                $("#quiz-answers").addClass("disabled");

                                e.preventDefault();
                                answered_questions += 1;
                                
                                if (quiz.number + 1 <= data.length) {                                
                                        
                                        var answer_number = parseInt(ans.charAt(ans.length - 1)) + 1;

                                        var answer_cat = data[quiz.number][3]['type'];

                                        var answer_value = data[quiz.number][2]['trigger_answer'][parseInt(ans.charAt(ans.length - 1))];

                                        var trigger_answer = data[quiz.number][2]['trigger_answer'][parseInt(ans.charAt(ans.length - 1))];

                                        quiz.number += 1;
                                        
                                        outcomeArray.push({key:answer_cat, value:answer_value});
                                        resultArray.push(answer_number);

                                        var genderquestion = data.length-1;

                                        if (quiz.number < data.length) {

/******************************************************************************************************************/
                                                


                                                                $('#quiz-question').html(data[quiz.number][0]['question']);

                                                                for (var i in data[quiz.number][1]['answers']) {
                                                                    var answer = data[quiz.number][1]['answers'][i];
                                                                    $('#answer-' + i).show().next().show().html(answer);
                                                                }
                                                                uncheckAnswers(i);
                                                                // If answer number is lower than max answer number
                                                                var answerNumber = parseInt(i);
                                                                if (maxAnswerNumber > (answerNumber+1)) {
                                                                    while(maxAnswerNumber > (answerNumber+1)) {
                                                                        answerNumber++;
                                                                        $('#answer-' + answerNumber).hide();
                                                                        $('#answer-' + answerNumber).next().hide();
                                                                    }
                                                                }
                                                                $("#quiz-answers").removeClass("disabled");
/******************************************************************************************************************/
                                        } else {
                                         

                                                //$('.quiz-submit-results-button').click(function (e) {
                                                       // e.preventDefault();
                                                        
                                               
                                                        $(function () {
                                                                $('#quiz-submit-results #result').val(JSON.stringify(resultArray));


                                                                var ill_fail = 0;
                                                                var rejected = 0;
                                                                var not_worthy = 0;
                                                                var rslt = "ill_fail";

                                                                for (var i=0;i<outcomeArray.length;i++)
                                                                {
                                                                    switch(outcomeArray[i]['key'])
                                                                    {
                                                                        case "ill_fail":
                                                                            ill_fail = ill_fail + outcomeArray[i]['value'];
                                                                            break;
                                                                        case "rejected":
                                                                            rejected = rejected + outcomeArray[i]['value'];
                                                                            break;
                                                                        case "not_worthy":
                                                                            not_worthy = not_worthy + outcomeArray[i]['value'];
                                                                            break;

                                                                    }

                                                                }
                                                            

                                                                var tally = [not_worthy, rejected, ill_fail];
                                                                
                                                                var max = tally[0];
                                                                var maxIndex = 0;

                                                                for (var z = 0; z < tally.length; z++) {
                                                                    if (tally[z] > max) {
                                                                        maxIndex = z;
                                                                        max = tally[z];
                                                                    }
                                                                }

                                                                switch(maxIndex)
                                                                {
                                                                    case 0:
                                                                        rslt = "not_worthy";
                                                                        $('#token').val(1);
                                                                        break;
                                                                    case 1:
                                                                        rslt = "rejected";
                                                                        $('#token').val(2);
                                                                        break;
                                                                    case 2:
                                                                        rslt = "ill_fail";
                                                                        $('#token').val(3);
                                                                        break;
                                                                }



                                                                $('#quiz-submit-results #outcome').val(rslt);
                                                                $('#quiz-submit-results #outcomeArr').val(JSON.stringify({"n":not_worthy,  "r":rejected, "f":ill_fail}));
                                                                // Clear some variables
                                                                
                                                                // Submit the form
                                                               // $('#quiz-submit-results').submit();
                                                        });
                                               //});
/******************************************************************************************************************/

                                                $('#quiz-question').fadeOut(300, function() {
                                                    $('#quiz-question').addClass('text-center');
                                                    $('#quiz-question').html('<u>It&#39;s Time To Get Your Results!</u><br /><strong>Click the button below to find out what your no.1 success blocker is, where it came from and how to fix it.</strong>').fadeIn(300);
                                                });

                                                $('#quiz-answers').fadeOut(300, function() {
                                                    $('#quiz-submit-results').fadeIn(300);
                                                });

/******************************************************************************************************************/
                                        }   
                                }
                                
                        });
                },
         
                clear: function() {
                        quiz.number = 0;
                        quiz.answer_set = false;
                        resultArray = [];
                }
        }
        
        quiz.init();

/********************************************************************/



/*

    $('input[name="answer"]:radio').click(function (e) {

        if (number + 1 <= data.length) {
            var trigger_answer = data[number][2]['trigger_answer'];

            var ans = $(this).attr('id');
            var answer_number = parseInt(ans.charAt(ans.length - 1)) + 1;

            if ((answer_number == trigger_answer) && (answer_set == false)) {
                $('#token').val(number + 1);
                answer_set = true;
            }

            number += 1;

            resultArray.push(answer_number);

            if (number < data.length) {

                setTimeout(function(){
                    $('#quiz-question').html(data[number][0]['question']);

                    for (var i in data[number][1]['answers']) {
                        var answer = data[number][1]['answers'][i];
                        $('#answer-' + i).show().next().show().html(answer);
                    }
                    uncheckAnswers(i);
                    // If answer number is lower than max answer number
                    var answerNumber = parseInt(i);
                    if (maxAnswerNumber > (answerNumber+1)) {
                        while(maxAnswerNumber > (answerNumber+1)) {
                            answerNumber++;
                            $('#answer-' + answerNumber).hide();
                            $('#answer-' + answerNumber).next().hide();
                        }
                    }
                },300);

            } else {

                $('#quiz-question').fadeOut(300, function() {
                    $('#quiz-question').addClass('text-center');
                    $('#quiz-question').html('<u>It&#39;s Time To Get Your Results!</u><br /><strong>Click the button below to find out what your no.1 success blocker is, where it came from and how to fix it.</strong>').fadeIn(300);
                });

                $('#quiz-answers').fadeOut(300, function() {
                    $('#quiz-submit-results').fadeIn(300);
                });
            }
        }

    });
*/
    $('.quiz-submit-results-button').click(function (e) {
        e.preventDefault();

        // $('#quiz-sub-container .quiz-content').fadeOut(200, function () {    <- joel removed and rewrote on next line in order to leave input filed visible when error
        $(function () {
            //$('#quiz-submit-results #result').val(JSON.stringify(resultArray));
            // Clear some variables

            // Submit the form
            $('#quiz-submit-results').submit();


        });
    });

    /*
     * Create hover effect on radio buttons
     */

    $('input[name="answer"]:radio').hover(
        function () {
            $(this).prop('checked', 'checked');
        },
        function () {
            $(this).prop('checked', '');
        }
    );

    $('input[name="answer"]:radio').next().hover(
        function () {
            $(this).prev().prop('checked', 'checked');
        },
        function () {
            $(this).prev().prop('checked', '');
        }
    );

    $("#quiz-sub-container").on('hidden.bs.modal', function () {
        number = 0;
        answer_set = false;
        maxAnswerNumber = $('input[name="answer"]:radio').length;
        resultArray = [];
    });

});
