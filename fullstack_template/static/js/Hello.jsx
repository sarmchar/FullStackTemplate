import React, { Component } from "react";
import { render } from "react-dom";
import * as V from 'victory';
import { Button, Grid, Row, Col } from "react-bootstrap";

var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting: 'Hello ' + this.props.name};
        this.data = [
          {quarter: 1, earnings: 13000},
          {quarter: 2, earnings: 16500},
          {quarter: 3, earnings: 14250},
          {quarter: 4, earnings: 19000}
        ];

        // This binding is necessary to make `this` work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
    }

    personaliseGreeting(greeting) {
        this.setState({greeting: greeting + ' ' + this.props.name + '!'});
    }

    getPythonHello() {
        $.get(window.location.href + 'hello', (data) => {
            console.log(data);
            this.personaliseGreeting(data);
        });
    }

    render () {
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <hr/>
                <V.VictoryChart
                    domainPadding={20}
                    
                >
                    <V.VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                    <V.VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <V.VictoryBar
                        data={this.data}
                        x="quarter"
                        y="earnings" />
                </V.VictoryChart>
            </div>
        );
    }
}
