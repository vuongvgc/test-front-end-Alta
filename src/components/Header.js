import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container header__box">
        <div className="header__left">
          <div className="logo">
            <Link to="/">
              <img
                className="logo__img"
                src="./img/Logo-Alta-Software_blackBG.png"
                alt="Alta Software"
              />
            </Link>
          </div>
          <div className="slogan">
            <p>Thách thức công nghệ đổi mới tương lai</p>
          </div>
        </div>
        <nav className="header__right">
          <Link to="/" className="nav-link">
            <p>Trang Chủ</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
