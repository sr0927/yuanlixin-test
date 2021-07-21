
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
});

document.addEventListener("DOMContentLoaded",function(){
	var arrows = document.getElementsByClassName('arrow');
	var next = document.getElementsByClassName('pnext');
	var prev = document.getElementsByClassName('pprev');
    for (i=0;i<arrows.length;i++){
        arrows[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }
	for (i=0;i<next.length;i++){
		next[i].addEventListener('click',function(e){
			e.preventDefault();
			fullpage_api.moveSlideRight();
			$('.pnext').addClass('hidearrow');
			$('.pprev').removeClass('hidearrow');
			$('.pprev').addClass('showarrow');
		});
	}
	
	for (i=0;i<prev.length;i++){
		prev[i].addEventListener('click',function(e){
			e.preventDefault();
			fullpage_api.moveSlideLeft();
			$('.pprev').addClass('hidearrow');
			$('.pnext').removeClass('hidearrow');
			$('.pnext').addClass('showarrow');
		});
	}

});