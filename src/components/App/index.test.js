import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter as Router } from 'react-router-dom';
import { configure } from 'enzyme';
import { Provider } from 'react-redux';

import App from './index';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Router>
		<App />
	</Router>, div);
	ReactDOM.unmountComponentAtNode(div);
}); 