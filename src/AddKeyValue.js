import React, { Component } from 'react';
import './AddKeyValue.css';

class AddKeyValue extends Component {
	constructor(props) {
		super(props);
		this.state = { greetingName: ''};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addGreeting = this.addGreeting.bind(this);
	}
	handleUpdate(event) {
		this.setState({ greetingName: event.target.value });
	}
	addGreeting() {
		this.props.addGreeting(this.state.greetingName);
		this.setState({ greetingName: '' });
	}

	render() {
		return (
			<div className="AddKeyValue">
				<input 
					type="text" 
					onChange={this.handleUpdate}
					value={this.state.greetingName}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addGreeting} >Add Item</button>
			</div>
		);
	}
}

export default AddKeyValue;