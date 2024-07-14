import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = ({ obstacles }) => {
  const nav = useNavigate()
  async function handleSolve(obstacle) {
    const result = await fetch('https://aros-server-new.onrender.com/obstacle/' + obstacle.id + '/fix', {
      method: "POST"
    })
    nav(0)
    // const response = await result.json()
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {obstacles.map((obstacle, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{obstacle.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{"HELWAN"}</td>
              <td className="px-6 py-4 whitespace-nowrap">{obstacle.lat}, {obstacle.lng}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {obstacle.status == "FIXED" ? (
                  <div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 m-2 rounded"
                      onClick={() => handleSolve(obstacle)}>Solved</button>
                  </div>
                ) : (
                  <div>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 m-2 rounded"
                      onClick={() => handleSolve(obstacle)}>Solve</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;