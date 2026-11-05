import RandomWordsPanel from '../../features/random-words/ui/RandomWordsPanel.jsx'
import useRandomWords from '../../features/random-words/hooks/useRandomWords.js'

export default function HomePage() {
  const { words, isLoading, error, refresh } = useRandomWords()

  return (
    <RandomWordsPanel
      words={words}
      isLoading={isLoading}
      error={error}
      onRefresh={refresh}
    />
  )
}
