import React from 'react';
import {
  Grid,
  Col
} from 'amazeui-touch';

import './index.scss';

export default class BusiItem extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="busi-opty-item">
        <Grid>
          <Col cols={3} className="infor-item-title">项目名称</Col>
          <Col cols={3} className="text-right">编辑</Col>
        </Grid>
        <Grid>
          <Col cols={3}>客户的名称</Col>
          <Col cols={3} className="text-right">赵日天</Col>
        </Grid>
        <Grid>
          <Col cols={3}>已关闭</Col>
          <Col cols={3} className="text-right"><span className="monery-color" >20000</span></Col>
        </Grid>
        <Grid>
          <Col cols={3}>华南区</Col>
          <Col cols={3} className="text-right">操作</Col>
        </Grid>
      </div>
    );
  }
}
