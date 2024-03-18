import { Col, Image, Row } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import React from "react";

const UserProfile = () => {
  return (
    <>
      <Row justify={"center"} align={"middle"}>
        <Col
          sm={24}
          md={22}
          lg={18}
          style={{
            backgroundColor: "#f3ebfa",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "5rem",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Image
            src="/images/profilePic.jpg"
            preview={false}
            width={150}
            height={150}
            style={{
              borderRadius: "50%",
              position: "absolute",
              transform: "translateX(-50%)",
              top: "-75px",
            }}
          />
          <Title level={2} style={{ marginTop: "-50px" }}>
            Sana Fatima
          </Title>
          <Col span={20}>
            <Text>Software Engineer | Baker | ajeeeeb ab or kia likhu mai</Text>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default UserProfile;
