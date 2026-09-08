type PackageCardProps = {
  name: string
  price: string
  data: string
}

function PackageCard({
  name,
  price,
  data,
}: PackageCardProps) {
  return (
    <div className="package-card">
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{data}</p>

      <button>Xem chi tiết</button>
    </div>
  )
}

export default PackageCard