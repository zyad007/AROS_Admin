import React from 'react';

export default function List({ obstacles }) {
  // Sort obstacles based on the number of reports in descending order
  const sortedObstacles = obstacles.sort((a, b) => b.numberOfReports - a.numberOfReports);

  return (
    <div className="list-container bg-white p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Number of Reports</th>
          </tr>
        </thead>
        <tbody>
          {sortedObstacles.map((obstacle, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="border p-2">{obstacle.type}</td>
              <td className="border p-2">{obstacle.address}</td>
              <td className="border p-2">{obstacle.numberOfReports}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
