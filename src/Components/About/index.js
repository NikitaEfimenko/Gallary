import React, {Component,Fragment} from 'react'
import './About.css'

class About extends Component {
	render(){
		return(
			<Fragment>				
				<footer className="about">
						<div className='about__list's>
							<ul class="about__lists">
								<li className ='icon'> 
									<a href='fb.jpg'>
										<img className ='icon' src="./pic/fb.png"  alt="Responsive image"/>
									</a> 
								</li>
								<li > 
									<a href='./pic/ins.jpg'>
										<img  className ='icon' src="./pic/inst.png"  alt="Responsive image"/>
									</a> 
								</li>
								<li  > 
									<a  href='./vk.png'>
										<img className ='icon' src="./pic/vk.png"  alt="Responsive image"/>
									</a> 
								</li>
								<li  > 
									<a  href='./vk.png'>
										<img className ='icon' src="./pic/tw.png"  alt="Responsive image"/>
									</a> 
								</li>
							</ul>
						</div>
					<div className='copyright floor-text'> <p>&#169; Nikita Efimenko 2018</p></div>
				</footer>
			</Fragment>	
		)
	}
}


export default About