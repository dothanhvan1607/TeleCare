import { Link, useParams } from 'react-router-dom'
import { packages } from '../data/packages'

function PackageDetail() {
  const { id } = useParams()

  const selectedPackage = packages.find(
    (item) => item.id === Number(id)
  )

  if (!selectedPackage) {
    return (
      <div className="container package-detail">
        <h1>Không tìm thấy gói cước</h1>

        <Link to="/packages" className="primary-button">
          Quay lại danh sách
        </Link>
      </div>
    )
  }

  return (
    <div className="container package-detail">
      <Link to="/packages" className="back-link">
        ← Quay lại danh sách
      </Link>

      <div className="detail-card">
        <span className="package-category">
          {selectedPackage.category}
        </span>

        <h1>{selectedPackage.name}</h1>

        <p className="detail-price">
          {selectedPackage.price.toLocaleString('vi-VN')}đ
        </p>

        <div className="detail-info">
          <p>
            <strong>Dung lượng:</strong>{' '}
            {selectedPackage.data}
          </p>

          <p>
            <strong>Chu kỳ:</strong>{' '}
            {selectedPackage.cycle}
          </p>

          <p>
            <strong>Mô tả:</strong>{' '}
            {selectedPackage.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PackageDetail