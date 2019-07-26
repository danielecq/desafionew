'use strict';
app.factory("HomeFactory", function($http){
	console.log($http);
	var url = "https://demo.medinet.cl/api/dashboard/productividad";
	var HomeFactory = {
		getDatos: function(){
			return $http.get(url).success(function(data){
				return data;
			})
			.error(function(err){
				console.log(err);
			})
		}
	}
});
