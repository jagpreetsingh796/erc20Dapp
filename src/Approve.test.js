import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Approve from './Approve'
import { mount } from 'enzyme';


describe("Test Delegate Component",()=>{
    it('Testing Delegate component1', () => {
        const wrapper = mount(<Approve/>);
        const input = wrapper.find('input').at(0);
        input.instance().value = '1';
        input.simulate('change');
        expect(wrapper.state().Id).toEqual('1');
});

it('Testing Delegate component 2', () => {
    const wrapper = mount(<Approve/>);
    const input = wrapper.find('input').at(1);
    input.instance().value = 'arjun';
    input.simulate('change');
    expect(wrapper.state().delegate
    ).toEqual('arjun');
});
it('Testing Delegate component 3', () => {
    const wrapper = mount(<Approve/>);
    const input = wrapper.find('input').at(2);
    input.instance().value = '1000';
    input.simulate('change');
    expect(wrapper.state().numTokens).toEqual('1000');
});
   
})
