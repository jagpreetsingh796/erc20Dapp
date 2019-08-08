import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Transfer from './Transfer'
import { mount } from 'enzyme';


describe("Test Transfer Component",()=>{
    it('Testing Transfer component1', () => {
        const wrapper = mount(<Transfer/>);
        const input = wrapper.find('input').at(0);
        input.instance().value = '1';
        input.simulate('change');
        expect(wrapper.state().Id).toEqual('1');
});

it('Testing Transfer component 2', () => {
    const wrapper = mount(<Transfer/>);
    const input = wrapper.find('input').at(1);
    input.instance().value = 'arjun';
    input.simulate('change');
    expect(wrapper.state().reciever).toEqual('arjun');
});
it('Testing Transfer component 3', () => {
    const wrapper = mount(<Transfer/>);
    const input = wrapper.find('input').at(2);
    input.instance().value = '1000';
    input.simulate('change');
    expect(wrapper.state().numTokens).toEqual('1000');
});
   
})
