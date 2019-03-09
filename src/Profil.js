import React, { Component } from 'react';
import Header from './components/header/header';
import Profill from './components/profil/profil';

class Profil extends Component {
    render(){
        return(
            <div>
                <Header />
                <Profill />
            </div>
        );
    }
}
export default Profil;
