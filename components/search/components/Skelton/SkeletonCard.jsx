const ProductCardSkeleton = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      {/* Imagen skeleton */}
      <div className="relative w-full h-64">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      </div>

      {/* Contenido skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded animate-pulse mt-4"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
