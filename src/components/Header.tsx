import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="header-icon" aria-hidden="true">🎵</span>
          <h1 className="header-title">MuseScore XML Viewer</h1>
        </div>
        <p className="header-tagline">
          View music notation in your browser — no software installation required.
        </p>
      </div>
    </header>
  )
}
