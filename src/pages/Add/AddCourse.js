import React, {useEffect, useState} from "react";
import {Form, FormControl, Button, Container, FormLabel, FormGroup} from "react-bootstrap";
import FormInput from "../../components/FormInput";
import useAddCourseState from "./useAddCourseState";
import {StyledButton, StyledContainer} from "./style";
import {StyledTitle} from "./style";

const FORM_LIST = [
    {label: "Title", type: "text", placeholder: "Enter course title"},
    {label: "Description", type: "textarea", placeholder: "Enter course description"},
    {label: "Type ID", type: "text", placeholder: "Enter course type ID"},
    {label: "Course Material", type: "file", placeholder: "Choose course material"},
    {label: "Level", type: "text", placeholder: "Enter course level"},
    {label: "Duration", type: "text", placeholder: "Enter course duration"}
];

const AddCourse = ({onNavigate, onGetData}) => {
    const {getter, setter} = useAddCourseState();

    const submitForm = () => {
        onGetData(getter);
        onNavigate('/');
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Course</StyledTitle>
            <Form>
                {FORM_LIST.map((item, index) => (
                    <FormInput label={item.label} type={item.type} value={getter[index]} onChage={setter[index]} placeholder={item.placeholder}/>
                ))}
            </Form>
            <StyledButton onClick={submitForm}>Submit</StyledButton>
            <StyledButton onClick={() => onNavigate('/')}>Cancel</StyledButton>
        </StyledContainer>
    );
};

export default AddCourse;
