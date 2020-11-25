export const SET_ORDERS = "SET_ORDERS";

import CONFIG from "../../config";

const path =
  process.env.NODE_ENV == "development" ? CONFIG.development : CONFIG.deploy;

export const fetchOrders = (email) => {
  return async (dispatch) => {
    // any async code you want!
    dispatch({
      type: SET_ORDERS,
      orders: [],
    });
    const response = await fetch(`${path}/api/seller/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    const resData = await response.json();
    if (resData.error) {
      const error = resData.msg;
      // Dispatch error

      return alert("Hay Un Error", error);
    }

    var loadedOrders = resData.orders;

    dispatch({
      type: SET_ORDERS,
      orders: loadedOrders,
    });
  };
};
