
let typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	smartBackspace: true,
	//loop: true,
	//loopCount: Infinity,
});
$(document).ready(function(){
	$(".arrow-down").hide();
	$("#data").hide();
	setTimeout(function () {
		$(".arrow-down").show();
	}, 12000);
});
