export const searchProducts = async (searchTerm) => {
  try {
    const URL = `${process.env.GET_PRODUCTS}`;
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    const term = searchTerm.toLowerCase();

    return data.filter((product) => {
      // Búsqueda en campos de texto
      const nameMatch = product.name.toLowerCase().includes(term);
      const sectionMatch = product.section.toLowerCase().includes(term);
      const descriptionMatch = product.description.toLowerCase().includes(term);

      // Búsqueda en arrays
      const detailsMatch = product.details.some((detail) =>
        detail.toLowerCase().includes(term)
      );
      const occasionsMatch = product.occasions.some((occasion) =>
        occasion.toLowerCase().includes(term)
      );

      // Búsqueda en precio (convertir a string)
      const priceMatch = product.price.toString().includes(term);

      return (
        nameMatch ||
        sectionMatch ||
        descriptionMatch ||
        detailsMatch ||
        occasionsMatch ||
        priceMatch
      );
    });
  } catch (error) {
    return error;
  }
};
