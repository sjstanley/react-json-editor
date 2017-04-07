import React, { Component } from 'react';
import './LevelList.css';
import LevelKeyValue from './LevelKeyValue';
import AddKeyValue from './AddKeyValue';

class LevelList extends Component {

	constructor(props) {
		super(props);
		//this.state = { greetings: ['Jim', 'Sally', 'Bender']};
		this.state = {greetings: this.props.greetings};
		this.addGreeting = this.addGreeting.bind(this);
		this.removeGreeting = this.removeGreeting.bind(this);
		this.updateGreeting = this.updateGreeting.bind(this);
	}


	renderGreetings() {
		return this.state.greetings.map((name, index) => (
			<LevelKeyValue 
				key={index} 
				index={index}
				name={name}
				removeGreeting={this.removeGreeting}
				updateGreeting={this.updateGreeting}
				restoreOriginal={this.restoreOriginal}
			/>
		));
	}

	addGreeting(newName) {
		this.setState({greetings: [...this.state.greetings, newName] });
	}
	removeGreeting(removeName){
		const filteredGreetings = this.state.greetings.filter(name => {
			return name !== removeName;});
		
		this.setState({ greetings: filteredGreetings });
	}
	updateGreeting(originalName, changedName) {
		const changedGreetings = this.state.greetings 
	
		for (var k = 0; k < changedGreetings.length; k++ ) {
			if (originalName === changedGreetings[k]) {
				changedGreetings[k] = changedName
			}
		}
		this.setState({greetings: changedGreetings});
	}
	

	render() {
		return (

			<div className="LevelList">
				<pre>{JSON.stringify(this.state, null, '  ')}</pre>
				{this.renderGreetings()}
				<AddKeyValue 
					addGreeting={this.addGreeting}
				 />
			</div>
		);
	}
}

export default LevelList;