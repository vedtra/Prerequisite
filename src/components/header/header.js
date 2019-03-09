import React, { Component } from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import{Navbar} from 'reactstrap';
import Search from '../nav-search/search';
import logo from './linkedin.jpg';
import Home from './home.gif';
import Network from './network.gif';
import Jobs from './jobs.gif';
import Message from './messaging.gif';
import Notif from './notification.gif';
import Me from './me.gif';





class Header extends Component {
    render() {
        return (
          <div >
            <Navbar className="header">
            <div className="logo">
            <Link to="/"><li><img src={logo} width="35px" alt="linkedin" /></li></Link>
                </div>
            <div className="navigation_tabs"> 
            <span className="searchh"><Search /></span>
            </div>
              <div className ="nav_header">
              <Link to="/"><div className="icon_middle"><img src={Home} width="24px" align="middle" alt="linkedin" /><span>Home</span></div></Link>
                <div className="icon_middle"><img src={Network} width="24px" align="middle" alt="linkedin" /><span>My Network</span></div>
                <div className="icon_middle"><img src={Jobs} width="24px" align="middle" alt="linkedin" /><span>Jobs</span></div>
                <div className="icon_middle"><img src={Message} width="24px" align="middle" alt="linkedin" /><span>Messaging</span></div>
                <div className="icon_middle"><img src={Notif} width="24px" align="middle" alt="linkedin" /><span>Notification</span></div>
                <div className="icon_middle"><Link to="/profile"><img src={Me} width="24px" align="middle" alt="linkedin" /><span>Me</span></Link></div>

              
              </div>
            </Navbar>
          </div>
        );
      }
    }
export default Header;