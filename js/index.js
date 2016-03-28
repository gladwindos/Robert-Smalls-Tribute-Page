$(document).ready(function() {
  
  $(".nav-tabs li").click(function() {
    var tabIndex = $("li").index($(this));

    $(".nav-tabs li").removeClass("active");
    $(".tab-info").removeClass("current");

    $(this).addClass("active");
    $("#content" + tabIndex).addClass("current")
    
  })

});