$(function(){
	
	var DATASET = {
			data:[],
			init:function(){
					$.post("http://servicedatosabiertoscolombia.cloudapp.net/v1/Fondo_Nacional_Ahorro/bdfnaviviendafinal?$format=json",
					function(data){ 
						DATASET.data = data
					},"jsonp");
				
			},
			events:function(){
					$( document ).on( "pageinit", "#page2", function( event ) {
 						DATASET.parse();
					});
	
			},
			parse:function(){
				
					proyectos = DATASET.data.d;
					$.each(proyectos,function(key,proyecto){
							var nombreproyecto = proyecto.nombreproyecto;
							var direccionproyecto = proyecto.direccionproyecto;
							var imagen1 = proyecto.imagen1;
							$("#dataContainer").append("<li><a>"+nombreproyecto+" - "+direccionproyecto+" - <img src="+imagen1+" </></a> </li>");
						});
					$("#dataContainer").listview("refresh");		
				},
				
			
				
	
		 
		}
		
		
		DATASET.init();
		DATASET.events();
		
	});
				