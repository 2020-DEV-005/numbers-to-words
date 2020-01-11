import React from 'react';
import {shallow} from 'enzyme'; 
import {AppConst} from '../../constants/App.const';
import Converter from './index';

describe(("<Converter/> component"), () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Converter/>);
    });

    it("Converter should contains the input element", () => {
        expect(wrapper.find('label').text()).toEqual(AppConst.INPUT_LABEL);
        expect(wrapper.find('input').length).toBe(1);
    });

    it("Input number should be valid", () => {
        let input1 = "e";
        let input2 = 20;
        let converter = wrapper.instance();
        expect(converter.isInputValid({value: input1})).toBeFalsy();
        expect(converter.isInputValid({value: input2})).toBeTruthy();
    });

});
