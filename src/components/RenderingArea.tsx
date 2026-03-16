import './RenderingArea.css'

/**
 * RenderingArea — the main canvas where notation will be rendered.
 *
 * Placeholder until a notation renderer (e.g. OpenSheetMusicDisplay or
 * VexFlow) is integrated in issue #4.
 */
export default function RenderingArea() {
  return (
    <div className="rendering-area card">
      <div className="rendering-area__header">
        <h2 className="rendering-area__title">Notation View</h2>
      </div>

      {/* Placeholder — notation renderer will mount here (see issue #4) */}
      <div className="rendering-area__placeholder" role="img" aria-label="Sheet music will appear here">
        <span className="rendering-area__placeholder-icon" aria-hidden="true">🎹</span>
        <p className="rendering-area__placeholder-text">
          Sheet music will appear here once a file is loaded.
        </p>
        <p className="rendering-area__placeholder-hint">
          Future milestone: render notation using OpenSheetMusicDisplay (OSMD)
          or VexFlow — see{' '}
          <a
            href="https://github.com/IntestinalFortitude20/musescore-xml-viewer/issues/4"
            target="_blank"
            rel="noreferrer"
          >
            issue&nbsp;#4
          </a>
          .
        </p>
      </div>
    </div>
  )
}
