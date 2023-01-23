import "./banner.css";
const Banner: React.FC<{ alt: string; src: string }> = ({ alt, src }) => {
  return <img src={src} alt={alt} />;
};

export default Banner;
