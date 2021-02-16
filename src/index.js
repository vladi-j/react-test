import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import {content} from './SlideElements';

ReactDOM.render(
    <Slider content={content}/>,
    document.getElementById('root')
); 