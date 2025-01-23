export default function ProductDetailSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Skeleton */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="w-24 h-6 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </nav>

      {/* Product Details Skeleton */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Skeleton */}
          <div className="relative aspect-square bg-gray-200 rounded-lg animate-pulse" />

          {/* Details Skeleton */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4 animate-pulse" />

            {/* Price */}
            <div className="h-7 bg-gray-200 rounded-md w-1/4 mb-6 animate-pulse" />

            {/* Description */}
            <div className="space-y-2 mb-8">
              <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded-md w-4/6 animate-pulse" />
            </div>

            {/* Quantity Selector Skeleton */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-6 bg-gray-200 rounded-md animate-pulse" />
              <div className="w-32 h-10 bg-gray-200 rounded-full animate-pulse" />
            </div>

            {/* Actions Skeleton */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 h-12 bg-gray-200 rounded-full animate-pulse" />
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
            </div>

            {/* Details List Skeleton */}
            <div className="border-t pt-8">
              <div className="h-6 bg-gray-200 rounded-md w-1/3 mb-4 animate-pulse" />
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"
                  />
                ))}
              </div>
            </div>

            {/* Occasions Skeleton */}
            <div className="border-t pt-8 mt-8">
              <div className="h-6 bg-gray-200 rounded-md w-1/3 mb-4 animate-pulse" />
              <div className="flex flex-wrap gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
