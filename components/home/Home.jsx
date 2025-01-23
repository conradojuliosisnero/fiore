"use client";
import { ArrowRight, Flower} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Featureds from "./components/feautered/Featureds";
import ContactSection from "./components/contactSection/ContactSection";
import HomePageSkeleton from "./components/SkeltonHome/SkeletonHome";
import ErrorHome from "./components/ErrorHome/Error";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handlerclick = (id) => {
    router.push(`/shoping/product/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    const handlerReload = () => {
    window.location.reload();
  };

  if (loading) {
    return <HomePageSkeleton />;
  }

  if (error) { 
    return <ErrorHome error={error} reset={handlerReload} />;
  }


  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Flores hermosas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <div className="flex items-center gap-2 mb-4">
            <Flower className="w-8 h-8" />
            <h1 className="text-4xl md:text-6xl font-light tracking-wider">
              FIORE
            </h1>
            <Flower className="w-8 h-8" />
          </div>
          <p className="text-lg md:text-xl text-center max-w-xl mb-8 text-gray-100">
            Donde cada flor cuenta una historia única y cada arreglo es una obra
            de arte
          </p>
          <Link
            href="/shoping"
            className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Ver Colecciónes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <Featureds products={data} handlerclick={handlerclick} />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
