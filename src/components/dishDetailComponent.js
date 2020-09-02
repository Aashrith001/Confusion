import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DetailDish extends Component{

    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card> 
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>   
            </div>             
        );
    };
    renderComments(comments){
        if(comments){
            const commentList = comments.map((comment)=>{
                return(
                    <div class="container">
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            -- <p>{comment.author} , {comment.date}</p>
                        </li>
                    </div>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
        if(this.props.dish){
            return(
                <div className=" container">
                    <div className="row ">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div> 
                </div>
            );
        }else{}
            return(
            <div></div>
            );
    }
}

export default DetailDish;