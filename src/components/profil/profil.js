import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Profils from './profils.jpg';
import './profil.css';

class Profil extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Row>
                    <Col xs="9">
                    <div className="card hovercard">
                <div className="cardheader">

                </div>
               
                <div className="avatars">
                <img src={Profils} width="24px" align="middle" alt="linkedin" />
                </div>
               
                <div className="infos">
                    <div className="titlee">Hantze Sudarma<span><h6>Laboratory Coordinator</h6></span></div>
                    
                    <div className="descc">Indonesia</div>
                </div>
                
            </div>
                    </Col>
                    <Col xs="3"></Col>
                    </Row>
                </Container>
            </div>
        );

    }
}
export default Profil;

