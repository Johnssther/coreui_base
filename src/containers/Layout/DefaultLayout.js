import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import MetisMenu from 'react-metismenu';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
import navigation1 from '../../_nav1';
import AsideList from './AsideList'


// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: localStorage.getItem('token') != null ? true : false
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
    localStorage.clear()
  }
  onProfile(e) {
    e.preventDefault()
    this.props.history.push('/profile')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed style={{ background: '#428bca', border: 'none' }}>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} onProfile={e => this.onProfile(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg" className="primary">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              {/* https://github.com/alpertuna/react-metismenu */}
              {/* <AppSidebarNav className="sidebar-nav" navConfig={navigation} {...this.props} router={router} /> */}
              <AsideList className="sidebar-nav" {...this.props} router={router}/>
              {/* <MetisMenu content={navigation1} {...this.props} router={router}/>, */}
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside {...this.props} router={router} />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
        {this.state.auth === false &&
          <Redirect from="/" to="/login" />
        }
      </div>
    );
  }
}

export default DefaultLayout;
