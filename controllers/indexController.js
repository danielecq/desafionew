'use strict';
var datos = [];
app.controller('indexController', function($scope, $http){
	$http.get("https://demo.medinet.cl/api/dashboard/productividad").then(function (response) {    
    $scope.datosComp = response.data;
    var length = $scope.datosComp.length;
    $("#cbxSucursal").html('<option value="0">Sucursal...</option>');
    for (var i = 0; i < length; i++) {
    	//console.log($scope.datosComp[i]);
    	datos.push({
    		anio: $scope.datosComp[i].anio,
    		cantidad: $scope.datosComp[i].cantidad,
    		id: $scope.datosComp[i].id,
    		mes: $scope.datosComp[i].mes,
    		prevision: $scope.datosComp[i].prevision,
    		sucursal: $scope.datosComp[i].sucursal,
    		tipo: $scope.datosComp[i].tipo,
    		total: $scope.datosComp[i].total    		
    	});
    	$("#cbxSucursal").append('<option value='+$scope.datosComp[i].sucursal+'>'+$scope.datosComp[i].sucursal+'</option>');
    }
  });
});
console.log(datos);

function buscarSucursal(sucursal){
	var year = $('#cbxPeriodo').val();
	var mes = $('#cbxMes').val();
	var fonasa = 0;
	var isapre = 0;
	var total = 0;
	var examenes = 0;
	var totalExamenes = 0;
	var cirujias = 0;
	var totalCirujias = 0;
	var Derivaciones = 0;
	var totalDerivaciones = 0;
	var todo = 0;
	for (var i = 0; i < datos.length; i++) {	
		if(sucursal == datos[i].sucursal){
			if(parseInt(datos[i].anio) == parseInt(year)){
				if(parseInt(datos[i].mes) == parseInt(mes)){
					//Citas Ambulatorias
					if(datos[i].prevision == 'Fonasa'){
						fonasa++;
						total = total + parseInt(datos[i].total);
					}else if(datos[i].prevision == 'Isapre'){
						isapre++;
						total = total + parseInt(datos[i].total);
					}
					//Exámenes
					if(datos[i].tipo == 'Exámenes'){
						examenes++;
						totalExamenes = totalExamenes + parseInt(datos[i].total);
					}
					if(datos[i].tipo == 'Cirugías'){
						cirujias++;
						totalCirujias = totalCirujias + parseInt(datos[i].total);
					}
					if(datos[i].tipo == 'Derivaciones'){
						Derivaciones++;
						totalDerivaciones = totalDerivaciones + parseInt(datos[i].total);
					}	
				}
			}		
					
		}
	}
	todo = total + totalExamenes + totalCirujias +totalDerivaciones;
	$('#cantFonasa').html(fonasa);
	$('#cantIsapre').html(isapre);
	$('#cantTotal').html('$'+total);
	$('#cantExamenes').html(examenes);
	$('#cantTotalExam').html('$'+totalExamenes);
	$('#cantCirujias').html(cirujias);
	$('#cantTotalCirujias').html('$'+totalCirujias);
	$('#cantDerivaciones').html(Derivaciones);
	$('#cantTotalDerivaciones').html('$'+totalDerivaciones);
	$('#cantTotalTotal').html('$'+todo);
}

function buscarYear(year){
	var Sucursal = $('#cbxSucursal').val();
	var mes = $('#cbxMes').val();
	var fonasa = 0;
	var isapre = 0;
	var total = 0;
	var examenes = 0;
	var totalExamenes = 0;
	var cirujias = 0;
	var totalCirujias = 0;
	var Derivaciones = 0;
	var totalDerivaciones = 0;
	var todo = 0;
	for (var i = 0; i < datos.length; i++) {	
		if(parseInt(year) == parseInt(datos[i].anio)){
			if(datos[i].sucursal == Sucursal){
				if(parseInt(datos[i].mes) == parseInt(mes)){
					//Citas Ambulatorias
					if(datos[i].prevision == 'Fonasa'){
						fonasa++;
						total = total + parseInt(datos[i].total);
					}else if(datos[i].prevision == 'Isapre'){
						isapre++;
						total = total + parseInt(datos[i].total);
					}
					//Exámenes
					if(datos[i].tipo == 'Exámenes'){
						examenes++;
						totalExamenes = totalExamenes + parseInt(datos[i].total);
					}
					if(datos[i].tipo == 'Cirugías'){
						cirujias++;
						totalCirujias = totalCirujias + parseInt(datos[i].total);
					}
					if(datos[i].tipo == 'Derivaciones'){
						Derivaciones++;
						totalDerivaciones = totalDerivaciones + parseInt(datos[i].total);
					}	
				}
			}		
					
		}
	}
	todo = total + totalExamenes + totalCirujias +totalDerivaciones;
	$('#cantFonasa').html(fonasa);
	$('#cantIsapre').html(isapre);
	$('#cantTotal').html('$'+total);
	$('#cantExamenes').html(examenes);
	$('#cantTotalExam').html('$'+totalExamenes);
	$('#cantCirujias').html(cirujias);
	$('#cantTotalCirujias').html('$'+totalCirujias);
	$('#cantDerivaciones').html(Derivaciones);
	$('#cantTotalDerivaciones').html('$'+totalDerivaciones);
	$('#cantTotalTotal').html('$'+todo);
}

function buscarMes(mes){
	var Sucursal = $('#cbxSucursal').val();
	var year = $('#cbxPeriodo').val();
	var fonasa = 0;
	var isapre = 0;
	var total = 0;
	var examenes = 0;
	var totalExamenes = 0;
	var cirujias = 0;
	var totalCirujias = 0;
	var Derivaciones = 0;
	var totalDerivaciones = 0;
	var todo = 0;
	for (var i = 0; i < datos.length; i++) {	
		if(parseInt(mes) == parseInt(datos[i].mes)){
			if(datos[i].sucursal == Sucursal){
				if(parseInt(datos[i].anio) == parseInt(year)){
					//Citas Ambulatorias
					if(datos[i].prevision == 'Fonasa'){
						fonasa++;
						total = total + parseInt(datos[i].total);
					}else if(datos[i].prevision == 'Isapre'){
						isapre++;
						total = total + parseInt(datos[i].total);
					}
					//Exámenes
					if(datos[i].tipo == 'Exámenes'){
						examenes++;
						totalExamenes = totalExamenes + parseInt(datos[i].total);
					}
					if(datos[i].tipo == 'Cirugías'){
						cirujias++;
						totalCirujias = totalCirujias + parseInt(datos[i].total);
					}
					if(datos[i].tipo == 'Derivaciones'){
						Derivaciones++;
						totalDerivaciones = totalDerivaciones + parseInt(datos[i].total);
					}	
				}
			}		
					
		}
	}
	todo = total + totalExamenes + totalCirujias +totalDerivaciones;
	$('#cantFonasa').html(fonasa);
	$('#cantIsapre').html(isapre);
	$('#cantTotal').html('$'+total);
	$('#cantExamenes').html(examenes);
	$('#cantTotalExam').html('$'+totalExamenes);
	$('#cantCirujias').html(cirujias);
	$('#cantTotalCirujias').html('$'+totalCirujias);
	$('#cantDerivaciones').html(Derivaciones);
	$('#cantTotalDerivaciones').html('$'+totalDerivaciones);
	$('#cantTotalTotal').html('$'+todo);
}
