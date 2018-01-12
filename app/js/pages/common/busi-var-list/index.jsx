import React from 'react';
import {
  Grid,
  Col
} from 'amazeui-touch';

import './index.scss';

export default class BusiVarList extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() { }

  render() {
    return (
      <div className="data-content">
        <Grid className="data-header">
          <Col cols={2}>行业</Col>
          <Col className="text-right" cols={2}>商机数量</Col>
          <Col className="text-right" cols={2}>合同金额</Col>
        </Grid>
        <div className="data-body">
          <Grid>
            <Col cols={2}>快速消费品</Col>
            <Col className="text-right" cols={2}>100</Col>
            <Col className="text-right" cols={2}><span className="monery-color" >20000</span></Col>
          </Grid>
        </div>
        <div className="data-footer">
          <Grid>
            <Col cols={4}></Col>
            <Col cols={2} className="text-right"><span>更多...</span></Col>
          </Grid>
        </div>
      </div>
    );
  }
}
