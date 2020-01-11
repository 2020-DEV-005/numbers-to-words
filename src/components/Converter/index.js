import React from 'react';
import {AppConst} from '../../constants/App.const';
import './Converter.css';

class Converter extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render = () => {
        return  (<div className="converter-wrapper">
            <form>
                <label className="input-label">{AppConst.INPUT_LABEL}</label>
                <input type="number" />
            </form>
        </div>);
    }
}

export default Converter;