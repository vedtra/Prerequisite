import React, { Component } from 'react';
import './recomendation.css';
import User from './user.jpg';
import Follow from './follow.jpg';
import Shop from './shop.jpg';
import Software from './software.jpg';
class recomendation extends Component {
        render(){
            return(
                <div>
                <div className="feed">
                <h6>Add to your feed</h6>
                    <div className="rec">
                    <div className="users">
                        <img src={User} width="37px" align="middle" className="image" alt="linkedin" />
                        </div>
                    <div className="descss">
                    
                        <span className="titles">Max Levchin</span>
                            <div>
                        <span className="poss">Co-Founder & CEO at affirm,Inc</span>
                        </div>
                        </div>
                    <div className="follows">
                        <span className="follow"><img src={Follow} width="70px" align="middle"  alt="linkedin" /></span>
                        </div>
                    </div>
                
                    <div className="rec">
                    <div className="users">
                        <img src={Shop} width="30px" align="middle" className="image" alt="linkedin" />
                        </div>
                    <div className="descss">
                    
                        <span className="titles">Shopee</span>
                            <div>
                        <span className="poss">Company Internet</span>
                        </div>
                        </div>
                    
                    <div className="follows">
                        <span className="follow"><img src={Follow} width="70px" align="middle"  alt="linkedin" /></span>
                        </div>
                    </div>

                    <div className="rec">
                    <div className="users">
                        <img src={Software} width="30px" align="middle" className="image" alt="linkedin" />
                        </div>
                    <div className="descss">
                    
                        <span className="titles">Software Engineering</span>
                            <div>
                        <span className="poss">Topic</span>
                        </div>
                        </div>
                    
                    <div className="follows">
                        <span className="follow"><img src={Follow} width="70px" align="middle"  alt="linkedin" /></span>
                        </div>
                    </div>
                    <h7>Vew all recomendations</h7>          
                    

                   
                </div>
                </div>

            );
        }
}
export default recomendation;