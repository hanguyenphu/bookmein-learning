import React, { Component } from "react";
import { Row, Col, Preloader } from "react-materialize";
class Loading extends Component {
    render() {
        return (
            <Row>
                <Col s={4}></Col>
                <Col s={4}>
                    <Preloader active color='blue' flashing />
                </Col>
                <Col s={4}></Col>
            </Row>
        );
    }
}

export default Loading;
