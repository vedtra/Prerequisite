import React, { Component } from 'react';
import searchicon from './search.gif';
import People from './people.jpg';
import Job from './jobs.jpg';
import Post from './post.jpg';
import One from './one.jpg';
import Two from './two.jpg';
import Three from './three.jpg';
import Four from './four.jpg';
import Five from './five.jpg';
import Six from './six.jpg';
import Seven from './seven.jpg';
import './search.css';


class Search extends Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="search">
        <span class="fa-search"><img src={searchicon} width="20px" alt="linkedin" /></span>
        <input placeholder="Cari" onClick={this.showDropdownMenu}></input>
          { this.state.displayMenu ? (
           <div className="searchfor"> 
           
          <ul>
        <div className="category">
         <li> Search for</li>
         <li><img src={People} width="20px" align="middle" alt="linkedin" /><span>People</span></li>
         <li><img src={Job} width="20px" align="middle" alt="linkedin" /><span>Jobs</span></li>
         <li><img src={Post} width="20px" align="middle" alt="linkedin" /><span>Post</span></li>
         </div>
          <hr />
        <div className="recent">
          <li>Recent</li>
          <li><img src={One} width="30px" align="middle" alt="linkedin" /><span>Hantze Sudarma</span></li>
          <li><img src={Two} width="30px" align="middle" alt="linkedin" /><span>Ahmad Zikri</span></li>
          <li><img src={Three} width="30px" align="middle" alt="linkedin" /><span>Andoko Chandra</span></li>
          <li><img src={Four} width="30px" align="middle" alt="linkedin" /><span>Richard Fang</span></li>
          <li><img src={Five} width="30px" align="middle" alt="linkedin" /><span>Siska Felicia</span></li>
          <li><img src={Six} width="30px" align="middle" alt="linkedin" /><span>Saras Meini</span></li>
          <li><img src={Seven} width="30px" align="middle" alt="linkedin" /><span>Andrew Mawikere</span></li>
          
          </div>
          </ul>
          </div>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Search;