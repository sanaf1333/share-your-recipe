import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Col, ConfigProvider, Image, Row, Space } from "antd";
import { Layout } from "antd";
import React from "react";
import { Content, Header } from "antd/es/layout/layout";
import HeaderLogo from "@/components/header";
//const { Header, Footer, Sider, Content } = Layout;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const layoutStyle = {
  width: "100%",
  height: "100%",
};

const headerStyle = {
  backgroundColor: "#ffffff",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#8006ed",
                borderRadius: 2,
                fontSize: 12,
                colorBgLayout: "#ffffff",

                // Alias Token
                colorBgContainer: "#ffffff",
              },
            }}
          >
            <Layout style={layoutStyle}>
              <Header style={headerStyle}>
                <HeaderLogo />
              </Header>

              <Content>{children}</Content>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
