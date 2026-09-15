type PackageCardProps = {
  name: string
  price: number
  data: string
  cycle: string
  category: string
}

function PackageCard({
  name,
  price,
  data,
  cycle,
  category,
}: PackageCardProps) {
  return (
    <div className="package-card">
      <span className="package-category">{category}</span>

      <h3>{name}</h3>

      <p className="package-price">
        {price.toLocaleString('vi-VN')}đ
      </p>

      <ul>
        <li>Dung lượng: {data}</li>
        <li>Chu kỳ: {cycle}</li>
      </ul>

      <button className="package-button">
        Xem chi tiết
      </button>
    </div>
  )
}

export default PackageCard