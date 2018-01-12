import React from 'react';
import {
  render,
} from 'react-dom';

import { Link, hashHistory, browserHistory, Router, Route, IndexRoute } from 'react-router';

import {
  Container,
  TabBar,
} from 'amazeui-touch';

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const {
      location,
      params,
      children,
      ...props,
    } = this.props;
    const {
      router
    } = this.context;
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>
        <TabBar
          amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            title="看板"
            icon = "bars"
            selected={router.isActive('/', true)}
            to="/"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            title="商机"
            icon = "pages"
            selected={router.isActive('/busiopty', true)}
            to="/busiopty"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            title="客户"
            icon = "person"
            selected={router.isActive('/account', true)}
            to="/account/list"
            onlyActiveOnIndex
          />
        </TabBar>
      </Container>
    );
  }
}

import Index from './pages/home';

import BusiOptyList from './pages/busi-opty/list';

import AccountList from './pages/account/list';

import AccountAdd from './pages/account/add';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="busiopty" component={BusiOptyList} />
      <Route path="account/list" component={AccountList} />
      <Route path="account/add" component={AccountAdd} />
    </Route>
  </Router>
);


//import project from './routes/project';
// import app from 'app';

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
