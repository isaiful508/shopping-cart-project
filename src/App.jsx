
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

  console.log(products);

  return (
    <>
      <div className="main-container">

        <div className="cards-container">

          <div className="card">
            <img className='card-img' src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
            <h1>Tesr Test</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, quisquam vero. Eaque quae magnam illum.
            </p>
            <div className="card-footer">
              <h1>520 $</h1>
              <button className='add-btn'>Add To Cart</button>
            </div>
          </div>
          <div className="card">
            <img src="" alt="" />
          </div>
        </div>

        <div className="cart-container">
          <h1>This is card</h1>
        </div>

      </div>
    </>
  )
}

export default App
