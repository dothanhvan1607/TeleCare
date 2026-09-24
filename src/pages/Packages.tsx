import { useMemo, useState } from 'react'
import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'

function Packages() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [cycle, setCycle] = useState('all')

  const filteredPackages = useMemo(() => {
    return packages.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchCategory =
        category === 'all' || item.category === category

      const matchCycle =
        cycle === 'all' || item.cycle === cycle

      return matchSearch && matchCategory && matchCycle
    })
  }, [search, category, cycle])

  return (
    <div className="container packages-page">
      <div className="packages-header">
        <h1>Tra cứu gói cước</h1>
        <p>
          Tìm kiếm và lọc các gói cước mô phỏng theo nhu cầu sử dụng.
        </p>
      </div>

      <div className="package-filters">
        <input
          type="text"
          placeholder="Nhập tên gói cước..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Tất cả nhóm</option>
          <option value="Data">Data</option>
          <option value="Combo">Combo</option>
          <option value="Thoại">Thoại</option>
          <option value="Dài hạn">Dài hạn</option>
        </select>

        <select
          value={cycle}
          onChange={(e) => setCycle(e.target.value)}
        >
          <option value="all">Tất cả chu kỳ</option>
          <option value="30 ngày">30 ngày</option>
          <option value="6 tháng">6 tháng</option>
        </select>
      </div>

      {filteredPackages.length > 0 ? (
        <div className="packages-grid">
          {filteredPackages.map((item) => (
            <PackageCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              data={item.data}
              cycle={item.cycle}
              category={item.category}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>Không tìm thấy gói cước phù hợp</h3>
          <p>Vui lòng thử lại với từ khóa hoặc bộ lọc khác.</p>
        </div>
      )}
    </div>
  )
}

export default Packages