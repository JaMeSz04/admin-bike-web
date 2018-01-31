import React, {Component} from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl,
    ListGroup, InputGroup, Glyphicon,Table
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import avatar from "assets/img/faces/face-3.jpg";
import {thArray, tdArray} from 'variables/Variables.jsx';

import ChatText from "../../components/ChatText/ChatText";


const ChatTextField = (
    <div style={{marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10}}>
        <Row>
            <Col sm={12} xs={12}>
                <FormGroup>
                    <FormControl type="text"/>
                </FormGroup>
            </Col>
        </Row>
    </div>
)


const UsageHistory = ({children}) => {
    return (
        <li style={{border: "0px solid white"}} className="list-group-item" onClick={() => {
        }}>
            <Button bsStyle="primary"> {children} </Button>
        </li>
    );
}


class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [
                {
                    sender: true,
                    message: "I'm the recipient!",
                }, // Gray bubble
                {
                    sender: false,
                    message: "I'm you -- the blue bubble!"
                },
                {
                    sender: false,
                    message: "สวัสดี"
                },// Blue bubble
                {
                    sender: true,
                    message: "I'm the recipient!",
                }, // Gray bubble
                {
                    sender: false,
                    message: "I'm you -- the blue bubble!"
                },
                {
                    sender: true,
                    message: "I'm the recipient!",
                }, // Gray bubble
                {
                    sender: false,
                    message: "I'm you -- the blue bubble!"
                },
                {
                    sender: true,
                    message: "I'm the recipient!",
                }, // Gray bubble
                {
                    sender: false,
                    message: "I'm you -- the blue bubble!"
                },
                {
                    sender: true,
                    message: "I'm the recipient!",
                }, // Gray bubble
                {
                    sender: false,
                    message: "I'm you -- the blue bubble!"
                },
                {
                    sender: true,
                    message: "I'm the recipient!",
                }, // Gray bubble
                {
                    sender: false,
                    message: "I'm you -- the blue bubble!"
                },

            ],
            isList : false
            //...
        };
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
    }

    toggleList = () => {
        this.setState({ isList : !this.state.isList})
    }

    render() {


        const tableViewMock = (
            <Card
                title= "Users"
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
        )

        const profileMock = (
            <Card
                title= "Profile"
                content={
                    <form>
                        <FormInputs
                            ncols={["col-md-5", "col-md-3", "col-md-4"]}
                            proprieties={[
                                {
                                    label: "Company (disabled)",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "Company",
                                    defaultValue: "Creative Code Inc.",
                                    disabled: true
                                },
                                {
                                    label: "Username",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "Username",
                                    defaultValue: "michael23"
                                },
                                {
                                    label: "Email address",
                                    type: "email",
                                    bsClass: "form-control",
                                    placeholder: "Email"
                                }
                            ]}
                        />
                        <FormInputs
                            ncols={["col-md-6", "col-md-6"]}
                            proprieties={[
                                {
                                    label: "First name",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "First name",
                                    defaultValue: "Jame"
                                },
                                {
                                    label: "Last name",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "Last name",
                                    defaultValue: "Hehe"
                                }
                            ]}
                        />
                        <FormInputs
                            ncols={["col-md-12"]}
                            proprieties={[
                                {
                                    label: "Adress",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "Home Adress",
                                    defaultValue: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                }
                            ]}
                        />
                        <FormInputs
                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                            proprieties={[
                                {
                                    label: "City",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "City",
                                    defaultValue: "Mike"
                                },
                                {
                                    label: "Country",
                                    type: "text",
                                    bsClass: "form-control",
                                    placeholder: "Country",
                                    defaultValue: "Andrew"
                                },
                                {
                                    label: "Postal Code",
                                    type: "number",
                                    bsClass: "form-control",
                                    placeholder: "ZIP Code"
                                }
                            ]}
                        />

                        <Row>
                            <Col md={12}>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>About Me</ControlLabel>
                                    <FormControl rows="5" componentClass="textarea"
                                                 bsClass="form-control"
                                                 placeholder="Here can be your description"
                                                 defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."/>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button
                            bsStyle="primary"
                            pullRight
                            fill
                            type="submit"
                            style = {{marginLeft : "1vh"}}
                        >
                            Update Profile
                        </Button>

                        <Button
                            bsStyle="info"
                            pullRight
                            fill
                            type="submit"
                            onClick = {() => this.toggleList()}
                        >
                            All users
                        </Button>

                        <div className="clearfix"></div>
                    </form>
                }
            />
        )
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            {this.state.isList? tableViewMock : profileMock}
                        </Col>
                        <Col xs = {12} md={4}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={avatar}
                                name="ShubU Hehe"
                                description={
                                    <div style={{overflowY: "scroll",marginTop: "2vh", height: "20vh"}}>
                                        {/*<ListGroup componentClass = "ul">*/}
                                        {/*<UsageHistory> test 1234 </UsageHistory>*/}

                                        {/*</ListGroup>*/}
                                        {this.state.messages.map(msg => <ChatText message={msg.message}
                                                                                  isSelf={msg.sender}/>)}
                                    </div>
                                }
                                socials={ChatTextField}
                            />

                        </Col>

                    </Row>
                </Grid>>
            </div>
        );
    }
}

export default UserProfile;
