import React from 'react';
import {
  Container,
  NavBar,
  View,
  Grid,
  Col,
  Tabs,
  Icon,
  Field,
  Button
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import './index.scss';

import BusiItem from 'common/busi-item'

export default class Index extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  componentDidMount() {
  }

  clickHandler = (item, e) => {
    if (item.icon == "search") {
      e.preventDefault();
      console.log(item);
    }
  }

  render() {
    let that = this;

    let node = <span></span>;
    const backNav = [{
      component: Link,
      icon: 'left-nav',
      title: '返回',
      to: '/',
      onlyActiveOnIndex: true,
    }];

    const rightNav = [{
      icon: 'search'
    }];


    return (
      <View>
        <NavBar
          amStyle="primary"
          title="商机列表"
          leftNav={backNav}
          rightNav={rightNav}
          onAction={this.clickHandler}
        />
        <Container scrollable>
          <div className="busi-opty-list">
            <div className="busi-opty-search" style={{ overflow: "hidden" }}>
              <div style={{ float: "left", width: "80%" }}>
                <Field
                  containerClassName="my-label"
                  placeholder="搜索商机名称"
                />
              </div>
              <div style={{ float: "right", width: "20%"  }}>
                <Button amStyle="primary" style={{ float: "right" }}>确定</Button>
              </div>
            </div>
            <Tabs>
              <Tabs.Item
                title={"全部"}
                key={1}
              >
              </Tabs.Item>
              <Tabs.Item
                title={"A"}
                key={2}
              >
              </Tabs.Item>
              <Tabs.Item
                title={"B"}
                key={3}
              >
              </Tabs.Item>
              <Tabs.Item
                title={"C"}
                key={4}
              >
              </Tabs.Item>
            </Tabs>

            <BusiItem />
            <BusiItem />
            <BusiItem />
          </div>
        </Container>
      </View >
    );
  }
}
