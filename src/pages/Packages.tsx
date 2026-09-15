import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'

function Packages() {
  return (
    <div className="container packages-page">
      <div className="packages-header">
        <h1>Tra cứu gói cước</h1>
        <p>
          Danh sách gói cước mô phỏng phục vụ cho prototype TeleCare.
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((item) => (
          <PackageCard
            key={item.id}
            name={item.name}
            price={item.price}
            data={item.data}
            cycle={item.cycle}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default Packages