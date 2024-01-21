
import './App.css'
import ThemeProvider from './shared/theme/ThemeProvider'
import GlobalStyles from './styles/GlobalStyles'
import Text from './components/Text/Text'
import Heading from './components/Heading/Heading'
import Chip from './components/Chip/Chip'
import Button from './components/Button/Button'
import NewPostIcon from './icons/NewPostIcon'
import IconWrapper from './components/IconWrapper/IconWrapper'
import HomeIcon from './icons/HomeIcon'
import AllNewsIcon from './icons/AllNewsIcon'



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
    <Button size='extraLarge' isDisabled={true}>Disabled</Button>
    <IconWrapper icon={AllNewsIcon} size='l' color='purple'></IconWrapper>
    <IconWrapper icon={HomeIcon} size='s' color='red'></IconWrapper>
    <IconWrapper icon={NewPostIcon} size='m' color='violet'></IconWrapper>
  </ThemeProvider>
  )
}

export default App
