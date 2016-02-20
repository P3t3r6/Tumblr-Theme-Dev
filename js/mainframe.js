var mainframeCurrentFilepath;

function mainframeInit(){
	if(loadRecent()){
		ui.view('mainframe');
		mainframeWatch();
	}
}

function loadRecent(){
	var success = false;
	try {
		f = fs.readFileSync('config/recent', 'utf8');
		success = true;
	} catch(e) {
		success = false;
		return false;
	}
	if(success){
		f = f.trim();
		if(f != ''){
			mainframeLocation(f);
			success = true;
		} else {
			success = false;
			return false;
		}
	}
	return success;
}

function mainframeLocation(f){
	mainframeCurrentFilepath = f;
	$('#mainframe')[0].contentWindow.location = f;
}

function mainframeWatch(p){
	var mfcw = $('#mainframe')[0].contentWindow;
	p = (p == undefined ? mainframeCurrentFilepath : p);
	p = p + '\\..';
	fs.watch(p, function(){
		if(mfcw.location)
			try {
				mfcw.location.reload();
			} catch(e) {
				// console.log(e);
			}
	});
}

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
		contextmenu([{label: 'New'},{type: 'separator'},{label: 'Cut'},{label: 'Copy'},{label: 'Paste'},{type: 'separator'},{label: 'Properties'}], e);
	});
}

function get_mainframe(){
	// var interval = setInterval(function(){
	// 	var contframe = $('#mainframe')[0];
	// 	contframe = contframe.contentWindow.document;
	// 	if(contframe.readyState == "complete"){
	// 		clearInterval(interval);
	// 		define_mainframe();
	// 		mainframe.content.isAvailable = true;
	// 		ui.view('mainframe');
	// 	}
	// }, 1000);
}