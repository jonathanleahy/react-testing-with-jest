import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

/**
 * factory function ro create a ShallowWrapper for the app component
 * @function setup
 */
const setup = () => shallow(<App/>)

function findByTestAttr(wrapper: any, val: string) {
    return wrapper.find(`[data-test='${val}']`)
}

test('renders without error', async () => {
    const wrapper = setup()
    expect(findByTestAttr(wrapper, 'component-app').length).toBe(1)
});

test('renders counter display', () => {
    const wrapper = setup()
    expect(findByTestAttr(wrapper, 'counter-display').length).toBe(1)
});

test('renders display starts at 0', () => {
    const wrapper = setup()
    expect(findByTestAttr(wrapper, 'counter-display').text()).toEqual('0')
});

test('renders increment button', () => {
    const wrapper = setup()
    expect(findByTestAttr(wrapper, 'increment-button').text()).toEqual("Increment")
});

test('clicking increment increases display by 1', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'increment-button')
    button.find('button').simulate('click');
    expect(findByTestAttr(wrapper, 'counter-display').text()).toEqual('1')
});
