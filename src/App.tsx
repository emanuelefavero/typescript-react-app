import './App.css'
import Hello from './components/Hello'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <Hello name='World' color='magenta' />

      {/* Fetch Data from API or Database */}
      <Posts />
    </>
  )
}

export default App
