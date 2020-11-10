$(document).ready(function(){
	//scroll
	$(window).scroll(function(){
		if($(this).scrollTop()>40){
			$('#topBtn').fadeIn();
			$('.stickyDiv').fadeOut();
		}else {
			$('#topBtn').fadeOut();
			$('.stickyDiv').fadeIn();
		}

	});

	// on click
	$("#topBtn").click(function(){
		$('html,body').animate({scrollTop : 0}, 800);
	});

	//
	$('.parallax').parallax();
});

  window.onload = initEvent;

eventCard = document.getElementById('eventcard');
function initEvent(){
		registerSW();


}


async function registerSW(){
	if('serviceWorker' in navigator){
		try{
			//register service worker
			await navigator.serviceWorker.register('./sw.js');

		} catch (e){
			console.log("SW register failed");
		}//
	}
}

function gtPage(){

	window.location.href="https://www.google.com"
}


var elems;
var instances;
   document.addEventListener('DOMContentLoaded', function() {
    elems = document.querySelectorAll('.sidenav');
    instances = M.Sidenav.init(elems, "edge");
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, "responsiveThreshold");

  });