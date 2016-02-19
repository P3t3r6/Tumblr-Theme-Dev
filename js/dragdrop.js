var droppedfile;

$(function(){
	var $droparea = $('#dragdrop');
	$droparea.on('drag dragstart dragend dragover dragenter dragleave drop', function(e){
		e.preventDefault();
		e.stopPropagation();
	}).on('dragover dragenter', function(){
		$droparea.addClass('hover');
	}).on('dragleave dragend drop', function(){
		$droparea.removeClass('hover');
	}).on('drop', function(e){
		droppedfile = e.originalEvent.dataTransfer.files;
		$('#mainframe').attr('src', droppedfile[0].path);
		$droparea.addClass('hidden');
		$('#mainframe').addClass('visible');
	});
});