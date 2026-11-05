export default function AboutPage() {
  return (
    <main>
      <article className="content-card about-card">
        <h1>About the project</h1>
        <p>
          Babylonian Library fetches a fresh collection of random English words
          whenever you open the home page or choose “Get new words”.
        </p>
        <h2>Random Word API</h2>
        <p>
          The words come from the{' '}
          <a href="https://random-word-api.herokuapp.com/home" target="_blank" rel="noreferrer">
            Random Word API
          </a>
          . The app requests 24 words from its <code>/word</code> endpoint using
          the <code>number</code> query parameter.
        </p>
        <p>
          The request is made with the browser’s native <code>fetch</code> API.
          No API key is required. The interface also shows a loading state and
          offers a retry if the request fails.
        </p>
      </article>
    </main>
  )
}
