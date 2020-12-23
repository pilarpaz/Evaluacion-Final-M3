/* ---- ---- Menú ---- ---- */

$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1; 
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

/* ---- ---- Editar Cliente ---- ---- */

$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
      runcliente : {
          required: true,
          max: 999999999,
          min: 9999999,
          digits: true
        },
        nombres: {
          required: true,
          minlength: 3,
          maxlength: 30
        },
        apellidos: {
          required: true,
          minlength: 3,
          maxlength: 30
        },
        telefono: {
        required: true,
        max: 999999999999999,
        min: 99999999,
        digits: true
        },
        afp: {
        required: true,
        maxlength: 20
        },
        sistemasalud: {
        required: true,
        maxlength: 50
        },
        direccion: {
        required: true,
        maxlength: 50
        },
        comuna: {
        required: true,
        maxlength: 30
        },
        edad: {
        required: true,  
        max: 99,
        min: 1,
        digits: true
        }
      },
      messages : {
      runcliente: {
          required: "Campo obligatorio",
          max: "Ingrese maximo 9 digitos",
          min: "Ingrese minimo 7 digitos"
        },
        nombres: {
          required: "Campo obligatorio",
          minlength: "Ingrese mas de 3 caracteres",
          maxlength: "Ingrese menos de 30 caracteres"
        },
        apellidos: {
          required: "Campo obligatorio",
          minlength: "Ingrese mas de 3 caracteres",
          maxlength: "Ingrese menos de 30 caracteres"
        },
        telefono: {
          required: "Campo obligatorio",
          max: "Ingrese maximo 15 digitos",
          min: "Ingrese minimo 9 digitos"
        },
        afp: {
          required: "Campo obligatorio",
          maxlength: "Ingrese maximo 20 caracteres"
        },
        sistemasalud: {
          required: "Campo obligatorio",
          maxlength: "Ingrese mas de 50 cracteres"
        },
        direccion: {
          required: "Campo obligatorio",
          maxlength: "Ingrese mas de 50 cracteres"
        },
        comuna: {
          required: "Campo obligatorio",
          maxlength: "Ingrese mas de 30 cracteres"
        },
        edad: {
          required: "Campo obligatorio",
          max: "Ingrese maximo 120 digitos",
          min: "Ingrese minimo 1 digitos"
        }
      }
    });
});

/* ---- ---- Administrar Asistentes ---- ---- */

$(document).ready(function() {
    $("#basic-form1").validate({
      rules: {
      idasistente: {
          required: true,
          max: 10000,
          min: 1,
          digits: true
        },
        nombrecompleto: {
          required: true,
          minlength: 1,
          maxlength: 100
        },
        edad: {
          required: true,
          max: 150,
          min: 1,
          digits: true
        },
        correoelectronico: {
          required: true,
          email: true
        },
        telefono: {
          required: true,
          maxlength: 11
        },
        fechahora: {
          required: true,
          maxlength: 20
        }
      },
      messages : {
        idasistente: {
          required: "Campo obligatorio",
          max: "Ingrese un digito menor a 10000",
          min: "Ingrese un digito mayor a 0"
        },
        nombrecompleto: {
          required: "Campo obligatorio",
          minlength: "Ingrese mas de 1 caracteres",
          maxlength: "Ingrese menos de 150 caracteres"
        },
        edad: {
          required: "Campo obligatorio",
          min: "Ingrese un digito mayor a 1",
          max: "Ingrese un digito menor a 150"
        },
        correoelectronico: {
          required: "Campo obligatorio",
          email: "Correo electronico incorrecto",
        },
        telefono: {
          required: "Campo obligatorio",
          max: "Ingrese maximo 11 digitos"
        },
        fechahora: {
          required: "Campo obligatorio",
          maxlength: "Ingrese menos de 20 cracteres"
        }
      }
    });
});

/* ---- ---- Listado Accidentes ---- ---- */
  
