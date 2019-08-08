import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  Delbal from './Delegatebalance'
import { mount } from 'enzyme';

describe("Test Delegate balance Component",()=>{
    it('Testing  component1', () => {
        const wrapper = mount(<Delbal/>);
        const input = wrapper.find('input').at(0);
        input.instance().value = '1';
        input.simulate('change');
        expect(wrapper.state().Id).toEqual('1');
});

it('Testing component 2', () => {
    const wrapper = mount(<Delbal/>);
    const input = wrapper.find('input').at(1);
    input.instance().value = 'arjun';
    input.simulate('change');
    expect(wrapper.state().delegate
    ).toEqual('arjun');
});
it('Testing  component 3', () => {
    const wrapper = mount(<Delbal/>);
    const input = wrapper.find('input').at(2);
    input.instance().value = 'aaa';
    input.simulate('change');
    expect(wrapper.state().owner).toEqual('aaa');
});
   
})
