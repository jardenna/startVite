import { FC } from 'react';
import ColorBox from '../components/colorbox/ColorBox';

const ColorPage: FC = () => (
  <>
    <h1>Colors</h1>
    <h2> Reusable Scss colors</h2>
    <div className="grid grid-col-2 color-box-container">
      <ColorBox title="Primary" className="primary" />
      <ColorBox title="Secondary" className="secondary" />
      <ColorBox title="Tertiary" className="tertiary" />
      <ColorBox title="Gray" className="gray" />
      <ColorBox title="Danger" className="danger" />
      <ColorBox title="Warning" className="warning" />
      <ColorBox title="Info" className="info" />
      <ColorBox title="Success" className="success" />
    </div>
  </>
);
export default ColorPage;
