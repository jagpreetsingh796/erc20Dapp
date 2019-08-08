import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CreateToken from './CreateToken'
import { mount } from 'enzyme';

describe('CreateToken component',()=>{
        it('Testing CreateToken component1', () => {
            const wrapper = mount(<CreateToken/>);
            const input = wrapper.find('input').at(0);
            input.instance().value = 'Jagpreet';
            input.simulate('change');
            expect(wrapper.state().Name).toEqual('Jagpreet');

        
            
        
        
                });
        it('Testing CreateToken component2', () => {
            const wrapper = mount(<CreateToken/>);
            const input = wrapper.find('input').at(1);
            input.instance().value = 'Ja';
            input.simulate('change');
            expect(wrapper.state().Symbol).toEqual('Ja');
        
              });
        it('Testing CreateToken component3', () => {
                const wrapper = mount(<CreateToken/>);
                const input = wrapper.find('input').at(2);
                input.instance().value ='100000';
                input.simulate('change');
                expect(wrapper.state().TotalSupply).toEqual('100000');
            
                  });
      it('Testing CreateToken component3', () => {
               const wrapper = mount(<CreateToken/>);
               const input = wrapper.find('input').at(3);
               input.instance().value ='Jagpreet';
               input.simulate('change');
            expect(wrapper.state().Name1).toEqual('Jagpreet');
                
                      });
        
        

    
})
