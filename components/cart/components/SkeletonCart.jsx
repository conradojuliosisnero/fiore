export default function CartSkeleton() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="w-32 h-6 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="h-10 w-48 bg-gray-200 rounded-md animate-pulse mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex gap-6 p-4 bg-white rounded-lg border"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-md animate-pulse" />

                <div className="flex-grow">
                  <div className="flex justify-between mb-4">
                    <div className="h-6 w-48 bg-gray-200 rounded-md animate-pulse" />
                    <div className="h-6 w-6 bg-gray-200 rounded-md animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-6 w-16 bg-gray-200 rounded-md animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="h-6 w-40 bg-gray-200 rounded-md animate-pulse mb-6" />

              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse" />
                    <div className="h-4 w-16 bg-gray-200 rounded-md animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="h-12 w-full bg-gray-200 rounded-full animate-pulse mt-6" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
