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

AComponent.defaultProps = {
  auth: {
  	user: true
  }
};

const authCondition = (authUser) => {
	return !!authUser;
};

describe("<withAuthorization />", () => {

	const mockStore = configureStore()

	test('renders properly when initialed with react component', () => {
		
		const componentWithAuth = compose(
		  withAuthorization(authCondition)
		)(AComponent);

		const store = mockStore({});

		const props = { 
			store,
			auth : {
				user: true
			}
		};

		const renderedComp = mount(React.createElement(componentWithAuth, props));
		expect(renderedComp.find('h1.title').exists()).toBe(true);
	});
});