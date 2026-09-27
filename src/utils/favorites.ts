const STORAGE_KEY = 'telecare_favorite_packages'

export function getFavoriteIds(): number[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) return []

    const parsed: unknown = JSON.parse(stored)

    if (!Array.isArray(parsed)) return []

    return parsed.filter(
      (id): id is number =>
        typeof id === 'number' && Number.isInteger(id)
    )
  } catch {
    return []
  }
}

export function saveFavoriteIds(ids: number[]): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(ids)
    )
  } catch (error) {
    console.error('Không thể lưu gói quan tâm:', error)
  }
}