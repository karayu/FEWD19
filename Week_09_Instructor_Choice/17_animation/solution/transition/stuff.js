$("#image-container").on("transitionEnd webkitTransitionEnd", ".img-moved-left",function(){
    $("#image-container").append(this);
    $(this).removeClass("img-moved-left");
});