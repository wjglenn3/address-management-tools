import React, { forwardRef, useEffect, useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const MyDropDown = forwardRef(
    function MyDropDown(props, ref) {

        const [myTitle, setmyTitle] = useState("Choose one");

        function selectThisBase(eventKey) {
            setmyTitle(eventKey)
            props.changeBase(eventKey)
        }


        return (
                <Stack direction="horizontal" gap={3}>
                    <Form.Group controlId="batchBase">
                        <Form.Label>Match to:</Form.Label>
                        <DropdownButton onSelect={selectThisBase} id="dropdown-basic-button" title={myTitle}>
                            {props.baseOptions.map(index => <Dropdown.Item key={index} eventKey={index}>{index}</Dropdown.Item>)}
                        </DropdownButton>
                    </Form.Group>
                    {myTitle === "File" ?
                        <Form.Group controlId="baseFile">
                            <Form.Label>Input File</Form.Label>
                            <Form.Control onChange={props.changeBaseFile} type="file" />
                        </Form.Group>
                        : <div></div>
                    }
                </Stack>
        )

    }
)


export default MyDropDown;