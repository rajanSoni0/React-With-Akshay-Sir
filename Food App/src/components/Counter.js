// Counter.js
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = (item) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="flex flex-col items-center">
      {/* ADD / Counter */}
      {cartItems.length === 0 ? (
        <button
          onClick={handleAddItem}
          className="px-6 py-1 text-green-600 border border-green-600 rounded-md font-semibold bg-white shadow-md hover:bg-green-50"
        >
          ADD
        </button>
      ) : (
        <div className="flex items-center gap-3 px-3 py-1 border border-green-600 rounded-md bg-white shadow-md">
          <button
            onClick={handleRemoveItem}
            className="text-green-600 font-bold text-lg px-2"
          >
            -
          </button>

          <span className="font-bold">{cartItems.length}</span>

          <button
            onClick={handleAddItem}
            className="text-green-600 font-bold text-lg px-2"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Counter;
