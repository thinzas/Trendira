import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out w-full h-64 object-cover object-center"
          src={image[0]}
          alt=""
        />
      </div>
      <div className="pt-3 pb-4 text-sm">
        <p className="text-sm font-medium line-clamp-2 min-h-[2.5rem]">
          {name}
        </p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
