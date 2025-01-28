import style from "./rigth_bar.module.css";
interface RigthBarProps {
  className?: string;
}

const RigthBar: React.FC<RigthBarProps> = ({ className }) => {
  return <div className={className}></div>;
};

export default RigthBar;
