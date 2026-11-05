export default function RandomWordsPanel({ words, isLoading, error, onRefresh }) {
  return (
    <main>
      <section className="content-card">
        <header>
          <h1>Babylonian Library</h1>
        </header>
        <div className="generated-text" aria-live="polite">
          {isLoading && <p role="status">Loading words...</p>}
          {error && <p className="error-message" role="alert">{error}</p>}
          {!isLoading && !error && <p>{words.join(' ')}</p>}
        </div>
        <button className="refresh-button" type="button" onClick={onRefresh} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get new words'}
        </button>
      </section>
    </main>
  )
}
