import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-2xl font-bold">Your cart is empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white"
          >
            <div>
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => dispatch(addItem(item))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold">Total: ₹{totalPrice}</span>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;
