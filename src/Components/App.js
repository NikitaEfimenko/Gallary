import React , {Component, Fragment}  from 'react'
import Card from './Card.js'


class App extends Component {
	constructor(props){
		super(props)
	}
	render(){
		let cards = this.props.data;
		let template = cards.map((card, i) =>
			<div key={i} className='center opacity-gray h-100'> 
				<Card data={card}/>
			</div> 
	);
		return(
			<Fragment>
			<div className="container perspective h-100 ">			      
				{template}
			</div>
			</Fragment>
		)
	}
}


export default App