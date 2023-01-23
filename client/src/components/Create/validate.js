function validate ({name, image, height_min, height_max, weight_min, weight_max, life_span}) {
    const errors = {};

    if (!name) errors.name = 'Required name';
    else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(name)) errors.name = "Invalid name";
    else if (/^\s/.test(name)) errors.name = 'The name cannot start with a blank space';
    else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,15}$/.test(name)) errors.name = 'Length between 3 and 15 characters';

    if (!weight_min) errors.weight_min = 'Required minimum weight';
    else if (parseInt(weight_min) <= 0) errors.weight_min = 'Minimum weight cannot be 0 or less';
    else if (!/^[0-9]*$/.test(weight_min)) errors.weight_min = 'It must be a number';
    else if (!/^[0-9]{1,3}$/.test(weight_min)) errors.weight_min = 'Length between 1 and 3 digits';
    else if (parseInt(weight_min) >= parseInt(weight_max)) errors.weight_min = 'Min weight cannot be greater than max weight';

    if (!weight_max) errors.weight_max = 'Required maximum weight';
    else if (parseInt(weight_max) <= 0) errors.weight_max = 'Maximum weight cannot be 0 or less';
    else if (!/^[0-9]*$/.test(weight_max)) errors.weight_max = 'It must be a number';
    else if (!/^[0-9]{1,3}$/.test(weight_max)) errors.weight_max = 'Length between 1 and 3 digits'
    else if (parseInt(weight_max) <= parseInt(weight_min)) errors.weight_max = 'Max weight cannot be less than min weight';

    if (!height_min) errors.height_min = 'Required minimum height';
    else if (parseInt(height_min) <= 0) errors.height_min = 'Minimum height cannot be 0 or less';
    else if (!/^[0-9]*$/.test(height_min)) errors.height_min = 'It must be a number';
    else if (!/^[0-9]{1,2}$/.test(height_min)) errors.height_min = 'Length between 1 and 2 digits';
    else if (parseInt(height_min) >= parseInt(height_max)) errors.height_min = 'Min height cannot be greater than max height';

    if (!height_max) errors.height_max = 'Required maximum height';
    else if (parseInt(height_max) <= 0) errors.height_max = 'Maximum height cannot be 0 or less';
    else if (!/^[0-9]*$/.test(height_max)) errors.height_max = 'It must be a number';
    else if (!/^[0-9]{1,2}$/.test(height_max)) errors.height_max = 'Length between 1 and 2 digits';
    else if (parseInt(height_max) <= parseInt(height_min)) errors.height_max = 'Max height cannot be less than min height';

    if (!life_span) errors.life_span = 'Required life span';
    else if (parseInt(life_span) <= 0) errors.life_span = 'Life expectancy cannot be 0 or less';
    else if (!/^[0-9]*$/.test(life_span)) errors.life_span = 'It must be a number';
    else if (!/^[0-9]{1,3}$/.test(life_span)) errors.life_span = 'Length between 1 and 3 digits';

    if (!image) errors.image = 'Required image'
    else if (!/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i.test(image)) errors.image = 'It has to be a url of an image'

    return errors;

}

export default validate;