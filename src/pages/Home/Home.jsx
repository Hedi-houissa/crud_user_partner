import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import { getUsers } from "../../redux/action/user";
import { getPartners } from "../../redux/action/partner";
function Home() {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partnerReducer.partners);
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPartners());
  }, []);

  const data = [
    { name: "Users", Statistic: users?.length },
    { name: "Partners", Statistic: partners?.length },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="Statistic"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Statistic" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
}

export default Home;
