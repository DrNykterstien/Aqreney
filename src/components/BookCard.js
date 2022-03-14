import React from "react";
import { Card } from "antd";
import { Rate } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const { Meta } = Card;

function BookCard(props) {
  const { data } = props;
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  return (
    <Card
      hoverable
      style={{ margin: "6px", width: 240, borderRadius: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Rate
        defaultValue={4}
        character={({ index }) => customIcons[index + 1]}
        allowHalf={true}
      />
      <h3>{data.title}</h3>
      <h4>{data.author}</h4>
    </Card>
  );
}

export default BookCard;
