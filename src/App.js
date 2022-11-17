import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
     <Routes>
     <Route path='/' element={<ItemListContainer />}/>
     <Route path='/category/:category' element={<ItemListContainer />}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}


export default App;