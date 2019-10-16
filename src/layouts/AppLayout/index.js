import React from 'react'
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;


class AppLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>

        </Header>
        <Content style={{ padding: '50px' }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }

}

export default AppLayout;