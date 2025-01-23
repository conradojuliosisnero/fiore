import ProductCardSkeleton from "./SkeletonCard";

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <ProductCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
