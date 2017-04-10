import React, { Component } from 'react';
import './LevelObject.css';
import LevelKeyValue from './LevelKeyValue';
import AddKeyValue from './AddKeyValue';

class LevelObject extends Component {

	constructor(props) {
		super(props);
		this.state = {objectObject: this.props.objectObject};
		this.addKeyValue = this.addKeyValue.bind(this);
		this.removeKeyValue = this.removeKeyValue.bind(this);
		this.updateKeyValue = this.updateKeyValue.bind(this);
	}


	renderKeyValuePairs() {
		if (this.state.objectObject) {
			function walk(key, val, rkv, ukv) {
				if (val instanceof Object){
					for (key in val) {
						walk(key, val, rkv, ukv);
					}
				}
				else {
					return <LevelKeyValue
						key={key}
						index={key}
						value={val}
						removeKeyValue={rkv}
						updateKeyValue={ukv}
						/>
				}
			}
			var returnList = []
			for (var key in this.state.objectObject) {
				returnList[returnList.length] = 
					walk(key, this.state.objectObject[key], this.removeKeyValue, this.updateKeyValue);
			}
			return returnList
		}	
	 }

	addKeyValue(newValue) {
		const addKeyValuePairs = this.state.objectObject
		if (newValue !== '') {
			addKeyValuePairs[newValue] = null

			this.setState({objectObject: addKeyValuePairs });
		};
	}
	removeKeyValue(removeKey, removeValue){
		const filteredKeyValuePairs = this.state.objectObject
		filteredKeyValuePairs[removeKey] = null;
		delete filteredKeyValuePairs[removeKey];	
		
		this.setState({ objectObject: filteredKeyValuePairs });
	}
	updateKeyValue(originalValue, changedValue) {
		const changedKeyValuePairs = this.state.objectObject 
	
		for (var key in changedKeyValuePairs) {
			if (originalValue === changedKeyValuePairs[key]) {
				changedKeyValuePairs[key] = changedValue
			}
		}
		this.setState({objectObject: changedKeyValuePairs});
	}
	

	render() {
		return (

			<div className="LevelObject">
				<pre>object: </pre>
				<pre>{JSON.stringify(this.state.objectObject, null, '  ')}</pre>
				{this.renderKeyValuePairs()}
				<AddKeyValue 
					addKeyValue={this.addKeyValue}
				 />
			</div>
		);
	}
}

export default LevelObject;