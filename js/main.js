var navHeight;

$(function(){
	navHeight = $('header nav').outerHeight();
	headerHeight = $('header').outerHeight();
});

function contextmenu(opts, e){
	var menu = new gui.Menu();
	for (var i = 0; i <= opts.length - 1; i++){ menu.append(new gui.MenuItem(opts[i])); }
	menu.popup(e.pageX, e.pageY + navHeight);
}

function externalLink(e, el){
	e.preventDefault();
	gui.Shell.openExternal($(el).attr('href'));
}

var ui = {
	view(panel){
		ui.hideAll();
		ui.show($('#'+panel));
		ui.current = panel;
	},
	switchViews(p1, p2){
		if(p1 == ui.current) ui.view(p2);
		else if(p2 == ui.current) ui.view(p1);
		else ui.view(p1);
	},
	toggleView(panel){
		if(!$('#'+panel).hasClass('visible') || $('#'+panel).hasClass('hidden')){
			ui.show($('#'+panel));
		} else {
			ui.hide($('#'+panel));
		}
	},
	hide($el){
		$el.addClass('hidden');
		$el.removeClass('visible');
	},
	hideAll(){
		ui.hide($('main > section'));
		ui.hide($('main > iframe'));
	},
	show($el){
		$el.addClass('visible');
		$el.removeClass('hidden');
	},
	current: 'dragdrop'
}

function responsToggle(){
	var $mf = $('#mainframe');
	if($mf.hasClass('respons-1024')){
		$mf.removeClass('respons-1024');
		$mf.addClass('respons-800');
	} else if($mf.hasClass('respons-800')){
		$mf.removeClass('respons-800');
		$mf.addClass('respons-600');
	} else if($mf.hasClass('respons-600')){
		$mf.removeClass('respons-600');
		$mf.addClass('respons-400');
	} else if($mf.hasClass('respons-400')){
		$mf.removeClass('respons-400');
		$mf.addClass('respons-200');
	} else if($mf.hasClass('respons-200')){
		$mf.removeClass('respons-200');
	} else {
		$mf.addClass('respons-1024');
	}
}