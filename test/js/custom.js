
/***************************************************
		  		   // Portfolio on mouseover opactiy
***************************************************/	
	jQuery(document).ready(function () {
if( jQuery.hasOwnProperty("prettyPhoto") ){

jQuery(".lightbox").prettyPhoto({
animation_speed	: 'normal',
theme			: 'pp_default',
social_tools	: ''

});

}
//prettyPhoto END	
});

/***************************************************
		  			Nivo Slider start
***************************************************/

 jQuery(window).load(function() {

   jQuery("#Slider").nivoSlider({
	effect:"boxRainGrowReverse", //Specify sets like: 'fold,fade,sliceDown'
        slices:15,
        boxCols:10,
        boxRows:10,
        animSpeed:200, //Slide transition speed
        pauseTime:5000,
        startSlide:0,//Set starting Slide (0 index)

        directionNav:false,//Next & Prev
        directionNavHide:false, //Only show on hover
		controlNav:false,	//1,2,3...
        controlNavThumbs:false,//Use thumbnails for Control Nav
        controlNavThumbsFromRel:false,//Use image rel for thumbs
		keyboardNav:true,//Use left & right arrows

        pauseOnHover:false,//Stop animation while hovering
        manualAdvance:false//Force manual transitions

   });
});
 
  // Nivo Slider END
  

/* Twitter Start */

	jQuery(function() {

	jQuery("#tweets").tweet({
	count: 1,
	username: "envato"
	});
	});
/* Twitter End */


/* Box Grid Start */
		jQuery(function() {
			Boxgrid.init();
		});
/* Box Grid  End*/

/* Custom Scroll*/
(function($){
			$(window).load(function(){
				$(".container").mCustomScrollbar({
					set_width:false, /*optional element width: boolean, pixels, percentage*/
					set_height:false, /*optional element height: boolean, pixels, percentage*/
					horizontalScroll:false, /*scroll horizontally: boolean*/
					scrollInertia:950, /*scrolling inertia: integer (milliseconds)*/
					mouseWheel:true, /*mousewheel support: boolean*/
					mouseWheelPixels:"auto", /*mousewheel pixels amount: integer, "auto"*/
					autoDraggerLength:true, /*auto-adjust scrollbar dragger length: boolean*/
					autoHideScrollbar:false, /*auto-hide scrollbar when idle*/
					scrollButtons:{ /*scroll buttons*/
						enable:true, /*scroll buttons support: boolean*/
						scrollType:"continuous", /*scroll buttons scrolling type: "continuous", "pixels"*/
						scrollSpeed:"auto", /*scroll buttons continuous scrolling speed: integer, "auto"*/
						scrollAmount:40 /*scroll buttons pixels scroll amount: integer (pixels)*/
					},
					advanced:{
						updateOnBrowserResize:true, /*update scrollbars on browser resize (for layouts based on percentages): boolean*/
						updateOnContentResize:false, /*auto-update scrollbars on content resize (for dynamic content): boolean*/
						autoExpandHorizontalScroll:false, /*auto-expand width for horizontal scrolling: boolean*/
						autoScrollOnFocus:true, /*auto-scroll on focused elements: boolean*/
						normalizeMouseWheelDelta:false /*normalize mouse-wheel delta (-1/1)*/
					},
					contentTouchScroll:true, /*scrolling by touch-swipe content: boolean*/
					callbacks:{
						onScrollStart:function(){}, /*user custom callback function on scroll start event*/
						onScroll:function(){}, /*user custom callback function on scroll event*/
						onTotalScroll:function(){}, /*user custom callback function on scroll end reached event*/
						onTotalScrollBack:function(){}, /*user custom callback function on scroll begin reached event*/
						onTotalScrollOffset:0, /*scroll end reached offset: integer (pixels)*/
						onTotalScrollBackOffset:0, /*scroll begin reached offset: integer (pixels)*/
						whileScrolling:function(){} /*user custom callback function on scrolling event*/
					},
					theme:"light-thin" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
				});
			});
		})(jQuery);

/* Custom Scroll end*/

/***************************************************
		  		//	Preloader Script
***************************************************/

$(window).load(function() {
  $('#preloader').fadeOut(300, function() {
    $('body').css('overflow','visible');
    $(this).remove();
  });
});

//	//	Preloader Script


/* Background slide start */

function thebackground() {
$('div.background img').css({opacity: 0.0});
$('div.background img:first').css({opacity: 1.0});
setInterval('next()',5000);
}

function next() {
var current = ($('div.background img.show')? $('div.background img.show') : $('div.background img:first'));
if ( current.length == 0 ) current = $('div.background img:first');
var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div.background img:first') :current.next()) : $('div.background img:first'));
next.css({opacity: 0.0})
.addClass('show')
.animate({opacity: 1.0}, 3000);
current.animate({opacity: 0.0}, 3000)
.removeClass('show');
};

$(document).ready(function() {
thebackground();	
$('div.background').fadeIn(4000); // works for all the browsers other than IE
$('div.background img').fadeIn(4000); // IE tweak
});

/* Background slide end */



