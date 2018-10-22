import React , {Component}  from 'react'

import Like from '../like.png'


class Card extends Component {
	constructor(props){
		super(props)
		this.state = {
			likes:0
		}
		this.likeHandler = this.likeHandler.bind(this);
	};
	likeHandler(e) {
		e.target.classList.toggle('like-appear');
		this.setState({likes:++this.state.likes})
	}
	render(){
		const {title,url,text} = this.props.data;
		return(
			<div className="card size disappear center" style={{
					background: 'url('+ url +') center no-repeat',
					backgroundSize: '100% 100%'
				}}>
				<div class="container like h-100 w-100 center" style={{
					background: 'url('+ Like +') center no-repeat',
					backgroundSize: '100% 100%'
				}} onClick={this.likeHandler} onAnimationEnd={(e) => {e.target.classList.toggle('like-appear')}}>
					<p className='like-count white-text'>{this.state.likes}</p>
				</div>

			</div>
		)
	}
}


export default Card