$(document).ready(function(){$(".dropdown").on("show.bs.dropdown",function(){$(this).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),$(".dropdown").on("hide.bs.dropdown",function(){$(this).find(".dropdown-menu").first().stop(!0,!0).slideUp()}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},1600),!1}}),$(".headerSub").typed({strings:["UI/UX Engineer","Beardsman","Bourbon Enthusiast","Barbell Mover^8000"],contentType:"html",typeSpeed:100,startDelay:900,showCursor:!0,cursorChar:"_",loop:!0,backDelay:3e3,backSpeed:50}),$(document).on("scroll",function(){$(".header").css("opacity",$(document).scrollTop()/500)})});