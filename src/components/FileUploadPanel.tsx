import './FileUploadPanel.css'

/** Supported music notation file extensions.
 *  .mscz — MuseScore compressed (zip containing .mscx XML) — see issue #3
 *  .mscx — MuseScore uncompressed XML
 *  .musicxml / .xml — MusicXML (international standard)
 *  .mxl  — compressed MusicXML
 */
const ACCEPTED_EXTENSIONS = '.mscz,.mscx,.musicxml,.xml,.mxl'

export default function FileUploadPanel() {
  return (
    <div className="upload-panel card">
      <h2 className="upload-panel__title">Open a Score</h2>
      <p className="upload-panel__hint">
        Supported formats: <code>.mscz</code>, <code>.mscx</code>,{' '}
        <code>.musicxml</code>, <code>.xml</code>, <code>.mxl</code>
      </p>

      {/* Drop zone — file ingestion logic will be wired in issue #3 */}
      <label className="upload-panel__dropzone" htmlFor="file-input">
        <span className="upload-panel__dropzone-icon" aria-hidden="true">📂</span>
        <span className="upload-panel__dropzone-text">
          Drag &amp; drop a file here, or tap to browse
        </span>
        <input
          id="file-input"
          type="file"
          accept={ACCEPTED_EXTENSIONS}
          className="upload-panel__input"
          aria-label="Choose a music notation file"
          // TODO (issue #3): wire onChange handler for .mscz ingestion
        />
      </label>

      <p className="upload-panel__notice">
        Files are processed entirely in your browser — nothing is uploaded to a
        server.
      </p>
    </div>
  )
}
