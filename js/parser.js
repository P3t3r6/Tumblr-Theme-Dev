function parserInit(){
	var dom = null;
	try{
		dom = $('#mainframe')[0].contentWindow.document;
		head = $('head', dom).html();
		body = $('body', dom).html();
		parseHead(head);
	}catch(e){/*console.log(e);*/}
}

function parseHead(head){

}
// look for <script> blocks and ignore them