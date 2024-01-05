$(function(){
     var zindex = 1;

	 $('img').each(function(){
			 var rot = Math.round(Math.random()*30)-15+'deg';
			 var left = Math.round(Math.random()*1000)+'px';
			 var top = Math.round(Math.random()*500)+'px';
			 $(this).css('transform' , 'rotate('+rot+')');
			 $(this).css('top' , top);
			 $(this).css('left' , left);
			 $(this).mouseup(function(){
				 zindex++;
				 $(this).css('z-index' , zindex);
			 });
	});
	$('img').dblclick(function(){
			$(this).css('transform' , 'rotate(0)');
	});
	$("img").draggable({
		start: function(event, ui) {
			zindex++;
			var cssObj = { 'z-index' : zindex };
			$(this).css(cssObj);
		}
 });				   
});