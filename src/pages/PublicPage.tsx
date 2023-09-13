/* eslint-disable function-paren-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { FC, useState } from 'react';

const PublicPage: FC = () => {
  // Define your initial array
  const initialArray = [
    {
      transId: 1,
      fli: [
        {
          opt: '',
          opt2: '',
        },
      ],
    },
    {
      transId: 2,
      fli: [
        {
          opt: '',
          opt2: '',
        },
      ],
    },
    {
      transId: 3,
      fli: [
        {
          opt: '',
          opt2: '',
        },
      ],
    },
  ];

  // State to hold the array
  const [array, setArray] = useState<any>(initialArray);

  // Function to update the fli value for all items with the same transId
  const updateFliForTransId = (transId: any, newValue: any) => {
    setArray((prevArray: any) =>
      prevArray.map((item: { transId: any }) => {
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
      {array.map((item: any) => (
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
