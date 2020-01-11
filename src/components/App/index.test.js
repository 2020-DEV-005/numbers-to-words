import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'; 
import App from './index';
import {AppConst} from '../../constants/App.const';
import Converter from '../Converter/';

describe(("<App/> component"), () => {
    
    it("App should have the title", () => {
        let wrapper = shallow(<App/>);
        expect(wrapper.find("header h1").text()).toEqual(AppConst.APP_TITLE);     
    });

    it("App should load Converter component", () => {
        let wrapper = shallow(<App/>);
        expect(wrapper.find("Converter")).toBeDefined();
    });
});
