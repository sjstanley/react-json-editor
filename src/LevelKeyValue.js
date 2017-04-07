import React, { Component } from 'react';
import './LevelKeyValue.css';

class LevelKeyValue extends Component {

	constructor(props) {
	  super(props);
	  this.state={ listObject: '', modifiedValue: '' };
	  this.removeKeyValue = this.removeKeyValue.bind(this);
	  this.handleUpdate = this.handleUpdate.bind(this);
	  this.handleUpdateClick = this.handleUpdateClick.bind(this);

	}

	removeKeyValue() {
		this.props.removeKeyValue(this.props.value);
	}

	handleUpdate(event) {
		this.setState({ listObject: '', modifiedValue: event.target.value });
	}
	handleUpdateClick(event) {
		this.props.updateKeyValue(this.props.value, this.state.modifiedValue);
		this.setState({ listObject: '', modifiedValue: '' });
	}


	render() {
		return (
			<div className="LevelKeyValue">
				Item {this.props.index} : {this.props.value}
				<br/>
				<input 
					type="text" 
					onChange={this.handleUpdate}
					value={this.state.modifiedValue}
				/>
				<button className="update" onClick={this.handleUpdateClick}>Update</button>
				<button className="remove" onClick={this.removeKeyValue}>Remove</button> 
			</div>
		);
	}
}

export default LevelKeyValue;