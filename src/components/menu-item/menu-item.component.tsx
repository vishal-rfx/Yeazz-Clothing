import "./menu-item.styles.scss";

type MenuProps = {
  title: string;
  key: number;
  imageUrl: string;
  size?: string;
};

const MenuItem = ({ title, imageUrl, size }: MenuProps) => (
  <div className={`menu-item ${size}`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
