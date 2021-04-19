$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){
    scroll(0,0);
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $('.navbar-menu a').click(function(){
      $('.menu-toggler').toggleClass("active");
      $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3(){
  document.getElementById("popup-3").classList.toggle("active");
}

function togglePopup4(){
  document.getElementById("popup-4").classList.toggle("active");
}

function togglePopup5(){
  document.getElementById("popup-5").classList.toggle("active");
}

function togglePopup6(){
  document.getElementById("popup-6").classList.toggle("active");
}

