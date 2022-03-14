import React from "react";
import { Row, Col } from "antd";

function BookList(props) {
  const { data } = props;

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
        <Col className="gutter-row" span={6}>
          {data}
        </Col>
      </Row>
    </>
  );
}

export default BookList;
