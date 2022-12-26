import React from "react";
import {Button, ButtonGroup, Col} from "react-bootstrap";
import {StyledListItem} from "./style";

const CourseItem = ({data}) => {
    return (
        <StyledListItem action>
            <Col>
                <h3 className='lead'>{data?.title}</h3>
                <p>{data?.description}</p>
            </Col>
            <ButtonGroup>
                <Button variant='primary'>Edit</Button>
                <Button variant='danger'>Delete</Button>
                <Button variant='secondary'>Download</Button>
            </ButtonGroup>
        </StyledListItem>
    )
}


export default React.memo(CourseItem);