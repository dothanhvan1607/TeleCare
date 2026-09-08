import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          TeleCare
        </Link>

        <nav className="nav">
          <Link to="/">Trang chủ</Link>
          <Link to="/packages">Gói cước</Link>
          <Link to="/support">Hỗ trợ</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header