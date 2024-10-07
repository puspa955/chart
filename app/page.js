import React from 'react';

const southAsianCountries = [
  { name: 'India', population: 1406631786 },
  { name: 'Pakistan', population: 233500636 },
  { name: 'Bangladesh', population: 172518940 },
  { name: 'Sri Lanka', population: 21877894 },
  { name: 'Nepal', population: 30496279 },
  { name: 'Bhutan', population: 787941 },
  { name: 'Maldives', population: 521021 },
  { name: 'Afghanistan', population: 42235038 },
];

const BarChart = () => {
  const maxPopulation = Math.max(...southAsianCountries.map(c => c.population));

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center">South Asian Countries Population</h2>
      <div className="flex justify-center items-end h-100 bg-gray-200 p-16 rounded-lg border border-gray-400">
        {southAsianCountries.map((country) => (
          <div key={country.name} className="flex flex-col items-center" style={{ width: '80px' }}>
            <p className="mb-1 text-sm text-center">{country.population.toLocaleString()}</p>
            <div
              className="bg-blue-500 w-16"
              style={{
                height: `${(country.population / maxPopulation) * 320}px`,
                minHeight: '2px',
              }}
            ></div>
            <p className="mt-2 text-sm text-center">{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;



