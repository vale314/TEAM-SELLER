export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";

import CONFIG from "../../config";

const path =
  process.env.NODE_ENV == "development" ? CONFIG.development : CONFIG.deploy;

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const userId = getState().auth.userId;

    const response = await fetch(`${path}/api/seller/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userId,
      }),
    });

    const resData = await response.json();

    if (resData.error) {
      const error = resData.msg;
      // Dispatch error

      return alert("Hay Un Error", error);
    }

    var loadedProducts = [];

    loadedProducts = resData.products;

    dispatch({
      type: SET_PRODUCTS,
      products: loadedProducts,
    });
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;

    const response = await fetch(`${path}/api/seller/delete-products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userId,
        productId: productId,
      }),
    });

    const resData = await response.json();

    if (resData.error) {
      const error = resData.msg;
      // Dispatch error

      return alert("Hay Un Error", error);
    }

    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch, getState) => {
    // any async code you want!
    const token = getState().auth.token;
    const userId = getState().auth.userId;
    const response = await fetch(`${path}/api/seller/new-product`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        title,
        description,
        imageUrl,
        price,
        ownerId: userId,
      }),
    });

    const resData = await response.json();

    if (resData.error) {
      const error = resData.msg;
      // Dispatch error

      return alert("Hay Un Error", error);
    }
    const {
      ProductId,
      ProductTitle,
      ProductDescription,
      ProductImageUrl,
      ProductPrice,
      ProductOwnerId,
    } = resData.product;

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: ProductId,
        title: ProductTitle,
        description: ProductDescription,

        imageUrl: ProductImageUrl,
        price: ProductPrice,
        ownerId: ProductOwnerId,
      },
    });
  };
};

export const updateProduct = (
  title,
  description,
  imageUrl,
  price,
  productId
) => {
  return async (dispatch, getState) => {
    dispatch(deleteProduct(productId));

    dispatch(createProduct(title, description, imageUrl, price));
  };
};
