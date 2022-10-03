import ReactCardFlip from 'react-card-flip';
import React, { Component } from 'react';

class FCard extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

	render() {
		return (
			<div className='fcard' id="teams">

				{/* <label for="#">
					<input type="checkbox" />
					<div className='card'>
						<div className='front'> front </div>
						<div className='back'>back</div>
					</div>
				</label> */}
				
				<section>
					<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
						<div className='cardf' onClick={this.handleClick}>
							<fig><img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							width={"100%"} /></fig>
							<h2>Name</h2>
							<h4>Role</h4>
						</div>
						<div className='cardb' onClick={this.handleClick}>
							<txt>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis officiis maiores quos accusamus harum natus, quaerat officia ducimus illum minus. Deleniti tenetur quasi libero laboriosam dolorum, numquam doloremque quae.
							</txt>
						</div>
					</ReactCardFlip>
				</section>


			</div >
		)
	}
}

export default FCard;