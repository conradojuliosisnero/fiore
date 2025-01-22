"use client";
import "../../styles/product-card.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {

  const router = useRouter();
  const handlerClick = () => {
    router.push(`/shoping/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-full transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="relative w-full pt-[60%]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
            alt={product.name}
            width={100}
            height={100}
            src={product?.image}
            loading="lazy"
            quality={100}
            onClick={handlerClick}
          />
        </div>
        <div className="p-4 flex flex-col gap-2 flex-1">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              {product.section}
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              {product.name}
            </h2>
            <p className="text-xs text-gray-500 leading-snug">
              {product.description}
            </p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <span className="text-xl font-bold text-secondary">
              {product.price}.000
            </span>
            <span className="text-xs text-gray-500 line-through">
              {product.discount}.000
            </span>
          </div>
          <Link
            href={`/shoping/product/${product.id}`}
            _blank="true"
            className="bg-secondary text-white rounded-lg py-2 px-3 flex items-center justify-center gap-1 font-medium transition-colors hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span>Comprar</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
