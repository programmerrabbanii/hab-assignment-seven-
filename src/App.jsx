import Allocate from './components/Allocate'
import Bannar from './components/Bannar'
import BannarBottom from './components/BannarBottom'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import OutFound from './components/OutFound'
import TrainYour from './components/TrainYour'

function App() {
  return (
    <div className='bg-[#002228]'>
     <Navbar></Navbar>
     <Bannar></Bannar>
     <BannarBottom></BannarBottom>
     <TrainYour></TrainYour>
     <Carousel></Carousel>
     <Allocate></Allocate>
     <OutFound></OutFound>
     <Footer></Footer>
    </div> 
  ) 
}

export default App
