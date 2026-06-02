import "./styles/style.css";

const HoverLinks = ({ text }) => {
  return (
    <div className="hover-link">
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
