import '../scss/style.scss';
import '../index.html';
import $ from 'jquery';


$(document).ready(function(){
    $(".page").hide();
    $(".alert").hide();
    $(".main-btn").click(function () {
        if ($(".page").is(":hidden")) {
            $(".page").show('fast');
            $(".main-btn").hide()
        } else {
            $(".page").hide('fast');

        }
    });
    $('.close-btn').click(function (){
        $(".page").hide('fast');
    })
    $('.send-btn').click(function (){
        $(".page").hide('fast');
        $(".alert").fadeIn('slow');
    })
    $('.alert__close--btn').click(function (){
        $(".alert").fadeOut('slow');
    })

})

$(function(){

    var counter = 12; //you can initialize it with any number
    var max =  500; //you can change this

    var $total = $(".total");
    var submit = true;

    $total.html(counter);
    $(".max").html(max);

    function count(event){

        var total = $(event.target).val().length;

        $total.html(counter);

        //sum the textareas
        var sum = 0;
        $("textarea").each(function(index, item){
            sum += $(this).val().length;
        });

        counter = sum;

        if(counter > max) {
            $total.css({ color : "red" });
            submit = false;
        }else{
            $total.css({ color : "black" });
            submit = true;
        }
    }

    $(document).on("keyup","textarea",count);

})