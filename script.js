$(document).ready(function(){
    
    $("#erase, #delete, #multiply, #razdelit, #seven, #eight, #nine, #plus, #four, #five, #six, #minus, #one, #two, #three, #percent, #dot, #zero, #plusMinus, #equals").click(function(){
         
         var a = $(this).val();
         var total = $('textarea').val($('textarea').val() + a); 
    });
})

$("#plusMinus").click(function(){
    var total =  $('textarea').val();
    total = - (total);
    $("textarea").val(total);
    
})

$("#erase").click(function(){
    $("textarea").val("");
})

$("#delete").click(function(){
     $('textarea').val($('textarea').val().substring(0, $('textarea').val().length - 1));
    });

$('#equals').click(function(){
    $('textarea').val(eval($('textarea').val()));
    });

$("#percent").click(function(){
    var total = $('textarea').val();
    var percent = total / 100;
    $("textarea").val(percent);
})

