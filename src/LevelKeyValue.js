import React, { Component } from 'react';
import './LevelKeyValue.css';

class LevelKeyValue extends Component {

	constructor(props) {
	  super(props);
	  this.state={ greeting: 'Hello', modifiedValue: '' };
	  this.removeGreeting=this.removeGreeting.bind(this);
	  this.handleUpdate = this.handleUpdate.bind(this);
	  this.handleUpdateClick=this.handleUpdateClick.bind(this);

	}

	removeGreeting() {
		this.props.removeGreeting(this.props.name);
	}

	handleUpdate(event) {
		this.setState({ greeting: 'Hello', modifiedValue: event.target.value });
	}
	handleUpdateClick(event) {
		this.props.updateGreeting(this.props.name, this.state.modifiedValue);
		this.setState({ greeting: 'Hello', modifiedValue: '' });
	}


	render() {
		return (
			<div className="LevelKeyValue">
				Item {this.props.index} : {this.props.name}
				<br/>
				<input 
					type="text" 
					onChange={this.handleUpdate}
					value={this.state.modifiedValue}
				/>
				<button className="update" onClick={this.handleUpdateClick}>Update</button>
				<button className="remove" onClick={this.removeGreeting}>Remove</button> 
			</div>
		);
	}
}

export default LevelKeyValue;