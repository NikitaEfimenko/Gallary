import React, {Component,Fragment} from 'react'
import Blog from '../Blog'
import './App.css'
import About from '../About'

class App extends Component {
	render(){
		return(
			<Fragment>
				<div className="container app">
					<Blog/>
				</div>
				<About/>	
			</Fragment>	
		)
	}
}


export default App


