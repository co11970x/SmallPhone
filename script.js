var button_audio=new
Audio("https://monoame.com/awi_class/ballsound/click14.wav");
button_audio.play();

var screen_audio=new
Audio("https://monoame.com/awi_class/ballsound/click18.wav");
screen_audio.play();

var main_audio=new
Audio("https://monoame.com/awi_class/ballsound/click23.wav");
main_audio.play();

var wiggle_audio=new
Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");
wiggle_audio.play();



$(".i6").click(
	function(){
		$(".phone").css("width","270px")
		$(".screen").css("height","440px")
		$(".phonename").text($(this).text())
		button_audio.play();
	}

);

var page=0;
var b1=new Boolean();
$(".screen").click(
	function(){
		page++;
		if(page>2 ){
			page=1;
			b1=true;
		}
		else if(b1==true){
			page=0;
			b1=false;
		}
		
		$(".pages").css("left","-"+page*100+"%")
		screen_audio.play();
	}
	);
$(".button").click(
	function(){
		page=0;
		$(".pages").css("left","-"+page*100+"%")
		main_audio.play();
	}
);
var b2=new Boolean();
var ol=1
$(".turn").click(
	function(){
		
	if(b2==false){
		$(".phone").css("transform", "rotate"+"("+ol*360+"deg)")
		ol++;
		b2=true;
	} 
		else if(b2==true){
		$(".phone").css("transform", "rotate"+"("+ol*360+"deg)")
		ol++;
		b2=false;
	}
		//$(".phone").css("transform", "rotate(0deg)")
	});
$(".wiggle").click(function(){
	wiggletime= 0;
}
);

var wiggletime=21;
setInterval(function(){
	if(wiggletime<=20){
		wiggletime++;
		console.log(wiggletime);
		if(wiggletime%2==0){
			$(".phone").css("left","-30px");
		}else{
			$(".phone").css("left","30px");
		}
		if(wiggletime==21){
			$(".phone").css("left","");
		}
		wiggle_audio.play();
	}
},80);