import NewsCard from '../components/Cards/NewsCard/NewsCard'
import image from '../assets/047f189d5fb428569ef24e282ba652ec.png'
import image2 from '../assets/42b29177e46d46d5fa3c0ece63cec048.png'
import Headline from '../components/Headline/Headline'
import TrustCard from '../components/Cards/TrustCard/TrustCard'

function Home(){
    return <>
    <h1>hello</h1>
    <NewsCard src={image} title='Denmark’s King Frederik X takes throne after Margrethe abdicates asd' description='Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication, ending her 52-year reign as the country’s lorem ipsum' chipText='25/12/2023'/>
    <NewsCard src={image2} title='You don’t feel alive’: Ukraine veterans struggling with the trauma of war' description='Denmark’s prime minister has proclaimed Frederik X king on the balcony of Christiansborg Palace in Copenhagen, after Queen Margrethe II formally signed her abdication' chipText='25/12/2023' isActive={false}/>
    <TrustCard title='News Recognized for Unparalleled Objectivity' description='Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued'/>
    <Headline title='Latest News'/>
    <Headline title="Latest News" isAddedLineBelow={false}/> 
    </>
}
export default Home;