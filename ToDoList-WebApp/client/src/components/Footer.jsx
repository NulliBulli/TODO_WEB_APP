import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="container text-center" style={{ position: "relative" }}>
      <div className="row align-items-end">
        <Link to="/tasks">
          <button className="col btn">TODO</button>
        </Link>

        <button className="col btn">Links</button>
        <Link to="/impressum">
          <button className="col btn">Impressum</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
