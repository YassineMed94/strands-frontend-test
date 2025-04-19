import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchBreedsAndImages } from './breedsSlice';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a28fd0', '#ffbb28', '#00c49f', '#ff8042', '#8dd1e1', '#d0ed57'];


const BreedsChart: React.FC = () => {
const dispatch = useAppDispatch();
const breedData = useAppSelector((state) => state.breeds.breeds);
const loading = useAppSelector((state) => state.breeds.loading);
const error = useAppSelector((state) => state.breeds.error);

  useEffect(() => {
    dispatch(fetchBreedsAndImages());
  }, [dispatch]);

  if (loading) return  <svg width="80" height="80" viewBox="0 0 38 38"><g transform="translate(19 19)"><g transform="rotate(0)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.125"><animate attributeName="opacity" from="0.125" to="0.125" dur="1.2s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="1;0.125"></animate></circle></g><g transform="rotate(45)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.25"><animate attributeName="opacity" from="0.25" to="0.25" dur="1.2s" begin="0.15s" repeatCount="indefinite" keyTimes="0;1" values="1;0.25"></animate></circle></g><g transform="rotate(90)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.375"><animate attributeName="opacity" from="0.375" to="0.375" dur="1.2s" begin="0.3s" repeatCount="indefinite" keyTimes="0;1" values="1;0.375"></animate></circle></g><g transform="rotate(135)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.5"><animate attributeName="opacity" from="0.5" to="0.5" dur="1.2s" begin="0.44999999999999996s" repeatCount="indefinite" keyTimes="0;1" values="1;0.5"></animate></circle></g><g transform="rotate(180)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.625"><animate attributeName="opacity" from="0.625" to="0.625" dur="1.2s" begin="0.6s" repeatCount="indefinite" keyTimes="0;1" values="1;0.625"></animate></circle></g><g transform="rotate(225)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.75"><animate attributeName="opacity" from="0.75" to="0.75" dur="1.2s" begin="0.75s" repeatCount="indefinite" keyTimes="0;1" values="1;0.75"></animate></circle></g><g transform="rotate(270)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.875"><animate attributeName="opacity" from="0.875" to="0.875" dur="1.2s" begin="0.8999999999999999s" repeatCount="indefinite" keyTimes="0;1" values="1;0.875"></animate></circle></g><g transform="rotate(315)"><circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="1"><animate attributeName="opacity" from="1" to="1" dur="1.2s" begin="1.05s" repeatCount="indefinite" keyTimes="0;1" values="1;1"></animate></circle></g></g></svg>;
  if (error) return <p>Failed to load breeds.</p>;

  const top10 = Object.entries(breedData)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .map(([name, count]) => ({ name, value: count }));

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
        {top10.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </div>
  );
};

export default BreedsChart;
