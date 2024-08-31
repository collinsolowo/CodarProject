import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './home/home'
import Matches from './matches/matches';
import Results from './results/results';
function App(){
  return(
    <>

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/matches' element={<Matches/>}></Route>
        <Route path='/results' element={<Results/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App