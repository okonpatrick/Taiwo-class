import { useReducer } from "react";

// Initial state includes both count, totalPrice, discountPrice, and shippingFee
const initialState = {
  count: 0.00,
  totalPrice: 0,
  discountPrice: 299,
  shippingFee: 99,
};

// Reducer function now manages more complex state
const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        totalPrice: (state.count + 1) * 1000 - state.discountPrice + state.shippingFee,
      };
    case "decrement":
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
        totalPrice: (state.count > 0 ? state.count - 1 : 0) * 1000 - state.discountPrice + state.shippingFee,
      };
    default:
      return state;
  }
};

const FuncComp = () => {
  // Renamed the state variable from `initialState` to `state`
  const [state, dispatchFunc] = useReducer(ReducerFunc, initialState);

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl text-center p-8">Shopping Cart</h2>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

              <div className="space-y-4">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">${state.count * 1000}.00</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                  <dd className="text-base font-medium text-green-600">-${state.discountPrice}.00</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Shipping Fee</dt>
                  <dd className="text-base font-medium text-gray-900 dark:text-white">${state.shippingFee}.00</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd className="text-base font-bold text-white dark:text-white">${state.totalPrice}.00</dd>
                </dl>
              </div>

              <div className="flex items-center justify-between">
                <button onClick={() => dispatchFunc({ type: "decrement" })} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
                <span className="text-lg font-semibold text-white">{state.count}</span>
                <button onClick={() => dispatchFunc({ type: "increment" })} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
              </div>

              <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FuncComp;
