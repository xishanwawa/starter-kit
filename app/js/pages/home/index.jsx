import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
  Grid,
  Col,
  Card
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import ReactEcharts from 'echarts-for-react';

import BusiItem from 'common/busi-item'
import BusiVarList from 'common/busi-var-list'
import './index.scss';

export default class Index extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  componentDidMount() {
  }

  getOption=()=>{
    return {
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '0',
            top: 0,
            //x2: 80,
            bottom: 0,
            width: '100%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '90%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: [
              { value: 60, name: '方案确定' },
              { value: 40, name: '商务沟通' },
              { value: 20, name: '签约' },
              { value: 80, name: '售前交流' },
              { value: 100, name: '立项' }
            ]
          }
        ]
      };
  }

  render() {
    return (
      <View>
        <NavBar
          amStyle="primary"
          title="销售看板"
        />
        <Container scrollable>
          <div className="data-view">
            <div className="business-opportunity">
              <div className="charts-content">
                <div className="data-view-item-title">
                  <Grid>
                    <Col cols={4}>总合同金额</Col>
                    <Col cols={2} style={{ textAlign: "right" }}><span className="monery-color" >8000</span>万元</Col>
                  </Grid>
                </div>
                <div className="charts-body">
                  <div className="charts-item" style={{ width: "50%" }}>
                    <div id="main">
                      <ReactEcharts
                        style={{height: '11em', width: '100%'}}
                        ref={(e) => { this.echarts_react = e; }}
                        option={this.getOption()}
                      />
                    </div>
                  </div>
                  <div className="charts-item">
                    <Grid>
                      <Col cols={2}>
                        <div className="charts-item-block color1">立项</div>
                      </Col>
                      <Col className="text-right" cols={2}>2</Col>
                      <Col className="text-right" cols={2}>3</Col>
                    </Grid>
                    <Grid>
                      <Col cols={2}>
                        <div className="charts-item-block color2">售前交流</div>
                      </Col>
                      <Col className="text-right" cols={2}>2</Col>
                      <Col className="text-right" cols={2}>3</Col>
                    </Grid>
                    <Grid>
                      <Col cols={2}>
                        <div className="charts-item-block color3">方案确认</div>
                      </Col>
                      <Col className="text-right" cols={2}>2</Col>
                      <Col className="text-right" cols={2}>3</Col>
                    </Grid>
                    <Grid>
                      <Col cols={2}>
                        <div className="charts-item-block color4">商务沟通</div>
                      </Col>
                      <Col className="text-right" cols={2}>2</Col>
                      <Col className="text-right" cols={2}>3</Col>
                    </Grid>
                    <Grid>
                      <Col cols={2}>
                        <div className="charts-item-block color5">签约</div>
                      </Col>
                      <Col className="text-right" cols={2}>2</Col>
                      <Col className="text-right" cols={2}>3</Col>
                    </Grid>
                  </div>
                </div>
              </div>
              <BusiVarList />
              <div className="data-icon">
                <Grid>
                  <Col cols={2}>
                    <Grid>
                      <Col cols={3}><div className="icon icon-a">A</div></Col>
                      <Col cols={3} className="icon-text">
                        <div>8商机</div>
                        <div><span className="monery-color">3000</span>万元</div>
                      </Col>
                    </Grid>
                  </Col>
                  <Col cols={2}>
                    <Grid>
                      <Col cols={3}><div className="icon icon-b">B</div></Col>
                      <Col cols={3} className="icon-text">
                        <div>8商机</div>
                        <div><span className="monery-color">3000</span>万元</div>
                      </Col>
                    </Grid>
                  </Col>
                  <Col cols={2}>
                    <Grid>
                      <Col cols={3}><div className="icon icon-c">C</div></Col>
                      <Col cols={3} className="icon-text">
                        <div>8商机</div>
                        <div><span className="monery-color">3000</span>万元</div>
                      </Col>
                    </Grid>
                  </Col>
                </Grid>
              </div>
              <BusiVarList />
              <BusiVarList />
              <BusiVarList />
            </div>
          </div>
          <List>
            <List.Item href="#" title="客户" />
          </List>
          <div className="new-infor-content">
            <div className="infor-header">最新商机</div>
            <div className="infor-body">
              <BusiItem />
              <BusiItem />
            </div>
          </div>
        </Container>
      </View>
    );
  }
}
