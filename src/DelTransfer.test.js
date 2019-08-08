import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  Deltransfer from './DelegateTransfer'
import { mount } from 'enzyme';

describe("Test Delegate Transfer Component",()=>{
    it('Testing  component1', () => {
        const wrapper = mount(<Deltransfer/>);
        const input = wrapper.find('input').at(0);
        input.instance().value = '1';
        input.simulate('change');
        expect(wrapper.state().Id).toEqual('1');
});

it('Testing component 2', () => {
    const wrapper = mount(<Deltransfer/>);
    const input = wrapper.find('input').at(1);
    input.instance().value = 'arjun';
    input.simulate('change');
    expect(wrapper.state().buyer
    ).toEqual('arjun');
});
it('Testing  component 4', () => {
    const wrapper = mount(<Deltransfer/>);
    const input = wrapper.find('input').at(2);
    input.instance().value = 'aaa';
    input.simulate('change');
    expect(wrapper.state().owner).toEqual('aaa');
});
it('Testing  component 5', () => {
    const wrapper = mount(<Deltransfer/>);
    const input = wrapper.find('input').at(3);
    input.instance().value = '1000';
    input.simulate('change');
    expect(wrapper.state().numTokens).toEqual('1000');
});
   
})
