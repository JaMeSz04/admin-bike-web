import React, { Component } from 'react';
import { Grid, Row, Col, Table, ListGroup, ListGroupItem, FormGroup, FormControl, Glyphicon, InputGroup } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import {thArray, tdArray} from 'variables/Variables.jsx';

class TableList extends Component {

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={9}>
                            <Card
                                title= "Bike 1"
                                category="borrowed 1 hour ago"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tdArray.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                return (
                                                                    <td  key={key}>{prop}</td>
                                                                );
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                        <Col md = {3}>
                            <Card
                                title = {
                                    <FormGroup>
                                        <InputGroup>
                                            <FormControl type="text" />
                                            <InputGroup.Addon>
                                                <Glyphicon glyph="search" />
                                            </InputGroup.Addon>
                                        </InputGroup>
                                    </FormGroup>
                                }
                                content = {
                                    <ListGroup style = {{maxHeight : "50vh",overflowY : "scroll"}}>
                                        <ListGroupItem onClick = {() => alert("clicked")}>Item 1</ListGroupItem>
                                        <ListGroupItem onClick = {() => alert("clicked")}>Item 2</ListGroupItem>
                                        <ListGroupItem onClick = {() => alert("clicked")}>Item 3</ListGroupItem>
                                        <ListGroupItem onClick = {() => alert("clicked")}>Item 3</ListGroupItem>
                                        <ListGroupItem onClick = {() => alert("clicked")}>Item 3</ListGroupItem>
                                        <ListGroupItem onClick = {() => alert("clicked")}>Item 3</ListGroupItem>
                                        <ListGroupItem onClick = {() => alert("clicked")}>Item 3</ListGroupItem>
                                    </ListGroup>

                            }/>



                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
