import {FormControl, FormGroup, FormLabel} from "react-bootstrap";

const FormInput = ({label, type, placeholder, value, onChage}) => {
    const props = type === "textarea" ? {as: type} : {type};

    const onChangeHandler = e => {
        if (type === "file") {
            onChage(e.target.files[0]);
        } else {
            onChage(e.target.value);
        }
    };

    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <FormControl {...props} type={type} placeholder={placeholder} value={value} onChange={onChangeHandler}/>
        </FormGroup>
    )
}

export default FormInput;
