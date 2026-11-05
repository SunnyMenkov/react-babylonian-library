const API_URL = 'https://random-word-api.herokuapp.com/word'

export async function fetchRandomWords(count = 24, signal) {
  const params = new URLSearchParams({ number: count })
  const response = await fetch(`${API_URL}?${params}`, { signal })

  if (!response.ok) {
    throw new Error(`Word API request failed with status ${response.status}`)
  }

  const words = await response.json()

  if (!Array.isArray(words) || words.length === 0 || !words.every((word) => typeof word === 'string')) {
    throw new Error('Word API returned an invalid response')
  }

  return words
}
