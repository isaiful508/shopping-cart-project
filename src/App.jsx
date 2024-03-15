
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './SingleProduct';

function App() {

  //product state
  const [products, setProducts] = useState([]);
  //cart state
  const [cart, setCart] = useState([]);

  //ueseEffect for fetch data
  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, [])


  //cart btn handler
  const handleBtnCart = (p) => {
    const isExists = cart.find(pd => pd.id == p.id);
    if (!isExists) {
      setCart([...cart, p]);
    }
    else {
      alert("Already added")
    }
  }

//remove btn handler
const handleRemoveBtn = (id) => {
  const newCart = cart.filter(item => item.id !== id)
  setCart(newCart);
}






  // console.log(cart);
  return (
    <>
      <div className="main-container">

        <div className="cards-container">
          {
            products.map((pd) => <SingleProduct handleBtnCart={handleBtnCart} product={pd} key={pd.id}></SingleProduct>)
          }

          <div className="card">
            <img src="" alt="" />
          </div>
        </div>

        <div className="cart-container">
          <div className="card-title">
            <h5>Name:</h5>
            <h5>Price:</h5>
          </div>

          <div>
            {
              cart.map((item, index) => (

                <div key={item.id}  className="cart-info">
                  <p>{index + 1}</p>
                  <h5>{item.title.slice(0,10)}</h5>
                  <h5>{item.price}</h5>
                  <button  onClick={()=> handleRemoveBtn(item.id)}>Remove</button>
                </div>

              ))
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default App
