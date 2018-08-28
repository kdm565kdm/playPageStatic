


var fps=Datas.fps;
var second=1000;
var speed=second/fps;//1000/24~41一秒二十四帧
var photos=Datas.images;
var voices=Datas.voices;


var image_div=document.getElementById("image");
var play_btn=document.getElementById("play");
var voice=document.getElementById("voice");
var workName=document.getElementById("workName");
var authorName=document.getElementById("authorName");
workName.innerHTML=Datas.workName;
authorName.innerHTML=Datas.authorName;

play_btn.onclick=function(){
	playAni();
    
};
function playAni(){
	var i=1;
	var len=photos.length;
	cicle_show_image(i,len);
}
//循环展示图片
function cicle_show_image(i,len){
	if(i>=len){
		//k=1;
		image_div.setAttribute("src","images/1.jpg");
		voice.pause();
		return;
	}
	var img=photos[i];

	if(typeof(img.voiceId)!=='undefined'){
		
		playVoice(img.voiceId);

	}
	var path="images/"+i+".jpg";



	image_div.setAttribute("src",path);

    i++;
    setTimeout('cicle_show_image('+i+','+len+')',speed);
}

function playVoice(voiceId){
	var voiceId=voiceId;
		var path="voices/"+voiceId+".mp3";
	voice.setAttribute("src",path);
}