$(document).ready(function(){
    
    $("#erase, #delete, #muliply, #razdelit, #seven, #eight, #nine, #plus, #four, #five, #six, #minus, #one, #two, #three, #percent, #dot, #zero, #plusMinus, #equals").click(function(){
         
         var a = $(this).val();
         var total = $('textarea').val($('textarea').val() + a); 
    });
})


function split(total, b) {
    if (a==0) {
        alert("Enter the valid number. 0 is not valid");
    } else {
        return total / b;
    }
}

function multiply(total, b) {
    return total * b;
}

function plus(total, b) {
    return total + b;
}

function minus(total, b) {
    return total - b;
}

function percent(total, b){
    var c = (total / 100) * b;
    return c;
}
