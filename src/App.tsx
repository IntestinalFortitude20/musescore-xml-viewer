import './App.css'
import Header from './components/Header'
import FileUploadPanel from './components/FileUploadPanel'
import ScoreInfo from './components/ScoreInfo'
import RenderingArea from './components/RenderingArea'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <aside className="app-sidebar">
          {/* File upload panel: handles .mscz / .mscx / .musicxml uploads */}
          <FileUploadPanel />
          {/* Score metadata extracted from the uploaded file */}
          <ScoreInfo />
        </aside>
        <section className="app-content">
          {/* Sheet music rendering area — notation renderer will mount here */}
          <RenderingArea />
        </section>
      </main>
    </div>
  )
}

export default App
