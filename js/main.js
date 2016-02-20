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
		ui.hide($('main > section'));
		ui.hide($('main > iframe'));
		ui.show($('#'+panel));
	},
	hide($el){
		$el.addClass('hidden');
		$el.removeClass('visible');
	},
	show($el){
		$el.addClass('visible');
		$el.removeClass('hidden');
	}
}