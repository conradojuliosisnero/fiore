export default function Featureds({ products, handlerclick }) {

  return (
    <section id="productos" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12 font-light">
          Nuestras Creaciones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products?.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handlerclick(product.id)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.price}.000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
