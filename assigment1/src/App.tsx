
import './App.css'
import ThemeProvider from './shared/theme/ThemeProvider'
import GlobalStyles from './styles/GlobalStyles'
import Text from './components/Text/Text'
import Heading from './components/Heading/Heading'
import Chip from './components/Chip/Chip'
import Button from './components/Button/Button'
import image from './assets/047f189d5fb428569ef24e282ba652ec.png'
import Card from './components/Card/Card'

function App() {

  return (
  <ThemeProvider>
    <GlobalStyles/>
    <h1>hello</h1>
    <Text fontSize='small' fontWeight='bold' lineHeight='low'>Text</Text>
    <Heading headingType='h2' fontWeight='semiBold'>jsjs</Heading>
    <Chip>25/12/2023</Chip>
    <Chip showCircle={false}>25/12/2023</Chip>
    <Button size='medium'>Button</Button>
    <Button size='large' isDisabled={true}>Disabled</Button>
    <Card src={image}>
      hshshhsh   
    </Card>
  </ThemeProvider>
  )
}

export default App
