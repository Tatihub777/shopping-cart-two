import './App.css';
import { useState } from 'react';
import { data } from './data';

function ShopCart() {
    const [shoppingCart, setShoppingCart] = useState(data);
    const removeItem = (id) => {
        let newItem = shoppingCart.filter(product => product.id !== id);
        setShoppingCart(newItem)
      }

    return( 
        <div className='ShopCart'>
            <header className="App-header">
        <div className='App-header'>
         <h1>TechnoPort Shop</h1>
         
        </div>
        
       </header>
       <div>
            <div>
                <h2>
                YOUR CART
                </h2>
                <h3>There are {shoppingCart.length} items in your cart</h3>
            </div>
        </div>
        <section>
        <div className='CartContainer'>

    <div className='cartProduct'>  
      <div >
        {shoppingCart.map((item => {
            const {id, product, image, price} = item;
            return(
              
        <div className='cartItem' key={id}>
          <div>
            <img src={image} alt='product' width='150px'/>
          </div>
          <div>
            <p> {product} </p>
          </div>
          <div>
            <p> {price} £</p> 
          </div>
          <div>
            <button className='removeBtn' onClick={()=> removeItem(id)}>X</button>
          </div>
      </div>
            )
        }))
        }
        
</div>
        <div className='cartTotal'>
          <div>
            <h3>Total: 200 £</h3>
          </div>
          <div>
            <h4>We accept:</h4>
            <img src='https://www.elkor.lv/assets/cart/visa_electron.svg' alt='cards' width='50px' />
            <img src='https://www.elkor.lv/assets/cart/amex.svg' alt='cards' width='50px' />

          </div>
          
            <div>
                <button className='cartOrderBtn'>Create order</button>
            </div>
        </div>
    </div>
</div>
      <div>
          <button className='removeAllBtn' onClick={()=> setShoppingCart([])}>Remove order</button>
        </div>
      </section> 
     </div>
    )
}

export default ShopCart;