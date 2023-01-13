function validate (inputs) {
    const errors = {};

// name: '',
// image: '',
//height: '',
//weight: '',
//life_span: '',
//temperament: []
    
    if (!inputs.name) errors.name = 'Este campo no debe estar vacío';
    if (!inputs.height) errors.height = 'Este campo no debe estar vacío';
    if (!inputs.weight) errors.weight = 'Este campo no debe estar vacío';

    if (inputs.name.length < 3 && inputs.name.length > 15) errors.name = 'Debe tener una longitud entre 3 y 15 carácteres';

    
}

export default validate