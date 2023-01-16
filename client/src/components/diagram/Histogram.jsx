import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import { getHistogram } from "../../http/DiagramAPI";

const Histogram = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHistogram().then((data) => {
      if (data.err) return alert(data.err);

      let arr = [["Всего товара", "Название категории", "Всего товара"]];
      data.map((item) =>
        arr.push([item.count, item.nameCategory, item.sum])
      );

      setData(arr);
    });
  }, []);

  //   const data = [
  //     ["Year", "Sales", "Expenses", "Profit"],
  //     ["2014", 1000, 400, 200],
  //     ["2015", 1170, 460, 250],
  //     ["2016", 660, 1120, 300],
  //     ["2017", 1030, 540, 350],
  //   ];

  const options = {
    chart: {
      title: "Количество товара по категориям",
    },
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default Histogram;
