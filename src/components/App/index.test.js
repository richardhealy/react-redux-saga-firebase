import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router-dom';
import { configure, shallow} from 'enzyme';
import { Provider } from 'react-redux';

import App from './index';

configure({adapter: new Adapter()});

let rootElement;

beforeAll(() => {
  rootElement = shallow(<App />);
});

describe("<App />", () => {

	test('renders without crashing', () => {}); 

	test('it has a wrapper with class name of `app`', () => {

		expect(rootElement.find('.app').exists()).toBe(true);

	});

});
