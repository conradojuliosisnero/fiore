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
