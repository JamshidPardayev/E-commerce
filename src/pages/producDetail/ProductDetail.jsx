// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Products from "@/components/products/Products";
// import { useProduct } from "@/api/hooks/useProduct";
// import ProductTabs from "@/components/ProductTabs"; 

// const ProductDetail = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const product = state?.product;
//   const { getProduct } = useProduct();
//   const { data, isLoading } = getProduct({ limit: 4 });

//   if (!product) {
//     return <div className="text-center py-20 text-lg">Mahsulot topilmadi.</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="bg-[#F9F1E7] py-5 pl-10 text-gray-700">
//         <div className="flex items-center gap-2 text-sm">
//           <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>Home</span>
//           <span>&gt;</span>
//           <span className="cursor-pointer hover:underline" onClick={() => navigate("/shop")}>Shop</span>
//           <span>&gt;</span>
//           <span className="font-semibold">{product.title}</span>
//         </div>
//       </div>
//       <main className="flex-grow py-12 px-6 lg:px-0 container mx-auto space-y-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <div className="bg-[#F9F1E7] p-6 rounded-lg flex justify-center items-center min-h-[400px]">
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="object-contain max-h-[450px] w-full"
//             />
//           </div>
//           <div className="space-y-5">
//             <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
//             <p className="text-gray-500 uppercase text-sm">{product.brand}</p>
//             <p className="text-2xl font-semibold text-[#B88E2F]">${product.price}</p>
//             <p className="text-gray-600 leading-relaxed">
//               {product.description || "Bu mahsulot haqida batafsil ma'lumot mavjud emas."}
//             </p>
//             <button
//               onClick={() => navigate("/cart")}
//               className="mt-4 px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition"
//             >
//               Add To Cart
//             </button>
//           </div>
//         </div>
//      <ProductTabs />
//         <div className="space-y-6">
//           <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
//           <Products data={data?.data?.products} loading={isLoading} count={4} />
//           <div className="text-center mt-8">
//             <button
//               onClick={() => navigate("/shop")}
//               className="px-8 py-3 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold rounded hover:bg-[#B88E2F] hover:text-white transition"
//             >
//               Show More
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default React.memo(ProductDetail);
import React from 'react'

const ProductDetail = () => {
  return (
    <div>
      Product Detail
    </div>
  )
}

export default ProductDetail
