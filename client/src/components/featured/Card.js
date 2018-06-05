import React, { Component } from 'react';
import { Col, Card, CardBody, Button, ButtonGroup, CardTitle, CardText, CardImg } from 'reactstrap';

class ProductCard extends Component {
    render() {
        return (
            <Col md={3} sm={6} xs={12}>
                <Card style={{height: 300}}>
                    <CardImg bottom width="100%" src={this.props.item.pic} />
                    <CardBody>
                        <CardTitle>{this.props.item.name}</CardTitle>
                        <ButtonGroup>
                            <Button color="success">info</Button>
                            <Button color="warning">wishlist</Button>
                            <Button color="danger">cart</Button>
                        </ButtonGroup>
                    </CardBody>
                    
                </Card>
            </Col>
        );
    }
}

export default ProductCard;