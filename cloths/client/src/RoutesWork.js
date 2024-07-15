import React from 'react'
import {Routes,Route} from 'react-router-dom';
import ProductInfo from './component/ProductInfo';
import Home from './component/header/Home';



const RoutesWork = () => {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/men_tshirts' element={<ProductInfo />} />

      </Routes>
      
    </div>
  )
}

export default RoutesWork
