import React from 'react';
import {Row, Col } from 'antd';

import FormWrapper from './FormWrapper';


class Landing extends React.Component {

  render() {
    return (
      <Row>
        <Col span={6} offset={9}>
          <FormWrapper/>
        </Col>
      </Row>
    );
  }
}

export default Landing;
