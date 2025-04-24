import React, { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchBreedsAndImages } from "./breedsSlice";
import Spinner from "../assets/Spinner";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#a28fd0",
  "#ffbb28",
  "#00c49f",
  "#ff8042",
  "#8dd1e1",
  "#d0ed57",
];

const BreedsChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const breedData = useAppSelector((state) => state.breeds.breeds);
  const loading = useAppSelector((state) => state.breeds.loading);
  const error = useAppSelector((state) => state.breeds.error);

  useEffect(() => {
    dispatch(fetchBreedsAndImages());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <p>Failed to load breeds.</p>;

  const top10 = Object.entries(breedData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, value: count }));

  const calculatePercentage = (value: number, data: { value: number }[]) => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const percent = ((value / total) * 100).toFixed(2);
    return `${percent}%`;
  };
  
  return (
    <div>
      <PieChart width={500} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={top10}
          cx="50%"
          cy="50%"
          outerRadius={150}
          label
        >
          {top10.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number) => calculatePercentage(value, top10)}
        />
        <Legend />
      </PieChart>
    </div>
  );
};

export default BreedsChart;