$(document).ready(function() {
    $("#basic-form2").validate({
      rules: {
      idaccidente : {
        required: true,
          max: 10000,
          min: 1,
          digits: true
        },
        fechaaccidente: {
          required: true,
          maxlength: 20
        },
        lugaraccidente: {
          required: true,
          minlength: 0,
          maxlength: 150
        },
        origenaccidente: {
          required: true,
          max: 100,
          digits: true
        },
        cliente: {
          required: true,
          maxlength: 50
        },
        consecuencias: {
          required: true,
          maxlength: 100
        },
      },
      messages : {
      idaccidente: {
          required: "Campo obligatorio",
          max: "Ingrese un digito menor a 10000",
          min: "Ingrese un digito mayor a 0"
        },
        fechaaccidente: {
          required: "Campo obligatorio",
          maxlength: "Ingrese mas de 30 caracteres"
        },
        lugaraccidente: {
          required: "Campo obligatorio",
          minlength: "Ingrese mas de 3 caracteres",
          maxlength: "Ingrese menos de 30 caracteres"
        },
        origenaccidente: {
          required: "Campo obligatorio",
          maxlength: "Ingrese maximo 100 caracteres",
        },
        cliente: {
          required: "Campo obligatorio",
          maxlength: "Ingrese maximo 20 caracteres"
        },
        consecuencias: {
          required: "Campo obligatorio",
          maxlength: "Ingrese mas de 100 cracteres"
        },
      }
    });
});
  
/* ---- ---- Login ---- ---- */

$(document).ready(function() {
  $("#login").validate({
      rules: {
          contraseña:{
              required: true,
              digits: true,
              maxlength: 20,
              minlength:4
          },
          }
       }


  );
});

function VerificaRut(rut) {
      
    if (rut.toString().trim() != '' && rut.toString().indexOf('-') > 0) {
        var caracteres = new Array();
        var serie = new Array(2, 3, 4, 5, 6, 7);
        var dig = rut.toString().substr(rut.toString().length - 1, 1);
        rut = rut.toString().substr(0, rut.toString().length - 2);
  
        for (var i = 0; i < rut.length; i++) {
            caracteres[i] = parseInt(rut.charAt((rut.length - (i + 1))));
        }
  
        var sumatoria = 0;
        var k = 0;
        var resto = 0;
  
        for (var j = 0; j < caracteres.length; j++) {
            if (k == 6) {
                k = 0;
            }
            sumatoria += parseInt(caracteres[j]) * parseInt(serie[k]);
            k++;
        }
  
        resto = sumatoria % 11;
        dv = 11 - resto;
  
        if (dv == 10) {
            dv = "K";
        }
        else if (dv == 11) {
            dv = 0;
        }
  
        if (dv.toString().trim().toUpperCase() == dig.toString().trim().toUpperCase())
            return true;
        else
            return false;
    }
    else {
        return false;
    }
}

/* ---- ---- Lista Plegable ---- ---- */

jQuery.fn.animateAuto = function(prop, speed, callback){
   var elem, height, width;
   return this.each(function(i, el){
      el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
      height = elem.css("height"),
      width = elem.css("width"),
      elem.remove();
      if(prop === "height")
         el.animate({"height":height}, speed, callback);
      else if(prop === "width")
         el.animate({"width":width}, speed, callback);  
      else if(prop === "both")
         el.animate({"width":width,"height":height}, speed, callback);
   });  
}
$(window).ready(function(){
   $('.botonplegable').click(function(){
      if($(this).next().hasClass('desplegado')){
         $(this).next().removeClass('desplegado').animate({height:0},500);
      }else{
         $(this).next().addClass('desplegado').animateAuto("height",500);
      }
   })
})

/* ---- ---- DataTables ---- ---- */

/*Listado Asistentes*/
$(document).ready(function() {
   $('#listadoasistentes').DataTable();
} );

/*Listado Visitas a Terreno*/
$(document).ready(function() {
    $('#listadovisitas').DataTable();
} );

/* ---- ---- Chart.js ---- ---- */

/*Gráfico de barras*/
var ctx = document.getElementById('barras').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Santiago', 'Valparaíso', 'Renca', 'Independencia', 'Estación Central', 'Recoleta'],
        datasets: [{
            label: 'Cantidad de Clientes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

/*Gráfico de Líneas*/
var ctx = document.getElementById('lineas').getContext('2d');
var dataFirst = {
    label: "Cantidad de Accidentes",
    data: [0, 59, 75, 20, 20, 55, 40, 20, 50, 35, 48, 10],
    fill: false,
    borderColor: ['rgba(255, 159, 64, 1)'],
    borderWidth: 2
};
     
var dataSecond = {
    label: "Cantidad de Visitas",
    data: [20, 15, 60, 60, 65, 30, 70, 45, 22, 70, 20, 15],
    fill: false,
    borderColor: ['rgba(75, 192, 192, 1)'],
    borderWidth: 2
};
     
var speedData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    datasets: [dataFirst, dataSecond]
}; 
   
var lineChart = new Chart(ctx, {
    type: 'line',
    data: speedData
});

/*Gráfico de Torta*/
var ctx = document.getElementById('torta').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Cumplidos', 'No Cumplidos', 'Cumplidos con Observación'],
        datasets: [{
            label: '# of Votes',
            data: [19, 8, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
