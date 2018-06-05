import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';
import ProductCard from './Card';

class Featured extends Component {
    constructor(props){
        super(props);
        this.state = {
            featured: []
        }
    }

    componentDidMount(){
        this.getProduct();
    }

    getProduct(){
        console.log("fired");
        fetch('https://discountbuddy.azure-mobile.net/tables/products')
        .then(res=>{return res.json()})
        .then(result=> {
            this.setState({

                featured: result
            })
        })
    }

    render() {
        return (
            <Container>
                <Row>
                   {
                     this.state.featured.map((f, idx)=>{
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