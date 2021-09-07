import React from "react";
import { Button } from "antd";
import "./App.less";
import { Layout, Menu, Breadcrumb } from "antd";
import { PositionCarouselDemo } from "./components/PositionCarouselDemo";

const { Header, Content, Footer } = Layout;
const App = () => (
  <div className="App">
    {/* <Button type="primary">Button</Button> */}
    <Layout className="layout" style={{ height: "100%" }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "50px" }}>
        <PositionCarouselDemo style={{ margin: "30px 0" }} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </div>
);

export default App;
