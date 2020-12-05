import '../scss/style.scss';
import '../index.html';
import $ from 'jquery';


$(document).ready(function(){
    $(".page").hide();
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
        $(".main-btn").show();
    })

})
