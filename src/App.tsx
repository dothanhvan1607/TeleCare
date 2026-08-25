import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Packages from './pages/Packages'
import PackageDetail from './pages/PackageDetail'
import Support from './pages/Support'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Trang chủ</Link> |{' '}
        <Link to="/packages">Gói cước</Link> |{' '}
        <Link to="/support">Hỗ trợ</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetail />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  )
}

export default App