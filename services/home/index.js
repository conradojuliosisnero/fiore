export async function getProductListHome() {
  try {
    const OPTIONS = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    };
    const URL = `${process.env.GET_HOME_PRODUCTS}`;
    const response = await fetch(URL, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}