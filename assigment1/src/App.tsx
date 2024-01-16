
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
    <Text fontSize='bold' fontWeight='bold' lineHeight='low'>Text</Text>
    <Heading headingType='h1' fontWeight='semiBold'>jsjs</Heading>
  </ThemeProvider>
  )
}

export default App
