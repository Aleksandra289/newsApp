
import './App.css'
import ThemeProvider from './shared/theme/ThemeProvider'
import GlobalStyles from './styles/GlobalStyles'
import Text from './components/Text'
import Heading from './components/Heading'


function App() {

  return (
  <ThemeProvider>
    <GlobalStyles/>
    <h1>hello</h1>
    <Text fontSize='big' fontWeight='big' lineHeight='low'>Text</Text>
    <Heading headingType='h1' fontWeight='big'>jsjs</Heading>
  </ThemeProvider>
  )
}

export default App
