import './ScoreInfo.css'

/**
 * ScoreInfo — displays metadata extracted from an uploaded score file.
 *
 * Currently shows a placeholder state. Metadata parsing will be
 * implemented in issue #3 (.mscz ingestion) and issue #4 (XML inspection).
 */
export default function ScoreInfo() {
  return (
    <div className="score-info card">
      <h2 className="score-info__title">Score Information</h2>

      {/* Placeholder — replace with extracted metadata once issue #3 is done */}
      <div className="score-info__empty">
        <span className="score-info__empty-icon" aria-hidden="true">🎼</span>
        <p>No score loaded yet.</p>
        <p className="score-info__empty-hint">
          Upload a file above to see title, composer, parts, and measure count.
        </p>
      </div>
    </div>
  )
}
