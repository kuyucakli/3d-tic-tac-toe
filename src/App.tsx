import './App.css'
import NavSecondary from './components/NavSecondary'

function App() {
  return (
    <main>
      <NavSecondary />
      <section id="section-board">
        <Board>

        </Board>
      </section>

    </main>
  )
}


const Board = () => (
  <div id="board">

  </div>
)


export default App
