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