import "./menu-item.styles.scss";

type MenuProps = {
  title: string;
  key: number;
  imageUrl: string;
  size?: string;
};

const MenuItem = ({ title, imageUrl, size }: MenuProps) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`menu-item ${size}`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
