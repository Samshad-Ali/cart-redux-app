import React from 'react'
import { AiFillDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

    const dispatch = useDispatch();
    const { cartItem, subtotal, shipping, tax, total } = useSelector(state => state.cart);

    const handleIncrement = (id) => {
        dispatch({
            type: 'increment',
            payload:id
        })
        dispatch({type:'Price'})

    }
    const handleDecrement = (id) => {
        dispatch({
            type: 'decrement',
            payload:id
        })
        dispatch({type:'Price'})

        
    }
    const deleteHandler = (id) => {
        dispatch({
            type: 'deleteFromCart',
            payload:id
        })
        dispatch({type:'Price'})
    }
  
  return (
      <div className='cart'>
          <main>
              {
                cartItem.length > 0 ? ( cartItem.map((i) => (
                    <CartItem name={i.name}
                    price={i.price}
                        quantity={i.quantity}
                        key={i.id}
                        image={i.image}
                        id={i.id}
                        decrement={handleDecrement}
                        increment={handleIncrement}
                        deleteHandler={deleteHandler}
                    />
                ))
                  )
                    : <h1>No Item Yet</h1>
           }
          </main>
          <aside>
              <h2>SubTotal : ₹{subtotal}</h2>
              <h2>Shipping : ₹{shipping }</h2>
              <h2>Tax : ₹{tax }</h2>
              <h2>Total : ₹{total}</h2>
          </aside>
    </div>
  )
}

export default Cart;

const CartItem = ({name,price,id,quantity,image,decrement,increment,deleteHandler}) => (
    <div className="cartItem">
   <img src={image} />
        <article>
            <h3> {name} </h3>
            <p>₹{price} </p>
        </article>
        <div>
            <button onClick={()=>decrement(id)} >-</button>
            <p>{quantity}</p>
            <button onClick={()=>increment(id)} >+</button>
        </div>
       <AiFillDelete className='dltBtn' onClick={()=>deleteHandler(id)} />
    </div>
)
