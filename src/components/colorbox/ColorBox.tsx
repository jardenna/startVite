import { FC } from 'react';
import './_colorbox.scss';

interface ColorBoxProps {
  title: string;
  className: string;
}
const ColorBox: FC<ColorBoxProps> = ({ title, className }) => (
  <section className={`grid  ${className}`}>
    <h3>{title} color 10% - 80%</h3>
    <div className={`box box1 ${className}`} />
    <div className="grid grid-col-4 ">
      <div className="box box2" />
      <div className="box box3" />
      <div className="box box4" />
      <div className="box box5" />
      <div className="box box6" />
      <div className="box box7" />
      <div className="box box8" />
      <div className="box box9" />
    </div>
  </section>
);
export default ColorBox;
