/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';

interface ArrayItem {
  transId: number;
  fli: Array<{ opt: string; opt2: string }>;
}

const PublicPage: React.FC = () => {
  // Define your initial array
  const initialArray: ArrayItem[] = [
    { transId: 1, fli: [{ opt: '', opt2: '' }] },
    { transId: 2, fli: [{ opt: '', opt2: '' }] },
    { transId: 3, fli: [{ opt: '', opt2: '' }] },
  ];

  // State to hold the array
  const [array, setArray] = useState<ArrayItem[]>(initialArray);

  // Function to update the fli value for all items with the same transId
  const updateFliForTransId = (
    transId: number,
    newValue: Array<{ opt: string; opt2: string }>,
  ) => {
    setArray((prevArray) =>
      prevArray.map((item) => {
        if (item.transId === transId) {
          // Update the fli value for the matching transId
          return {
            ...item,
            fli: newValue,
          };
        }
        return item;
      }),
    );
  };

  // Usage example: updating the fli value for all items with transId 2
  const updateFliForTransId2 = () => {
    const newFliValue = [
      {
        opt: 'newOpt',
        opt2: 'newOpt2',
      },
    ];

    updateFliForTransId(2, newFliValue);
  };

  return (
    <div>
      {array.map((item) => (
        <div key={item.transId}>
          <p>Transaction ID: {item.transId}</p>
          <p>fli Value: {JSON.stringify(item.fli)}</p>
        </div>
      ))}
      <button type="button" onClick={updateFliForTransId2}>
        Update fli for transId 2
      </button>
    </div>
  );
};

export default PublicPage;
