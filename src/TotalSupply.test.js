import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TotalSupply from './GetTotalSupply'
import { mount } from 'enzyme';

describe("Test totalsupply Component",()=>{
    it('Testing CreateToken component1', () => {
        const wrapper = mount(<TotalSupply/>);
        const input = wrapper.find('input').at(0);
        input.instance().value = '1';
        input.simulate('change');
        expect(wrapper.state().Id).toEqual('1');
});
   
})
