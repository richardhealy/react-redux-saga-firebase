import React from 'react';
import withAuthorization from './withAuthorization';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { configure, mount} from 'enzyme';
import { compose } from 'redux';


configure({adapter: new Adapter()});

class AComponent extends React.Component {

	render() {
		return <div><h1 className="title">Authorized</h1></div>
	}
};

const authCondition = (authUser) => {
	return !!authUser;
};

describe("<withAuthorization />", () => {

	const mockStore = configureStore();
	const store = mockStore({});
	let componentWithAuth = compose(
	  withAuthorization(authCondition)
	)(AComponent);

	test('renders component when authorized', () => {
		
		const props = { 
			store,
			auth : {
				user: true
			}
		};

		const renderedComp = mount(React.createElement(componentWithAuth, props));
		expect(renderedComp.find('h1.title').exists()).toBe(true);
	});

	test('renders `null` when not authorized', () => {
		
		const props = { 
			store,
			auth : {
				user: false
			}
		};

		const renderedComp = mount(React.createElement(componentWithAuth, props));
		expect(renderedComp.find('h1').exists()).toBe(false);
	});
});