import validator from 'validator';


const validateSignin = ({ type, value }) => {
    console.log('###############################################');
    switch (type) {
        case 'name':
            if (validator.isLength(value, { min: 5, max: 50 }) === false && value !== '') setState({
                ...state,
                name: {
                    ...name,
                    error: 'invalid Name value'
                }
            });
            else {
                setState({
                    ...state,
                    name: {
                        value: value,
                        valid: true
                    }
                });
                setState({
                    ...state,
                    name: {
                        ...name,
                        error: ''
                    }
                });;
            }
            break;
        case 'email':
            if (validator.isEmail(value) === false && value !== '') setState({
                ...state,
                email: {
                    ...email,
                    error: 'invalid Email value'
                }
            });
            else {
                setState({
                    ...state,
                    email: {
                        value: value,
                        valid: true
                    }
                });
                setState({
                    ...state,
                    email: {
                        ...email,
                        error: ''
                    }
                });;
            }
            break;
        case 'pass':
            if (validator.isLength(value, { min: 5, max: 50 })) setError('invalid password value');
            else if (value === '') setError('');
            else {
                setPassword(value);
                setError('');
            }
            break;
        case 'cpass':
            if (validator.equals(value, password)) setError('passwords do not match');
            else if (value === '') setError('');
            else {
                setEmail(value);
                setError('');
            }
            break;
        default:
            break;
    }
    console.log(state);
}

export { validateSignin };