
import './App.css'
import ThemeProvider from './shared/theme/ThemeProvider'
import GlobalStyles from './styles/GlobalStyles'


function App() {

  return (
  <ThemeProvider>
    <GlobalStyles/>
    <h1>hello</h1>
  </ThemeProvider>
  )
}

export default App
