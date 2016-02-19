$(function(){
	var droppedfile;
	var $droparea = $('#dragdrop');
	var $dropInput = $('#dragdropFileInput > input');

	$droparea.on('drag dragstart dragend dragover dragenter dragleave drop click', function(e){
		e.preventDefault();
		e.stopPropagation();
	}).on('dragover dragenter', function(){
		$droparea.addClass('hover');
	}).on('dragleave dragend drop', function(){
		$droparea.removeClass('hover');
	}).on('click', function(e){
		$dropInput.click();
	}).on('drop', function(e){
		droppedfile = e.originalEvent.dataTransfer.files;
		$('#mainframe').attr('src', droppedfile[0].path);
		$droparea.addClass('hidden');
		$('#mainframe').addClass('visible');
	});

	$dropInput.change(function(){
		droppedfile = $dropInput[0].files;
		$('#mainframe').attr('src', droppedfile[0].path);
		$droparea.addClass('hidden');
		$('#mainframe').addClass('visible');
	});
});