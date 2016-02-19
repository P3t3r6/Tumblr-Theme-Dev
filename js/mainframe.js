function define_mainframe(){
	mainframe = {
		frame: $('#mainframe')[0],
		window: $('#mainframe')[0].contentWindow,
		document: $('#mainframe')[0].contentWindow.document,
		content: {
			isAvailable: false,
			get: function(){}
		},
		body: $('body', mainframe.document)
	}
	$(mainframe.window).contextmenu(function(e){
		console.log(e);
		contextmenu([{label: 'New'},{type: 'separator'},{label: 'Cut'},{label: 'Copy'},{label: 'Paste'},{type: 'separator'},{label: 'Properties'}], e);
	});
}

function get_mainframe(){
	var interval = setInterval(function(){
		var contframe = $('#mainframe')[0];
		contframe = contframe.contentWindow.document;
		if(contframe.readyState == "complete"){
			clearInterval(interval);
			define_mainframe();
			mainframe.content.isAvailable = true;
		}
	}, 1000);
}