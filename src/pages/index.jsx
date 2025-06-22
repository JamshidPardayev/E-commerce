import { Suspense } from '@/utils'
import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import About from './about/About'
import Contact from './contact/Contact'
const Layout = lazy(()=> import("./layout/Layout"))
const Home = lazy(()=> import("./home/Home"))
const Shop = lazy(()=> import("./shop/Shop"))

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
          {path: "/product/:id", element:<Suspense><div>detail</div></Suspense> },
        ]},
      ])
    }

    </>
  )
}

export default MainRouters