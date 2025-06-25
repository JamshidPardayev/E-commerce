import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartsGif from "@/assets/cartsGif.gif";
import { DeleteFilled } from "@ant-design/icons";
import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";

const CartView = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="max-w-[500px] mx-auto mt-4">
        <img src={cartsGif} alt="Cart is empty" className="w-full" />
      </div>
    );
  }

  return (
    <div className=" max-w-[1200px] mx-auto px-3 flex gap-4 max-md:flex-col">
      <div className="overflow-x-auto w-full">
        <table className="w-full border border-collapse mt-4">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Product</th>
              <th className="p-2 border text-center">Price</th>
              <th className="p-2 border text-center">Quantity</th>
              <th className="p-2 border text-center">Subtotal</th>
              <th className="p-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product?.id}>
                <td className="p-1 border-[1px] min-w-[250px]  flex items-center gap-2">
                  <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    className="w-[80px] h-[80px] object-cover rounded"
                  />
                  <p>{product?.title}</p>
                </td>
                <td className="p-1 border text-center">${product?.price}</td>
                <td className="p-1 border text-center">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => dispatch(decrementCart(product))}
                    className="px-2 disabled:opacity-50 text-[20px] font-medium cursor-pointer"
                  >
                    -
                  </button>
                  {product?.quantity}
                  <button
                    onClick={() => dispatch(incrementCart(product))}
                    className="px-2 cursor-pointer text-[20px] font-medium"
                  >
                    +
                  </button>
                </td>
                <td className="p-1 border text-center">
                  ${(product?.price * product?.quantity).toFixed(2)}
                </td>
                <td
                  onClick={() => dispatch(removeCart(product))}
                  className="px-2 text-center border border-black text-red-500 cursor-pointer"
                >
                  <DeleteFilled />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-200 flex flex-col justify-evenly mt-4 p-3 items-center max-w-[300px] h-[300px] rounded-[6px]">
        <h1 className="text-[25px] text-[#3A3A3A] w-[180px] mx-auto font-bold relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[180px] before:mx-auto before:duration-300 before:h-[2px] before:bg-[#3A3A3A]">
          Cart Totals📃
        </h1>
        <p className="text-[#B88E2F] text-[20px]">
          <span className="text-black text-[18px] font-medium mr-2">
            Total:
          </span>
          <strong>
            {" "}
            $
            {cart
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </strong>
        </p>
        <button className="w-[200px] h-[50px] rounded-[15px] border text-[#B88E2F] duration-300 hover:text-amber-700 cursor-pointer">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default React.memo(CartView);
