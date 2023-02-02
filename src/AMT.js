import React, { useEffect } from 'react';
import { useRef, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MyDropDown from './MyDropdown';

import Header from './Header'


const baseOptions = ['MTDB',
                     'File',
                     'Something else'
                    ]


function AMT() {

  //const dropdownSelection = useRef("Choose Base");
  const baseRef = useRef(null);
  const baseFileRef = useRef(null);


  //https://react-bootstrap.github.io/components/dropdowns/
  //const [ddState, setddState] = useState("Choose Base");

  //remember, rendering twice could be because of strict mode
  const renderCount = useRef(1);




  function doNothing(e) {
    e.preventDefault();
    console.log('nothing done');
  }

  function testTheDD() {
    //console.log(ddRef.current)
    //console.log(ddRef.current.children[0].innerHTML)
    //console.log(ddRef.current.slice(1))
    //for (const key of Object.keys(ddRef.current.children[0])) {
    //  const val = ddRef.current.children[0][key];
    //  console.log(val)
    //}
  }


  function changeBase(eventKey) {
    baseRef.current = eventKey
    console.log("New base: "+baseRef.current)
  }

  function changeBaseFile(event) {
    baseFileRef.current = event.target.files[0]
    console.log("New base FILE: "+baseFileRef.current)
  }

  function logMe(e) {
    e.preventDefault();
    console.log("Base ref: "+baseRef.current)
    console.log("File ref: "+baseFileRef.current)
  }


  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })


  return (
    <div className="App">
      <Header />

      <div className="ms-3 me-3">

        <Form className="mb-3" onSubmit={doNothing}>
          <Row >
            <h5>Full Address String</h5>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="singleAddrString">
                <Form.Control placeholder="1234 Main St Apt ABC" />
              </Form.Group>
            </Col>
            <Col xs={1}>
              <Button variant="primary" type="submit">
                Match
              </Button>
            </Col>
            <Col xs={1}>
              <Button variant="primary" type="submit">
                Standardize
              </Button>
            </Col>
          </Row>
        </Form>



        <Form className="mb-3" onSubmit={doNothing}>
          <Row>
            <h5>Address Components</h5>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="addrCompHn">
                <Form.Label>House Number</Form.Label>
                <Form.Control placeholder="1234" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="addrCompStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control placeholder="Main St" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="addrCompWs">
                <Form.Label>Within Structure</Form.Label>
                <Form.Control placeholder="Apt 1D" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="addrCompZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="22222" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="addrCompGeoid">
                <Form.Label>GEOID</Form.Label>
                <Form.Control placeholder="[SSCCCTTTTTTBBBB]" />
              </Form.Group>
            </Col>
            <Col xs={1} className="mt-auto">
              <Button variant="primary" type="submit">
                Match
              </Button>
            </Col>
            <Col xs={1} className="mt-auto">
              <Button variant="primary" type="submit">
                Standardize
              </Button>
            </Col>
          </Row>
        </Form>



        <Form onSubmit={logMe}>
          <Row>
            <h5>Batch</h5>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="batchFile">
                <Form.Label>Input File</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col>

                <MyDropDown baseOptions={baseOptions} 
                            changeBase={changeBase}
                            changeBaseFile={changeBaseFile}
                            />

            </Col>

            <Col xs={1} className="mt-auto">
              <Button variant="primary" type="submit">
                Match
              </Button>
            </Col>
            <Col xs={1} className="mt-auto">
              <Button variant="primary" type="submit">
                Standardize
              </Button>
            </Col>
          </Row>
        </Form>




      </div>
    </div>
  );
}

export default AMT;