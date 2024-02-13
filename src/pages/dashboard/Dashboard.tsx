import React from "react";
import { useGetProduct } from "../../hooks/product";
import CustomCard from "../../components/card/Card";

const Dashboard: React.FC = () => {
  const { data } = useGetProduct();

  return (
    <>
      {data?.map((el, index) => (
        <div key={index}>
          <CustomCard data={el} />
        </div>
      ))}
    </>
  );
};

export default Dashboard;
