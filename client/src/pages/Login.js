import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" />
                        </FormGroup>
                        <hr />
                        <Button block>Submit</Button><br />
                        <Link to="/"><Button block>Cancel</Button></Link>
                    </Form>
                </Col>
            </Row>
         </Container>
    );
  }
}

export default Login