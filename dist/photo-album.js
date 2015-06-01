$(document).ready(start);

function start () {

	$('.icon').click(function(e) {
		$('section').hide();
		$('#finder').show();
	});

	$('.folder').click(placeImage);

	$('.ukr').click(function() {
		$('.folder').css('background-image', 'url(images/background.jpg)');
		$(this).css('background', '#c4d0d2');
		$('.pics').children().remove();
		placeImage(ukraine);
		$('#album-title').html('Ukraine');
		$('.' + $(this).attr('class').substr(5)).css('background', '#c4d0d2');
	});

	$('.kiev').click(function() {
		$('.folder').css('background-image', 'url(images/background.jpg)');
		$(this).css('background', '#c4d0d2');
		$('.pics').children().remove();
		placeImage(kiev);
		$('#album-title').html('Kiev');
		$('.' + $(this).attr('class').substr(5)).css('background', '#c4d0d2');

	});

	$('.cuisine').click(function() {
		$('.folder').css('background-image', 'url(images/background.jpg)');
		$(this).css('background', '#c4d0d2');
		$('.pics').children().remove();
		placeImage(food);
		$('#album-title').html('Ukrainian cuisine');
		$('.' + $(this).attr('class').substr(5)).css('background', '#c4d0d2');

	});

	$('.people').click(function() {
		$('.folder').css('background-image', 'url(images/background.jpg)');
		$(this).css('background', '#c4d0d2');
		$('.pics').children().remove();
		placeImage(people);
		$('#album-title').html('Famous people from Ukraine');
		$('.' + $(this).attr('class').substr(5)).css('background', '#c4d0d2');

	});

	$('.visited').click(function() {
		$('.folder').css('background-image', 'url(images/background.jpg)');
		$(this).css('background', '#c4d0d2');
		$('.pics').children().remove();
		placeImage(seen);
		$('#album-title').html('Where I\'ve been');
		$('.' + $(this).attr('class').substr(5)).css('background', '#c4d0d2');

	});

	$('.plans').click(function() {
		$('.folder').css('background-image', 'url(images/background.jpg)');
		$(this).css('background', '#c4d0d2');
		$('.pics').children().remove();
		placeImage(go);
		$('#album-title').html('Where I want to go');
		$('.' + $(this).attr('class').substr(5)).css('background', '#c4d0d2');

	});

	$('.pics').click(function(e) {
		$('section').hide();
		$('#photo').show();
		var src = $(this).children().html();
		var title = $($(this).children()[1]).html();
		$('#my-photo').html(src);
		$('#photo-name').html(title);
	});

	$('#back-to-album').click(function() {
		$('section').hide();
		$('#finder').show();
	});

	var ukraine = [{path:'images/ukraine/map.gif', title:'Map of Ukraine'}, {path:'images/ukraine/images.jpeg', title:'Ukrainian Flag'},
		{path:'images/ukraine/flag.jpeg', title:'Why flag looks like it is'}, {path:'images/ukraine/karpatu.jpeg', title:'Carpathian Mountains'},
		{path:'images/ukraine/lviv.jpg', title:'Lviv city'}, {path:'images/ukraine/tunnel.jpeg', title:'Tunnel of Love'}];

	var kiev = [{path:'images/kiev/kiev.jpeg', title:'Kiev City'}, {path:'images/kiev/kiev1.jpeg', title:'Central Square'},
		{path:'images/kiev/kiev2.jpeg', title:'Motherland Monument'}, {path:'images/kiev/kiev3.jpeg', title:'Pechersk Lavra'},
		{path:'images/kiev/subway.jpeg', title:'Kiev Subway'}];

	var food = [{path:'images/food/borshch.jpg', title:'Borshch'}, {path:'images/food/deruny.jpg', title:'Deruny'},
		{path:'images/food/holodets.jpeg', title:'Holodets'}, {path:'images/food/paska-3.jpg', title:'Paska Bread'},
		{path:'images/food/varenyky-2.jpg', title:'Varenyky'}];

	var people = [{path:'images/people/klitchko.jpeg', title:'Klitschko Brothers'}, {path:'images/people/kurylenko.jpg', title:'Olga Kurylenko'},
		{path:'images/people/mila.jpeg', title:'Mila Yovovich'}, {path:'images/people/kunis.jpg', title:'Mila Kunis'}];

	var seen = [{path:'images/seen/dubai.jpg', title:'Dubai, UAE'}, {path:'images/seen/israel.jpg', title:'Israel Diving'},
		{path:'images/seen/london.jpg', title:'London, Great Britain'}, {path:'images/seen/thai.jpg', title:'Thailand'},
		{path:'images/seen/vegas.jpg', title:'Las Vegas, USA'}, {path:'images/seen/sweden.jpg', title:'Stockholm, Sweden'}];

	var go = [{path:'images/go/australia.jpg', title:'Australia'}, {path:'images/go/india.jpg', title:'India'},
		{path:'images/go/maldives.jpeg', title:'Maldives'}, {path:'images/go/nepal.jpg', title:'Nepal'},
		{path:'images/go/rome.jpg', title:'Italy'}, {path:'images/go/download.jpeg', title:'Peru'}];
	
	function placeImage (pics) {
		for(var i = 0; i<pics.length; i++) {
			if(!$('#photo'+i).children().length>0){
				$('#photo'+i).append('<div id="icon'+ i+ '"></div>');
				$('#icon'+i).html('<img src="' + pics[i].path + '">');
				$('#photo'+i).append('<div id="title'+i+'"></div>');
				$('#title'+i).html(pics[i].title);
			}
		}
	}
}