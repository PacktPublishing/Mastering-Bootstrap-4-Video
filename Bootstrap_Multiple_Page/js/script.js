$(function(){
    $(".card-block .btn").on("click",function(){
        console.log($(this).parent().find('.card-title').text());
    });
});