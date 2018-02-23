import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import HeaderContainer from './../containers/HeaderContainer';
import Groups from "../../groups/containers/GroupPageContainer";
import { Layout, Icon } from 'antd';
import { Row, Col } from 'antd';

import './App.css';
import Dashboard from "../../dashboard/components/Dashboard";
import Words from "../../words/containers/WordPageContainer";

const { Header, Sider, Content } = Layout;

class App extends Component {

    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsedWidth="0"
                    style={{ background: '#fff' }}
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Groups />
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff' }}>
                        <Row type="flex" justify="start">
                            <Col span={1}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Col>
                            <Col span={15}>
                                <HeaderContainer />
                            </Col>
                        </Row>
                    </Header>

                    <Content style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 20, background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/words/:groupId' component={Words} />
                            <Route exac path='/' component={Dashboard} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
