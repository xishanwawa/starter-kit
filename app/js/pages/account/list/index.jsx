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

import AccountItem from 'common/account-item'

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
      component: Link,
      icon: 'plus',
      title: '新增',
      to: '/account/add',
    }];


    return (
      <View>
        <NavBar
          amStyle="primary"
          title="客户列表"
          leftNav={backNav}
          rightNav={rightNav}
          onAction={this.clickHandler}
        />
        <Container scrollable>
          <div className="account-list">
             <AccountItem />
             <AccountItem />
             <AccountItem />
          </div>
        </Container>
      </View >
    );
  }
}
