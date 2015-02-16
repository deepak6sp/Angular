app.controller('headerCtrl',function($scope){
	$(window).on("scroll",function(){
  		if($(window).scrollTop()> 25){
  			$("#navigation").addClass('navbar-fixed-top biglogo');
  		}
  		if($(window).scrollTop()< 25){
  			$("#navigation").removeClass('navbar-fixed-top biglogo');		   
  		}
  	});
});

app.controller('aboutCtrl',function($scope){
	$('.carousel').carousel({
      interval: 1000 //changes the speed
    })	  
});

app.controller('employerCtrl',function($scope){
  var list=[];
  for (var i=1;i<=10;i++){
    list.push(i);
  }
  $scope.list=list;
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