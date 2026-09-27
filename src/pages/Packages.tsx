import { useEffect, useMemo, useState } from 'react'
import PackageCard from '../components/PackageCard'
import { packages } from '../data/packages'
import {
  getFavoriteIds,
  saveFavoriteIds,
} from '../utils/favorites'

function Packages() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [cycle, setCycle] = useState('all')
  const [onlyFavorites, setOnlyFavorites] = useState(false)

  const [favoriteIds, setFavoriteIds] = useState<number[]>(
    getFavoriteIds
  )

  useEffect(() => {
    saveFavoriteIds(favoriteIds)
  }, [favoriteIds])

  function toggleFavorite(id: number) {
    setFavoriteIds((previous) => {
      if (previous.includes(id)) {
        return previous.filter((item) => item !== id)
      }

      return [...previous, id]
    })
  }

  const filteredPackages = useMemo(() => {
    return packages.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.trim().toLowerCase())

      const matchCategory =
        category === 'all' || item.category === category

      const matchCycle =
        cycle === 'all' || item.cycle === cycle

      const matchFavorite =
        !onlyFavorites || favoriteIds.includes(item.id)

      return (
        matchSearch &&
        matchCategory &&
        matchCycle &&
        matchFavorite
      )
    })
  }, [
    search,
    category,
    cycle,
    onlyFavorites,
    favoriteIds,
  ])

  return (
    <div className="container packages-page">
      <div className="packages-header">
        <h1>Tra cứu gói cước</h1>
        <p>
          Tìm kiếm và lựa chọn gói cước phù hợp với nhu cầu.
        </p>
      </div>

      <div className="package-filters">
        <input
          type="search"
          placeholder="Nhập tên gói cước..."
          aria-label="Tìm kiếm gói cước"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          aria-label="Lọc theo nhóm"
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
          aria-label="Lọc theo chu kỳ"
          value={cycle}
          onChange={(e) => setCycle(e.target.value)}
        >
          <option value="all">Tất cả chu kỳ</option>
          <option value="30 ngày">30 ngày</option>
          <option value="6 tháng">6 tháng</option>
        </select>
      </div>

      <div className="favorites-toolbar">
        <label className="favorites-filter">
          <input
            type="checkbox"
            checked={onlyFavorites}
            onChange={(e) =>
              setOnlyFavorites(e.target.checked)
            }
          />
          Chỉ xem gói quan tâm
        </label>

        <span>
          Đã lưu: {favoriteIds.length} gói
        </span>
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
              isFavorite={favoriteIds.includes(item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>Không tìm thấy gói cước phù hợp</h3>
          <p>
            Hãy thử thay đổi bộ lọc hoặc lựa chọn
            thêm các gói cước quan tâm.
          </p>
        </div>
      )}
    </div>
  )
}

export default Packages