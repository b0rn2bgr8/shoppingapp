import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import ProductCard from './Card';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: []
        }
    }

    componentDidMount() {
        this.getProduct();
    }

    async getProduct() {
        try {
            let response = await fetch('https://discountbuddy.azure-mobile.net/tables/products');
            let result = await response.json();

            this.setState({
                featured: result
            });
        } catch (err) {
            console.error(err.message)
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h4>Featured Products</h4>
                    </Col>
                    
                    {
                        this.state.featured.map((f, idx) => {
                            return (
                                <ProductCard item={f} key={idx} />
                            )
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Featured;