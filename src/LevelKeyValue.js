import React, { Component } from 'react';
import './LevelKeyValue.css';

class LevelKeyValue extends Component {

	constructor(props) {
	  super(props);
	  this.state={ modifiedValue: '' };
	  this.handleRemoveKeyValue = this.handleRemoveKeyValue.bind(this);
	  this.handleUpdate = this.handleUpdate.bind(this);
	  this.handleUpdateClick = this.handleUpdateClick.bind(this);

	}

	handleRemoveKeyValue() {
		console.log(this.props.index, this.props.value);
		this.props.removeKeyValue(this.props.index, this.props.value);
		//this.setState({ modifiedValue: '' });
	}

	handleUpdate(event) {
		this.setState({ modifiedValue: event.target.value });
	}
	handleUpdateClick(event) {
		this.props.updateKeyValue(this.props.value, this.state.modifiedValue);
		this.setState({ modifiedValue: '' });
	}


	render() {
		var displayValue = this.props.value;
		if (displayValue === null) {
			displayValue = 'null'
		}

		return (
			<div className="LevelKeyValue">
				{this.props.index} : {displayValue}
				<br/>
				<input 
					type="text" 
					onChange={this.handleUpdate}
					value={this.state.modifiedValue}
				/>
				<button className="update" onClick={this.handleUpdateClick}>Update</button>
				<button className="remove" onClick={this.handleRemoveKeyValue}>Remove</button> 
			</div>
		);
	}
}

export default LevelKeyValue;