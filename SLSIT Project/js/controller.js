app.controller('headerCtrl',function($scope){
	$(window).on("scroll",function(){
  		if($(window).scrollTop()> 25){
  			$("#navigation").addClass('navbar-fixed-top smalllogo');
  		}
  		if($(window).scrollTop()< 25){
  			$("#navigation").removeClass('navbar-fixed-top smalllogo');		   
  		}
  	});
});

app.controller('aboutCtrl',function($scope){
	$('.carousel').carousel({
      interval: 1000 //changes the speed
    })	  
});

app.controller('SWCtrl',function($scope){
	$('#SWTab a[href="#first"]').tab('show');
    $('#SWTab a').click(function (e) {
  		e.preventDefault()
  		$(this).tab('show');
	});
	$('#accordion a').click(function (e) {
  		e.preventDefault();
  	});
});