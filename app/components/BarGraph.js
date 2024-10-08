// components/BarChart.js
import React from "react";

const populations = [
  { country: "India", population: 1406631786 },
  { country: "Pakistan", population: 233500636 },
  { country: "Bangladesh", population: 172518940 },
  { country: "Sri Lanka", population: 21877894 },
  { country: "Nepal", population: 30496279 },
  { country: "Bhutan", population: 787941 },
  { country: "Maldives", population: 521021 },
  { country: "Afghanistan", population: 42235038 },
];

const BarChart = () => {
  const maxPopulation = Math.max(...populations.map((p) => p.population));

  // Set the number of intervals for the y-axis
  const intervals = 5;
  const intervalStep = maxPopulation / intervals;

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-6">South Asian Countries Population</h1>
      <div className="flex">
        {/* Y-Axis with intervals */}
        <div className="flex flex-col justify-between h-[320px] pr-4">
          {/* Reverse order to show 0 at the bottom and increase upwards */}
          {[...Array(intervals + 1)].map((_, index) => (
            <p key={index} className="text-sm text-gray-700 text-right">
              {/* Intervals start at 0 and go upwards */}
              {(intervalStep * (intervals - index)).toLocaleString()}
            </p>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 items-end bg-gray-200">
            {populations.map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Bar */}
                <p className="text-xs text-gray-500">{data.population.toLocaleString()}</p>

                <div
                  className="bg-blue-500 w-10"
                  style={{
                    height: `${(data.population / maxPopulation) * 300}px`, // Scale bars based on max population
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 mt-2">
            {populations.map((data, index) => (
              <p key={index} className="text-sm text-center">{data.country}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
