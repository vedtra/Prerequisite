import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  
import './content.css';
import Write from './write.jpg';
import Photo from './photo.jpg';
import Video from './video.jpg';
import Desc from './desc.jpg';
import Like from './like.jpg';
import Comment from './comment.jpg';
import Share from './share.jpg';
import User from './user.jpg';


class Content extends Component {
    render(){
        return(
            <div>
                <div className="post">
                    <div className="write">Share an article,photo,video or idea</div>
                    
                    <hr width="95%"></hr>
                    <div className="btns">
                    <button className="btn"><span class="icon1"> <img src={Write} width="20px" align="middle" alt="linkedin" /></span> Write an article</button>
                    <button className="btn"><span class="icon1"> <img src={Photo} width="20px" align="middle" alt="linkedin" /></span> Images</button>
                    <button className="btn"><span class="icon1"> <img src={Video} width="20px" align="middle" alt="linkedin" /></span> Video</button>
                    </div>
                </div>
                   
                    
                    <Card className="desc">
                    <div className="user">
                    <img src={User} width="50px" align="middle" alt="linkedin" />
                    <div className="descs">
                    <span className="title">Wirjadi Lorens</span>
                    <span className="pos">Founder at OKTAGON</span>
                    <span className="day">1d</span>
                    </div>
                    </div>
                    
                        <CardImg top width="100%" src={Desc} width="24px" align="middle" alt="linkedin" />
                            <CardBody>
                             <CardTitle>Artificial Inteligence (AI),Dari Teknologi Abstrak Hingga jadi 'Otak' Bisnis </CardTitle>
                            
                             <CardSubtitle className="mb-2 text-muted">daily.oktagon.co.id</CardSubtitle>
                             
                            </CardBody>
                            <div className="icon_post"><img src={Like} width="16px" align="middle" alt="linkedin" /><span>like</span></div>
                            <div className="icon_post2"><img src={Comment} width="16px" align="middle" alt="linkedin" /><span>Comment</span></div>
                            <div className="icon_post3"><img src={Share} width="16px" align="middle" alt="linkedin" /><span>Share</span></div>
                            
                    </Card>
                    
                
                </div>

        );
    }

}
export default Content;