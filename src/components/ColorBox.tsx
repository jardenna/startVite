import { FC } from 'react';

interface ColorBoxProps {
  className: string;
}
const ColorBox: FC<ColorBoxProps> = ({ className }) => (
  <section className="grid grid-col-5">
    <div className={`box box1 ${className}`} />
    <div className={`box box2 ${className}`} />
    <div className={`box box3 ${className}`} />
    <div className={`box box4 ${className}`} />
    <div className={`box box5 ${className}`} />
  </section>
);
export default ColorBox;
