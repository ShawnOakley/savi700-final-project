/* Nice idea but not playing well with other js now */
/*
$(window).on('load', function() {
    $("div.navbar-fixed-top").autoHidingNavbar();
});

$(window).on('resize load', function() {
   $("div.navbar-fixed-top").autoHidingNavbar('show');
   if($(window).height() < 400 ) {
       $("div.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', false);
   } else {
       $("div.navbar-fixed-top").autoHidingNavbar('setDisableAutohide', true);
   };
});
*/

/*Allow clickable submenus for district races*/
(function($) {
  $(document).ready(function() {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
  });
})(jQuery);

/*Close the dropdowns submenu after a click*/
(function($) {
  $(document).ready(function() {
    $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
        if($(window).width() < 768 )
            $('.navbar-collapse').collapse('hide');
    });
  });
})(jQuery);

/* Dynamically reposition top of content to bottom of resized navbar */
$(window).on('load resize orientationchange', function() {
  $('body').css({
    "padding-top": $(".navbar").height() + "px"
  });
  /* Dynamically adjust so anchors will land visible under fixed navbar */
  $('div.anchor').css("top", -$(".navbar").height());
  /*$('div.anchor').css("top", -$(".navbar").height()-10);*/
});

/* Re-orients to chosen anchor after orientation change */
/* Seems to cause occasional problem with navbar...so remove for now
$(window).on("orientationchange", function () {
    window.location = document.URL;
});
*/

/*$(window).on("resize hashchange", function () {*/
$(window).on("hashchange", function () {
    /*location.reload(false);*/
	/*window.location.href = window.location.href;*/
    /*window.location = document.URL;*/
	/*window.scrollTo(window.scrollX, window.scrollY - $(".navbar").height());*/
	/*window.scrollTo(window.scrollX, window.scrollY + 10);*/
  /*$('div.anchor').css("top", -$(".navbar").height());*/
});
