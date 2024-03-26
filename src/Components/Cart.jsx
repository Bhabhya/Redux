import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/Cartslice";

const Cart = () => {
  
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <Section className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h2>PRODUCTS</h2>
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <CartItem key={index}>
                  <div className="image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="title">
                    <strong>{item.title}</strong>
                    <p>${item.price}</p>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </CartItem>
              ))
            ) : (
              <p>CART IS EMPTY!!</p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Cart;

const Section = styled.div`
  margin-top: 20px;

  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;

  .image {
    margin-right: 20px;
  }

  .image img {
    width: 100px;
    height: 100px;
  }

  .title {
    text-align: left;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
  }
`;
