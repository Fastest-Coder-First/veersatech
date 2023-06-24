import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js/auto';
import { overallData } from '../utils/pie-mock-data';

const PieChart = () => {
  const chartRef = useRef(null);
  const [category, setCategory] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    Chart.register(...registerables);

    if(category.length===0 && categoryData.length===0 && color.length===0)
    {
        overallData.map((ele, idx) => {
            category.push(ele.category);
            categoryData.push(ele.categoryData);
            color.push(ele.color);
        })
    }
    const data = {
      labels: category,
      datasets: [{
        data: categoryData,
        backgroundColor: color
      }]
    };

    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: 'pie',
      data: data
    });

  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default PieChart;
