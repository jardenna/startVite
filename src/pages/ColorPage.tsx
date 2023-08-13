import { FC } from 'react';
import ColorBox from '../components/colorbox/ColorBox';

const ColorPage: FC = () => (
  <>
    <h1>Colors</h1>
    <h2> Reusable Scss colors</h2>
    <div className="grid grid-col-3">
      <ColorBox title="Primary" className="primary" />
      <ColorBox title="Secondary" className="secondary" />
      <ColorBox title="Gray" className="gray" />
    </div>
  </>
);
export default ColorPage;
