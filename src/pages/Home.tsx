import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Tìm gói cước phù hợp</h1>

        <p>
          Tra cứu và lựa chọn gói cước phù hợp với nhu cầu sử dụng.
        </p>

        <Link to="/packages" className="primary-button">
          Xem gói cước
        </Link>
      </section>
    </div>
  )
}

export default Home