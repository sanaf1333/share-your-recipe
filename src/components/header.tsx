"use client";

import { Col, Image } from "antd";
import React from "react";

const HeaderLogo = () => {
  return (
    <Col style={{ display: "flex", justifyContent: "center" }}>
      <Image
        src="/images/cookographyLogo.png"
        alt="Cookography logo"
        preview={false}
        width={300}
      />
    </Col>
  );
};

export default HeaderLogo;
