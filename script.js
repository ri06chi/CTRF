$(document).ready(function(){
 $(window).scroll(function(){
	 let position=$(this).scrollTop();
	  if(position>=700){
		  $('.nav-menu').addClass('custom-navbar');
	  }else{
		  $('.nav-menu').removeClass('custom-navbar');
	  }
 });

 $(window).scroll(function(){
	 let position=$(this).scrollTop();
	 if(position >= 91){
		 $('.about-us').addClass('anim1');
		 $('.about-us-par').addClass('anim1');
	 } else{
		 $('.about-us').removeClass('anim1');
		 $('.about-us-par').removeClass('anim1');
	 }
		 
 });
 
 $(window).scroll(function(){
	 let position=$(this).scrollTop();
	 if(position >= 1034){
		 $('.fraternity').addClass('anim2');
	 } else{
		 $('.fraternity').removeClass('anim2');
	 }
		 
 });
 $(window).scroll(function(){
	 let position=$(this).scrollTop();
	 if(position >= 1034){
		 $('.down1').addClass('anim3');
	 } else{
		 $('.down1').removeClass('anim3');
	 }
		 
 });
 $(window).scroll(function(){
	 let position=$(this).scrollTop();
	 if(position >= 1034){
		 $('.up1').addClass('anim4');
	 } else{
		 $('.up1').removeClass('anim4');
	 }
	 });
	 
	 
	  $(window).scroll(function(){
	 let position=$(this).scrollTop();
	 if(position >= 2150){
		 $('.up2').addClass('anim5');
	 } else{
		 $('.up2').removeClass('anim5');
	 }
	  });
	  
	  $(window).scroll(function(){
	 let position=$(this).scrollTop();
	 if(position >= 2150){
		 $('.down2').addClass('anim6');
	 } else{
		 $('.down2').removeClass('anim6');
	 }
	  });
	  
	  
	  $(window).scroll(function(){
	 let position=$(this).scrollTop();
	 if(position >= 2145){
		 $('.re').addClass('anim7');
	 } else{
		 $('.re').removeClass('anim7');
	 }
	  });
	  
});