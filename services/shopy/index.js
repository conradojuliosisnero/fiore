export async function getProductList() {
  try {
    const OPTIONS = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    };
    const URL = `${process.env.GET_PRODUCTS}`;
    const response = await fetch(URL, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductById(id) {
  try {
    const OPTIONS = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    };
    const URL = `${process.env.GET_PRODUCT}?id=${id}`;
    const response = await fetch(URL, OPTIONS);
    //     id,
    // section,
    // name,
    // price,
    // image,
    // description,
    // discount,
    // details,
    // occasions,
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}
