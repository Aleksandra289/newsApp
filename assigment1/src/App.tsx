
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
import NewsCard from './components/Cards/NewsCard/NewsCard'
import image from './assets/047f189d5fb428569ef24e282ba652ec.png'
import image2 from './assets/42b29177e46d46d5fa3c0ece63cec048.png'
import CircleIcon from './components/CircleIcon/CircleIcon'
import Headline from './components/Headline/Headline'
import TrustCard from './components/Cards/TrustCard/TrustCard'
import Navigation from './components/Navigation/Navigation'
import { useState } from 'react'
import { items } from './shared/data/navigation/items'
import { ItemProps } from './shared/types/navItem'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './Routes/routes'
import Home from './pages/Home'
import AllNews from './pages/AllNews'
import NewPost from './pages/NewPost'

function App() {

  return (
  <ThemeProvider>
    <GlobalStyles/>
    <BrowserRouter>   
    <Routes>
      <Route path={routes.home} element={<Home/>}></Route> 
      <Route path={routes.newPost} element={<NewPost/>}></Route> 
      <Route path={routes.allNews} element={<AllNews/>}></Route> 
     </Routes>  
    </BrowserRouter>
    <h1>hello</h1>
    <Text fontSize='small' fontWeight='bold' lineHeight='low'>Text</Text>
    <Heading headingType='h2' fontWeight='semiBold'>jsjs</Heading>
    <Chip>25/12/2023</Chip>
    <Chip showCircle={false}>25/12/2023</Chip>
    <Button size='small'>Button</Button>
    <Button size='small' isDisabled={true}>Disabled</Button>
    <br/>
    <br/>
    <NewsCard src={image} title='Denmark’s King Frederik X takes throne after Margrethe abdicates asd' description='Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication, ending her 52-year reign as the country’s lorem ipsum' chipText='25/12/2023'/>
    <NewsCard src={image2} title='You don’t feel alive’: Ukraine veterans struggling with the trauma of war' description='Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication' chipText='25/12/2023' isActive={false}/>
    <IconWrapper icon={AllNewsIcon} size='small' color='purple'/>
    <IconWrapper icon={HomeIcon} size='small' color='red'/>
    <IconWrapper icon={NewPostIcon} size='small' color='violet'/>
    <br/>
    <br/>
    
    <TrustCard title='News Recognized for Unparalleled Objectivity' description='Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued'/>
    <CircleIcon status='success'/>
    <CircleIcon status='error'/>
    <CircleIcon status='warning'/> 
    <Headline title='Latest News'/>
    <Headline title="Latest News" isAddedLineBelow={false}/>
    <Navigation selectedItem={activeItem} items={items} onChangeActiveNavItem={onChangeActiveNavItem}/>
  </ThemeProvider>
  )
}

export default App
