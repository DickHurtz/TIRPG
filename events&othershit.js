function Dialogue_shitty_quest(withwho, part1, part2, part3){
	var y = window.innerHeight * 0.25;
	if(part1){
		for(var i = 0; i < part1; i++){
			drawText(Prosby[i], window.innerWidth / 4,y);
			y+=30;
			
			document.onkeypress = function(answer){
				if(answer.keyCode === 48 + i){ //1
					ctx.fillStyle = '#fff';
					ctx.fillRect(withwho.x, withwho.y - 30, 400, 40);
					ctx.fillStyle = '#000';
					drawText("text", withwho.x, withwho.y);
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
	"3. TbI nuDop EnTa"
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
	lawfulchaotic:["1","2"],
	chaotic:["1","2"],
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