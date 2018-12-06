x = 1;
Summ=0;
N=""
function toShow(){
	if(x<=1){
		$(".slider-nav button.slider-next").css("visibility", "visible");
	}
	else if(x>1&&x<3){
	$(".slider-nav button.slider-next").css("visibility", "visible");
	$(".slider-nav button.slider-prev").css("visibility", "visible");
}  
	else{
		$(".slider-nav button.slider-prev").css("visibility", "visible");
	} }
function toHide(){
	$(".slider-nav button").css("visibility", "hidden");
}
function onClick4(){
		var name;
		var name1 = $("select").val();
		var name2 = $("#num").val();
		if(name1=="s1"){
			summ = 200*name2;
			name = "Манга1 "
					}
		else if(name1=="s2"){
			summ = 290*name2;
			name = "Манга2 "
					}
		else if(name1=="s3"){
			summ = 300*name2;	
			name = "Манга3 "
				}
		else if(name1=="s4"){
			summ = 180*name2;
			name = "Манга4 "	
				}	
			Summ+=summ;	
			N+=name;
		$("#im3").val(Summ);
		$("#im2").val(N);

}
function onClick3(){
	$(".l form").css("visibility", "visible");
	
}
function onClick2(){
	if(x==1){
	$(".slide").attr("src","static/my_app/1.png");
	$(".slider-nav button.slider-prev").css("visibility", "hidden");}
	if(x==2){
	$(".slide").attr("src","static/my_app/2.png");
	$(".slider-nav button.slider-next").css("visibility", "visible");
	$(".slider-nav button.slider-prev").css("visibility", "visible");
	}	
}
function onclick2(){
	x--;
	onClick2();
}
function onClick1(){
	if(x==2){
	$(".slide").attr("src","static/my_app/2.png");
	$(".slider-nav button.slider-prev").css("visibility", "visible");
}
	if(x==3){
	$(".slide").attr("src","static/my_app/3.png");
	$(".slider-nav button.slider-next").css("visibility", "hidden");
	}	
}
function onclick1(){
	x++;
	onClick1();
}
function onReady(){
	$(".m0").hover(function(){
		toShow();
	}, function(){
		toHide();
	});
	$(".slider-prev").click(onclick2);
	$(".slider-next").click(onclick1);
	$("#window1").click(onClick3);
	$(function(){
	$(window).scroll(function(){
		 if ($(this).scrollTop() > 100){
		$("#back-top").css("visibility", "visible");}
		else{
			$("#back-top").css("visibility", "hidden");
		}
	}); 
	$('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
           
        });
});
	$("#close").click(function(){
		$(".l form").css("visibility", "hidden");
	});
	$("#t").click(function(){
		$(".l form").css("visibility", "hidden");
		var name1 = $("#name").val();
		alert(name1+", ваше сообщение отправлено");
	});
	$("#im").click(onClick4);
}
$(document).ready(onReady);