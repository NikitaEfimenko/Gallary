import React , {Component}  from 'react'
import './Card.css'
import Like from './like.png'

class Card extends Component {
	constructor(props){
		super(props)
		this.state = {
			likes:0
		}
		this.likeHandler = this.likeHandler.bind(this);
	};
	likeHandler(e) {
		e.target.classList.toggle('like-animate');
		this.setState({likes:++this.state.likes});
	}
	likeAnimateEndHandle(e){
		e.target.classList.toggle('like-animate');
	}	
	background(url){
		return {
					background: 'url('+ url +') center no-repeat',
					backgroundSize: '100% 100%'
				}
	}
	render(){
		const url = this.props.data;
		return(
			<div className="card center" style={this.background(url)}>
				<div class="like center" style={this.background(Like)} onClick={this.likeHandler} onAnimationEnd={this.likeAnimateEndHandle}>
					
				</div>
				<p className='likes__info floor-text'>{this.state.likes} likes</p>
			</div>

		)
	}
}


export default Card