import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import LevelKeyValue from './LevelKeyValue';

describe(LevelKeyValue, () => {
	const name = 'Person';
	const mockRemoveGreeting = jest.fn();
	const component = shallow(
		<LevelKeyValue name={name} removeGreeting={mockRemoveGreeting}/>
	);

	it('renders and matches our snapshot', () => {
		const component = renderer.create(
			<LevelKeyValue name="Person" />
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('contains the supplied name', () => {
		expect(component.text()).toContain(name);
	});

	it('modifies the greeting when frenchify button is clicked', () => {
		component.find('button.frenchify').simulate('click');
		expect(component.text()).toContain('Bonjour');
	});

	it('calls the passed in removeGreeting function when remove button is clicked', () => {
		component.find('button.remove').simulate('click');
		expect(mockRemoveGreeting).toBeCalled();
	});

});
