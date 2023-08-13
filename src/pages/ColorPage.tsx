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
      <ColorBox title="Danger" className="danger" boxLength={4} />
      <ColorBox title="Warning" className="warning" boxLength={4} />
      <ColorBox title="Info" className="info" boxLength={4} />
      <ColorBox title="Success" className="success" boxLength={4} />
    </div>
  </>
);
export default ColorPage;
