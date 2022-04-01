// JavaScript Document


//----------------nav responsive---------------

$(function(){
  $(".nav_trigger_outer").click(function(){      
    $(this).toggleClass('active');
	$(".gloval_nav").toggleClass('active');
  });
  $(".gloval_nav").click(function(){      
    $(this).removeClass('active');
	$(".nav_trigger_outer").removeClass('active');
  });
  
});

//----------------onload event----------------

$(window).on('load', function(){
	setTimeout(function(){
		$('body').addClass('scroll_on');
		$('.op_anim').addClass('open');
	},800);
});



//----------------id scroll---------------
$(function() {
  var offsetY = -0;
  var time = 500;

  $('.anc[href^=#]').click(function() {
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });
});



//----------------nav tag----------------
if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
jQuery(function($) {
	var array = [];
	for(var i = 0; i < $("#nav_tag li").length; i++){
		array.push($("#nav_tag li").eq(i).outerWidth(true));
	}

	var childElementWidth = 0;
	for(var j = 0; j < array.length; j++){
		childElementWidth += array[j];
	}
	if(childElementWidth > 0) {
	var last_num = childElementWidth + 2;
	$("#nav_tag ul").css("width", last_num + "px" );
	}
});
}


//----------------iframe----------------
$(function(){
	$(".single .txt_box iframe").wrap("<p>");
	$(".single .txt_box .youtube_box iframe").unwrap();
	
	$(".single .txt_box p iframe").parent("p").addClass("youtube");
    $(".single .content_box p iframe").parent("p").addClass("youtube");
    $(".single .talent_free p iframe").parent("p").addClass("youtube");
	
});


//----------------animation----------------
$(window).on('load scroll', function(){

  var elem = $('.fade_l');

  elem.each(function () {

    var isPlay_l = 'isPlay_l';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 8)){
      $(this).addClass(isPlay_l);
    }
  });
});


$(window).on('load scroll', function(){

  var elem = $('.fade_t');

  elem.each(function () {

    var isPlay_t = 'isPlay_t';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 8)){
      $(this).addClass(isPlay_t);
    }
  });
});


$(window).on('load scroll', function(){

  var elem = $('.fade_r');

  elem.each(function () {

    var isPlay_r = 'isPlay_r';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 8)){
      $(this).addClass(isPlay_r);
    }
  });
});


$(window).on('load scroll', function(){

  var elem = $('.fade_b');

  elem.each(function () {

    var isPlay_b = 'isPlay_b';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 8)){
      $(this).addClass(isPlay_b);
    }
  });
});


//----------------swiper animation----------------
$(window).on('load scroll', function(){

  var elem = $('.fade_b_cont');

  elem.each(function () {

    var isPlay_b_cont = 'isPlay_b_cont';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 10)){
      $(this).addClass(isPlay_b_cont);
						$(this).find('.top_h_flex').addClass('isPlay_l');
						$(this).find('.toppage_swiper_outer').addClass('isPlay_b');
    }
  });
});
