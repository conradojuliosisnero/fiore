import '../../styles/product-card.css';

const ProductCard = ({ product }) => {
  return (
    <div className="main">
      {/* Contenedor de la tarjeta */}
      <div className="card__container">
        {/* Imagenes de la tarjeta */}
        <div className="card__img">
          <img className="img1" src={product.image} alt={product.name} />
        </div>
        {/* Contenido de la tarjeta */}
        <div className="card__contend">
          <div className="card__text">
            <div className="leyend">{product.section}</div>
            <h2 className="tittle">{product.name}</h2>
            <p className="text">{product.description}</p>
          </div>
          <div className="card__price">
            <span className="card__price-one">{product.price}</span>
            <span className="card__price-tho">{product.discount}</span>
          </div>
          <button className="card__btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
