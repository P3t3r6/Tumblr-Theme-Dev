/**
 * TO FIX
 * Regex not matching/separating tags that are together
 * ie. "block:audio}{/block:audio"
 */

// var rexp = /\{([^)]+)\}/gi;
// var rexp = /^\s*<li>[(][a-z][)]/gm;
// var rexp = /(.(?!\{+).(?!\}+).)*/g;
var rexp_alltags = /{(.*)}/g;
var rexp_blocks = /{(.*)block:(.*)}/g;
var rexp_tags = /{(?!(.*)block:)(.*)}/g;
var parsed = '';

function parserInit(){
	var dom = null;
	try{
		dom = $('#mainframe')[0].contentWindow.document;
		head = $('head', dom).html();
		body = $('body', dom).html();
		domhtml = $('html', dom).html();
		parsed = parseHead(domhtml);
		if(parsed.length > 26){ parseToMainframe(parsed); } // TEMP SOLUTION
	}catch(e){/*console.log(e);*/}
}

function parseHead(head){
	while((match = rexp_alltags.exec(head)) != null){
		head = parseReplace(head, match.index, match[0], 'Hello! I\'m a tag! :D');
		console.log('From',match.index,'to',(match.index+match[0].length),match[0]);
	}
	return head;
}

function parseReplace(inp, i, l, s){
	return inp.substring(0, i) + s + inp.substring(i + l.length);
}

function parseToMainframe(c){
	$('#mainframe')[0].contentWindow.document.write(c);
}
// look for <script> blocks and ignore them
