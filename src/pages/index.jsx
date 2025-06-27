import { Suspense } from '@/utils'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import NotFound from './notFound/NotFound'
const Layout = lazy(()=> import("./layout/Layout"))
const Home = lazy(()=> import("./home/Home"))
const Shop = lazy(()=> import("./shop/Shop"))
const About = lazy(()=> import("./about/About"))
const Contact = lazy(()=> import("./contact/Contact"))
const Wishlist = lazy(()=> import("./wishlist/Wishlist"))
const Cart = lazy(()=> import("./cart/Cart"))
const Checkout = lazy(()=> import("./checkout/Checkout"))
const ProductDetail = lazy(()=> import("./producDetail/ProductDetail"))

const MainRouters = () => {
  return (
    <>
    {
      useRoutes([
        {path: "/", element:<Suspense><Layout/></Suspense>, children: [
          {path: "/", element:<Suspense><Home/></Suspense>},
          {path: "/shop", element:<Suspense><Shop/></Suspense> },
          {path: "/about", element:<Suspense><About/></Suspense> },
          {path: "/contact", element:<Suspense><Contact/></Suspense> },
          {path: "/wishlist", element:<Suspense><Wishlist/></Suspense> },
          {path: "/cart", element:<Suspense><Cart/></Suspense> },
          {path: "/checkout", element:<Suspense><Checkout/></Suspense> },
          {path: "/product/:id", element:<Suspense><ProductDetail/></Suspense> },
          {path: "/*", element:<Suspense><NotFound/></Suspense> },
        ]},
      ])
    }

    </>
  )
}

export default React.memo(MainRouters)