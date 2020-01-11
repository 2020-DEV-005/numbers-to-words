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
});
