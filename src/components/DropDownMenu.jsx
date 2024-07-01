import React from 'react';

const DropdownMenu = ({ placeholder, options, value, onChange }) => {
    return (
        <div className='m-1'>
            <select 
                className='border-2 border-gray-300 rounded-md p-1 m-1' 
                value={value} 
                onChange={onChange} 
                style={{ width: '200px', marginTop: '1px', marginBottom: '1px' }}
            >
                <option value="" disabled hidden>{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default DropdownMenu;
