import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
import './Tranding.css';
// import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { AiFillEye } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { BsChevronDoubleUp } from 'react-icons/bs';


const Tranding = () => {

  const products = [
    {
      id: 1,
      name: "Black T-Shirt",
      // href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹350",
      
    },
    {
      id: 1,
      name: "Black Baggy",
      // href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹1500",
      // color: "Black",
    },
    {
      id: 1,
      name: "Rainbow Shoes",
      // href: "#",
      imageSrc:
        "	https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxwcm9kdWN0fGVufDB8fDB8fHww",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹4000",
      // color: "Black",
    },
    {
      id: 1,
      name: "Grey Jackets",
      // href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹1800",
      // color: "Black",
    },
    {
      id: 1,
      name: "Fashion Bags",
      // href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-07-product-05.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹800",
      // color: "Black",
    },
    {
      id: 1,
      name: "Combow T-shirts",
      // href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹1670",
      // color: "Black",
    },
    {
      id: 1,
      name: "Basic Dark full sleves",
      // href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹750",
      // color: "Black",
    },
    {
      id: 1,
      name: "Air Nike Shoes",
      // href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1588099768531-a72d4a198538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹8000",
      // color: "Black",
    },
    // More products...
  ];

return (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Tranding

