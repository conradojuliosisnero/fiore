export default function HomePageSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="space-y-4 max-w-2xl">
            <div className="h-12 bg-gray-200 rounded-md w-3/4 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded-md w-full animate-pulse" />
            <div className="h-6 bg-gray-200 rounded-md w-5/6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Products Grid Skeleton */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="h-8 bg-gray-200 rounded-md w-1/4 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Product Image Skeleton */}
              <div className="aspect-square bg-gray-200 animate-pulse" />
              
              {/* Product Info Skeleton */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-200 rounded-md w-3/4 animate-pulse" />
                  <div className="h-5 bg-gray-200 rounded-md w-1/4 animate-pulse" />
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse" />
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[...Array(2)].map((_, j) => (
                    <div key={j} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}