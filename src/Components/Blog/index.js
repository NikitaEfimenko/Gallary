import React , {Component, Fragment}  from 'react'
import Card from '../Card'
import './Blog.css'




const get = url => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.open('GET', url, true);
		xhr.onload = function(){
			return resolve(xhr.response)
		}
		xhr.onerror = function(){
			return reject(new Error('=('))
		}
		xhr.send();
	}
	)
}




class Blog extends Component {
	constructor(props){
		super(props)
		this.load = this.load.bind(this);
		this.scrollHandle = this.scrollHandle.bind(this);
		this.state = {
			imgs : []
		}
		window.addEventListener('scroll',this.scrollHandle)
		this.load();this.load();this.load();this.load()
	}
	scrollHandle = function(e){
		const el = e.currentTarget;
		if (el === window){
			if (el.pageYOffset + document.body.offsetHeight == document.body.scrollHeight){
				this.load();
				this.load()
			}
		}
	}
	load = function(){
		const url = "https://picsum.photos/200/300/?random";
		get(url).then(
			(blob) => {
				const img = URL.createObjectURL(blob);
				this.setState({imgs:[...this.state.imgs, img]})
			}, 
			(blob) => {
				console.log('error');
			});
	}
	render(){
		let template = this.state.imgs.map((img, i) =>
			<div key={i} className='blog__elem'> 
				<Card data={img}/>
			</div> 
	);
		return(
			<Fragment>
				<div className="blog blog-size-full">			      
					{template}
				</div>
			</Fragment>
		)
	}
}


export default Blog