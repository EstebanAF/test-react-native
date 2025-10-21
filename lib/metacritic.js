const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/15.21.1/data/en_US/'

/**
 * Fetch ALL champion data from Data Dragon endpoint.
 * Returns an array of all champion objects with full info.
 */
export async function getAllChampionsInfo() {
  const response = await fetch(`${baseUrl}champion.json`)
  if (!response.ok) throw new Error('Failed to fetch champion list')
  const data = await response.json()
  // Data format: { data: { [championName]: object, ... } }
  return Object.values(data.data)
}

/**
 * Fetch specific champion data by name.
 * @param {string} name - The champion's name (e.g., "Aatrox")
 * Returns champion data object or undefined if not found.
 */
export async function getChampionInfo(name) {
  if (!name) return undefined
  // Data Dragon expects capitalization like "Aatrox"; convert first letter upper, rest lower
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  const response = await fetch(`${baseUrl}champion/${formattedName}.json`)
  if (!response.ok) return undefined
  const data = await response.json()
  // Data format: { data: { [championName]: object } }
  return data.data?.[formattedName]
}
