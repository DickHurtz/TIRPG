function Dialogue_shitty_quest(withwho, part1, part2, part3){
	var y = window.innerHeight * 0.25;
	if(part1){
		for(i = 0; i < part1; i++){
			drawText(Otvety["part1"][i], window.innerWidth / 4,y);
			y+=30;
		}
		document.onkeypress = function(answer){
			for(i = 0; i < part1;){
				i++;
				if(answer.keyCode === 48 + i && Pause == true){ //1
					ctx.fillStyle = '#fff';
					ctx.fillRect(withwho.x, withwho.y - 30, 1000, 40);
					ctx.fillRect(window.innerWidth / 4,window.innerHeight * 0.75 - 30, 1000, 40);
					ctx.fillStyle = '#000';
					drawText("TUT BUDET COOLSTORY",window.innerWidth / 4,window.innerHeight * 0.75);
					if(part2){
						starT2();
					}else{
						setTimeout(function(){
							Game = setInterval(update,40);
							Pause = false;
						},500);
					}
				}
			}
		}
	}
	var starT2 = function(){
		y = window.innerHeight * 0.25;
		ctx.fillStyle = '#fff';
		ctx.fillRect(window.innerWidth / 4, y - 30, 400, part2 * 30);
		ctx.fillStyle = '#000';
		for(i = 0; i < part2; i++){
			drawText(Otvety["part2"][i], window.innerWidth / 4,y);
			y+=30;
		}
		document.onkeypress = function(answer){
			for(i = 0; i < part2;){
				i++;
				if(answer.keyCode === 48 + i && Pause == true){ //1
					ctx.fillStyle = '#fff';
					ctx.fillRect(withwho.x, withwho.y - 30, 1000, 40);
					ctx.fillRect(window.innerWidth / 4,window.innerHeight * 0.75 - 30, 1000, 40);
					ctx.fillStyle = '#000';
					drawText("TUT BUDET COOLSTORY2222222",window.innerWidth / 4,window.innerHeight * 0.75);
					if(part3){
						starT3();
					}else{
						setTimeout(function(){
							Game = setInterval(update,40);
							Pause = false;
						},500);
					}
				}
			}
		}
	}
	var starT3 = function(){
		y = window.innerHeight * 0.25;
		ctx.fillStyle = '#fff';
		ctx.fillRect(window.innerWidth / 4, y - 30, 400, part3 * 30);
		ctx.fillStyle = '#000';
		for(i = 0; i < part3; i++){
			drawText(Otvety["part3"][i], window.innerWidth / 4,y);
			y+=30;
		}
		document.onkeypress = function(answer){
			for(i = 0; i < part3;){
				i++;
				if(answer.keyCode === 48 + i && Pause == true){ //1
					ctx.fillStyle = '#fff';
					ctx.fillRect(withwho.x, withwho.y - 30, 1000, 40);
					ctx.fillRect(window.innerWidth / 4,window.innerHeight * 0.75 - 30, 1000, 40);
					ctx.fillStyle = '#000';
					drawText("ok, idi hachoi!",window.innerWidth / 4,window.innerHeight * 0.75);
					setTimeout(function(){
						Game = setInterval(update,40);
						Pause = false;
					},500);
				}
			}
		}
	}
}
var xyuTa = [
	"ETO RPG BLEAD!"
];
var Prosby = [
	"1. Hej!",
	"2. Allo, eto BANYA?",
	"3. TbI nuDop EnTa",
	"1. Hej!2",
	"2. Allo, eto BANYA?2",
	"3. TbI nuDop EnTa2"
];
var Pizdezh = [
	"uDu Haxyu",
	"cheeki breeki",
	"cbe6ucb",
	"Doe6aJI",
	"SOOQA",
	"i'm very busy man",
	"fock off",
	"wtf?",
	"ayee mlya",
	"Niet, eto ego brat BALODYA",
	"A Mo}|{eT TbI nuDop?"
];
var Otvety = {
	part1:["14o te nado blya", "2idzi nachoi", "3..."],
	part2:["1ooo sooqa", "2moar", "3..."],
	part3:["123","223654","323456","423321"],
	lawfulchaotic:["1","2","3"],
	chaotic:["adddsd","aasdsd"],
	superchaoric:["1","2"],
	lawfulordered:["1","2"],
	ordered:["1","2"],
	superordered:["1","2"]
};
/*NPC LIST:
enemy (template random)
boss (template able to set up)
neutral (template)
quest (template random)
trader (template)
main (main)

TO DO:
various dialogues
deep dialogues

*/