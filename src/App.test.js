import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';


describe('App component',()=>{
  
  it('Testing App component1', () => {
  const wrapper = shallow(<App />);
        const text = wrapper.find('h4').at(0).text();
        expect(text).toEqual('Create your ERC20 token here');
  


      });
  it('Testing App component2', () => {
    const wrapper = shallow(<App />);
     const text = wrapper.find('h4').at(1).text();
    expect(text).toEqual('Check your supply here');


    });
    it('Testing App component3', () => {
      const wrapper = shallow(<App />);
       const text = wrapper.find('h4').at(2).text();
      expect(text).toEqual('Transfer');
  
  
      });
      it('Testing App component4', () => {
        const wrapper = shallow(<App />);
         const text = wrapper.find('h4').at(3).text();
        expect(text).toEqual('Assign Delegate');
    
    
        });
        it('Testing App component5', () => {
          const wrapper = shallow(<App />);
           const text = wrapper.find('h4').at(4).text();
          expect(text).toEqual('Check Delegate balance');
      
      
          });
          it('Testing App component6', () => {
            const wrapper = shallow(<App />);
             const text = wrapper.find('h4').at(5).text();
            expect(text).toEqual('Delegate Transfer');
        
        
            });
        
        
    


  });