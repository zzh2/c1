(function($){
	$.fn.movebg=function(options){
		var defaults={
		width:120,
		extra:50,
		speed:300,
		rebound_speed:300
		};
	var defaultser=$.extend(defaults,options);
	return this.each(function(){
		var _this=$(this);
		var _item=_this.children("ul").children("li").children("a");
		var origin=_this.children("ul").children("li.cur").index();
		var _mover=_this.find(".move-bg");
		var hidden;
		if (origin==-1){origin=0;hidden="1"} else{_mover.show()};
		var cur=prev=origin;
		var extra=defaultser.extra;
		_mover.css({left:""+defaultser.width*origin+"px"});
		
		
		_item.each(function(index,it){
			$(it).mouseover(function(){
				cur=index;
				move();
				prev=cur;
			});
		});
		_this.mouseleave(function(){
			cur=origin;
			move();
			if(hidden==1){_mover.stop().fadeOut();}
		});
		
		
		function move(){
			_mover.clearQueue();
			if(cur<prev){extra=-Math.abs(defaultser.extra);} 
			else{extra=Math.abs(defaultser.extra)};
			_mover.queue(
				function(){
					$(this).show().stop(true,true).animate({left:""+Number(cur*defaultser.width+extra)+""},defaultser.speed),
					function(){$(this).dequeue()}
				}
			);
			_mover.queue(
				function(){
					$(this).stop(true,true).animate({left:""+cur*defaultser.width+""},defaultser.rebound_speed),
					function(){$(this).dequeue()}
				}
			);
		};
	})
	}
})(jQuery);