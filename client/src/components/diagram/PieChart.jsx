import { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";

import { getPieChart } from "../../http/DiagramAPI";

const PieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPieChart().then((data) => {
      if (data.err) return alert(data.err);
      
      let arr = [["Task", "Hours per Day"]];
      data.map((item) => arr.push([item.nameCategory, item.sum]));

      setData(arr);
    });
  }, []);

  const options = {
    title: "Количество товара по категориям",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChart;
