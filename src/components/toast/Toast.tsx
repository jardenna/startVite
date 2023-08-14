import { FC, useState } from 'react';

import './_toast.scss';

interface ToastProps {}
const Toast: FC<ToastProps> = () => {
  const [activeClass, setActiveClass] = useState('');

  const handleOpenToast = () => {
    setActiveClass('active');
  };
  return (
    <>
      <div className={`toast ${activeClass}`}>
        <div className="toast-content">
          <i className="icon icon-success" />

          <div className="message">
            <span className="text text-1">Success</span>
            <span className="text text-2">Your changes has been saved</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setActiveClass('');
          }}
        >
          <i className="icon icon-failure" />
        </button>

        <div className="progress" />
      </div>

      <button type="button" onClick={handleOpenToast}>
        Show Toast
      </button>
    </>
  );
};
export default Toast;
