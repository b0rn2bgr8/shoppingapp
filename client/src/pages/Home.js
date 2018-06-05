import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Banner from '../components/banner/Banner';
import Featured from '../components/featured/Featured';

class Home extends Component{
    render(){
        return (
            <div>
               <Banner />
               <Featured /> 
            </div>
        )
    }
}

export default Home;