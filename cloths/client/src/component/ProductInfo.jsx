import React, { useEffect, useState } from 'react'

const ProductInfo = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6564/men_tshirts").then(response => {
      response.json().then(data => {
        setItems(data);
      });
    });
  });

  return (
    <div>

      {
        items.map(val => {
          return <div key={val._id}>
            <h2>{val.itemName}</h2>
            <h2>{val.itemPrice}</h2>
            <h2>{val.itemBrand}</h2>
          </div>
        })
      }
      
    </div>
  )
}

export default ProductInfo
