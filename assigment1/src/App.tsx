
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
import NavItem from './components/NavItem/NavItem'
import NewsCard from './components/Cards/NewsCard/NewsCard'
import image from './assets/047f189d5fb428569ef24e282ba652ec.png'
import image2 from './assets/42b29177e46d46d5fa3c0ece63cec048.png'
import CircleIcon from './components/CircleIcon/CircleIcon'

import ConfirmIcon from './icons/ConfirmIcon'
import ExclamationMarkIcon from './icons/ExclamationMarkIcon'
import CancelIcon from './icons/CancelIcon'



function App() {

  return (
  <ThemeProvider>
    <GlobalStyles/>
    <h1>hello</h1>
    <Text fontSize='small' fontWeight='bold' lineHeight='low'>Text</Text>
    <Heading headingType='h2' fontWeight='semiBold'>jsjs</Heading>
    <Chip>25/12/2023</Chip>
    <Chip showCircle={false}>25/12/2023</Chip>
    <Button size='small'>Button</Button>
    <Button size='small' isDisabled={true}>Disabled</Button>
    <br/>
    <br/>
    <NewsCard src={image} title='Denmark’s King Frederik X takes throne after Margrethe abdicates asd' description='Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication, ending her 52-year reign as the country’s lorem ipsum' chipText='25/12/2023'></NewsCard>
    <NewsCard src={image2} title='You don’t feel alive’: Ukraine veterans struggling with the trauma of war' description='Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication' chipText='25/12/2023' isActive={false}></NewsCard>
    <IconWrapper icon={AllNewsIcon} size='small' color='purple'></IconWrapper>
    <IconWrapper icon={HomeIcon} size='small' color='red'></IconWrapper>
    <IconWrapper icon={NewPostIcon} size='small' color='violet'></IconWrapper>
    <br/>
    <br/>
    <NavItem icon={HomeIcon} title='Home' isActive={true}></NavItem>
    <NavItem icon={AllNewsIcon} title='All news'></NavItem>
    <NavItem icon={NewPostIcon} title='New post'></NavItem>
    <CircleIcon status={ConfirmIcon}></CircleIcon>
    <CircleIcon status={ExclamationMarkIcon}/>
    <CircleIcon status={CancelIcon}/>
    
    
  </ThemeProvider>
  )
}

export default App
