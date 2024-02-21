"use client";

import { Button } from "antd";
import React, { useState } from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sider
        width="25%"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      ></Sider>
    </>
  );
};

export default Sidebar;
