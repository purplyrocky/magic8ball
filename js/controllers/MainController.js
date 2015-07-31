app.controller('MainController', ['$scope', function($scope){

	$scope.tempLink = '';

	$scope.answers = [
	{answer: 'http://planetoftheweb.com/i/8ball/19.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/18.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/17.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/16.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/15.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/14.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/13.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/12.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/11.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/10.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/9.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/8.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/7.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/6.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/5.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/4.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/3.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/2.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/1.png'},
	{answer: 'http://planetoftheweb.com/i/8ball/0.png'}
	];

	$scope.ask = function(){
		var num = Math.floor(Math.random()*$scope.answers.length);
		$scope.tempLink = 'http://planetoftheweb.com/i/8ball/'+num+'.png';
	};

}]);