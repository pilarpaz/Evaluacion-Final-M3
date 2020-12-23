/* ---- ---- Formularios ---- ---- */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	monto: /^\d[0-9\.]{0,9}$/, // 9 numeros + punto
	mes: /^[a-zA-ZÀ-ÿ\s]{1,10}$/, // Letras maximo 10 caracteres
	año: /^\d{1,4}$/, // 4 numeros maximo
	rut: /^\d[0-9\-]{7,10}$/ // 7 a 10 numeros + guion.
}

const campos = {
	monto: false, // monto
	mes: false, // mes
	año: false, // año
	rut: false // rut
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "monto":
			validarCampo(expresiones.monto, e.target, 'monto'); // monto
		break;
		case "mes":
			validarCampo(expresiones.mes, e.target, 'mes'); // mes
		break;
		case "año":
			validarCampo(expresiones.año, e.target, 'año'); // año
		break;
		case "rut":
			validarCampo(expresiones.rut, e.target, 'rut'); // rut
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.monto && campos.mes && campos.año && campos.rut && terminos.checked ){ //(campos.monto && campos.mes && campos.año && campos.rut && terminos.checked )
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
}); 

