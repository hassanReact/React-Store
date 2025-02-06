import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
        <div className="relative p-4 border rounded-lg shadow-sm bg-white transform transition-transform duration-300 hover:scale-105 cursor-pointer mt-3">
        <img
            src={product.image}
            alt=""
            className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.price} </p>
        <div className="flex items-center mt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
        </div>
        <div className="absolute bottom-4 right-4 border flex items-center justify-center w-8 h-8 
            bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700
            transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <span className="group-hover:hidden">+</span>
            <span className="hidden group-hover:block">Add to Cart</span>
        </div>
    </div>
    
    );
};

export default ProductCard;
