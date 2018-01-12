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
      to: '/account/list',
      onlyActiveOnIndex: true,
    }];

    const rightNav = [{
      icon: 'search'
    }];


    return (
      <View>
        <NavBar
          amStyle="primary"
          title="客户新增"
          leftNav={backNav}
          rightNav={rightNav}
          onAction={this.clickHandler}
        />
        <Container scrollable>
          <div className="account-list">

          </div>
        </Container>
      </View >
    );
  }
}
