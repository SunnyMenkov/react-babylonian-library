import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main>
      <section className="content-card">
        <h1>Page not found</h1>
        <p className="not-found-description">
          That page is not in the library.
        </p>
        <Link className="home-link" to="/">Return to the home page</Link>
      </section>
    </main>
  )
}
