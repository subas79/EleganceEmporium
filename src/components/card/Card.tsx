import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const CustomCard: React.FC = ({ data }: any) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={data.image[0]} />}
  >
    <Meta title={data.title} description={"Rs." + data.price} />
  </Card>
);

export default CustomCard;