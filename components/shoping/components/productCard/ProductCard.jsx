"use client";
import "../../styles/product-card.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HotSale from "@/components/commons/hot-sale/HotSale";
import ButtonCart from "../buttonCart/ButtonCart";

const ProductCard = ({ product }) => {

  const router = useRouter();
  const handlerClick = () => {
    router.push(`/shoping/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-full transition-transform duration-200 hover:-translate-y-1 cursor-pointer">
      <div className="flex flex-col h-full">
        {product?.hot_sale && <HotSale />}
        <div className="relative w-full pt-[60%] overflow-hidden">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
            alt={product.name}
            width={100}
            height={100}
            src={product?.image}
            loading="lazy"
            quality={70}
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
            <span className="text-xl font-bold text-tertiary">
              {product.price}.000
            </span>
            <span className="text-xs text-gray-500 line-through">
              {product.discount}.000
            </span>
          </div>
          <div className="flex items-center justify-evenly">
            <Link
              href={`/shoping/product/${product.id}`}
              _blank="true"
              className=" w-full bg-secondary text-white mr-2 rounded-lg py-2 px-3 flex items-center justify-center gap-1 font-medium transition-colors hover:bg-primary hover:text-white"
            >
              <span>Comprar</span>
            </Link>
            {/* <ButtonCart id={product.id}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
