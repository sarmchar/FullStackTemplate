import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

require('../css/styles.css');
var $ = require('jquery');

// import HeaderBackgroundImage from '../images/header.jpg';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    // addHeaderImg() {
    //     let headerBg = new Image();
    //     headerBg.src = HeaderBackgroundImage;
    // }

    render () {
        return (
            <div>
            <Hello name='World!' />
            </div>
        );
    }
}
