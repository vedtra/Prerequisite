import React, { Component } from 'react';
import './pages.css';
import Profil from './profil.jpg';
import { Link } from "react-router-dom";

class Pages extends Component {
    render() {
        return (
          <div>
              <div className="card hovercard">
                <div className="cardheader">

                </div>
                <Link to="/profile">
                <div className="avatar">
                <img src={Profil} width="24px" align="middle" alt="linkedin" />
                </div>
                </Link>
                <div className="info">
                    <div className="title">Christian Hanggra</div>
                    <div className="desc">Tech Enthusiast</div>
                </div>
                <hr />
                <div className="info">
                    <div className="count">80</div>
                    <div className="desc">Who's viewed your profile</div>
                </div>
               
                <hr  />
                <div className="info">
                    <div className="count">1,133</div>
                    <div className="desc">Connection</div>
                    <h6>Manage Your Network</h6>
                </div>
          
                <div className="bottom">
                <br />
                     <div className="descs">Acces exclusive tools & insights</div>
                </div>
            </div>
          </div>
        );
      }


}
export default Pages;