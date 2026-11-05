import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchRandomWords } from '../api/randomWordsApi.js'

function requestWords(controller, setWords, setError, setIsLoading) {
  fetchRandomWords(24, controller.signal)
    .then((newWords) => {
      if (!controller.signal.aborted) {
        setWords(newWords)
      }
    })
    .catch((requestError) => {
      if (!controller.signal.aborted && requestError.name !== 'AbortError') {
        setError('Could not load words. Check your connection and try again.')
      }
    })
    .finally(() => {
      if (!controller.signal.aborted) {
        setIsLoading(false)
      }
    })
}

export default function useRandomWords() {
  const [words, setWords] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const controllerRef = useRef(null)

  const refresh = useCallback(() => {
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller
    setIsLoading(true)
    setError('')
    requestWords(controller, setWords, setError, setIsLoading)
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    controllerRef.current = controller
    requestWords(controller, setWords, setError, setIsLoading)

    return () => controllerRef.current?.abort()
  }, [])

  return { words, isLoading, error, refresh }
}
