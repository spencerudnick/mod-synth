import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NewPatch from './new-patch';
import Module from './Module';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	shallow(<Module />);
});

it('<Module /> has <h1>', () => {
	const wrapper = shallow(<Module />);
	expect(wrapper.find('h1')).toHaveLength(1);
});

it('<Module /> has delete button', () => {
	const wrapper = shallow(<Module />);
	expect(wrapper.find('button.delete')).toHaveLength(1);
});

// test('Module has a prop id 1', () => {
// 	const module = renderer.create(<Module id="module-1" />);
// 	let tree = module.toJSON()
// 	expect(tree).
// });
