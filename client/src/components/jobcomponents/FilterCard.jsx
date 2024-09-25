import React, { useState } from "react";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Pune",
      "Mumbai",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakhh", "1-5lah"],
  },
];

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="w-full max-w-xs p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold">Filter Jobs</h1>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index} className="mt-4">
          <h2 className="text-lg font-medium">{data.filterType}</h2>
          <div className="mt-2 space-y-2">
            {data.array.map((item, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="radio"
                  id={`${data.filterType}-${item}`}
                  name={data.filterType}
                  value={item}
                  onChange={() => handleFilterChange(data.filterType, item)}
                  checked={selectedFilters[data.filterType] === item}
                  className="mr-2"
                />
                <label htmlFor={`${data.filterType}-${item}`}>{item}</label>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Display selected filters */}
      <div className="mt-4">
        <ul className="list-disc list-inside">
          {Object.entries(selectedFilters).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterCard;
