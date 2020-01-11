import React from 'react';
import {AppConst} from '../../constants/App.const';
import './Converter.css';

class Converter extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    isInputValid = (e) => {
        return e.value && !isNaN(e.value);
    }

    render = () => {
        return  (<div className="converter-wrapper">
            <form>
                <label className="input-label">{AppConst.INPUT_LABEL}</label>
                <input type="number" onChange={this.isInputValid}/>
            </form>
        </div>);
    }
}

export default Converter;