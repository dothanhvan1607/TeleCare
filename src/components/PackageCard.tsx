import { Link } from 'react-router-dom'

type PackageCardProps = {
  id: number
  name: string
  price: number
  data: string
  cycle: string
  category: string
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

function PackageCard({
  id,
  name,
  price,
  data,
  cycle,
  category,
  isFavorite,
  onToggleFavorite,
}: PackageCardProps) {
  return (
    <article className="package-card">
      <div className="package-card-top">
        <span className="package-category">
          {category}
        </span>

        <button
          type="button"
          className={`favorite-button ${
            isFavorite ? 'is-favorite' : ''
          }`}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Bỏ lưu gói ${name}`
              : `Lưu gói ${name}`
          }
          onClick={() => onToggleFavorite(id)}
        >
          {isFavorite ? '♥ Đã lưu' : '♡ Quan tâm'}
        </button>
      </div>

      <h3>{name}</h3>

      <p className="package-price">
        {price.toLocaleString('vi-VN')}đ
      </p>

      <ul>
        <li>Dung lượng: {data}</li>
        <li>Chu kỳ: {cycle}</li>
      </ul>

      <Link
        to={`/packages/${id}`}
        className="package-button"
      >
        Xem chi tiết
      </Link>
    </article>
  )
}

export default PackageCard